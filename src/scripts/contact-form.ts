import { contactIntents, contactPlans, contactPeriods, type ContactIntent } from '../lib/contact';
import type { getContactContent } from '../i18n/contact';
import type { contactLabels } from '../lib/contact';

declare global {
  interface Window { umami?: { track: (event: string, data?: Record<string, string>) => void }; }
}
type Config = ReturnType<typeof getContactContent> & { labels: typeof contactLabels.it | typeof contactLabels.en; source: string };

function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  if (!form || form.dataset.ready) return;
  form.dataset.ready = 'true';
  const t: Config = JSON.parse(form.dataset.config || '{}');
  const dialog = document.querySelector<HTMLDialogElement>('#contact-dialog');
  const status = form.querySelector<HTMLElement>('#contact-status')!;
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const another = form.querySelector<HTMLButtonElement>('.another')!;
  const planField = form.querySelector<HTMLElement>('.plan-field')!;
  const messageLabel = form.querySelector<HTMLElement>('[data-message-label]')!;
  const context = form.querySelector<HTMLElement>('.context')!;
  const contextLabel = form.querySelector<HTMLElement>('[data-context-label]')!;
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement;
  let busy = false;
  let completed = false;
  let started = false;
  const intent = () => (form.querySelector<HTMLInputElement>('[name="requestType"]:checked')?.value || 'informazioni') as ContactIntent;
  const period = () => field('contextPeriod').value;
  const track = (event: string) => window.umami?.track(event, { source: t.source, intent: intent(), plan: field('plan').value, period: period() });
  const update = () => {
    if (field('plan').value === 'custom') field('contextPeriod').value = '';
    planField.hidden = intent() !== 'preventivo';
    const copy = t.messages[intent()];
    messageLabel.textContent = copy.label;
    field('message').placeholder = copy.placeholder;
    const source = ['excel', 'myclienti', 'selfhosting'].includes(t.source) ? t.labels.sources[t.source as 'excel' | 'myclienti' | 'selfhosting'] : '';
    // The pricing period travels as metadata (contextPeriod) only; the visible context names the source page.
    context.hidden = !source;
    contextLabel.textContent = source;
  };
  const resetStatus = () => {
    completed = false;
    status.textContent = '';
    status.removeAttribute('data-state');
    submit.removeAttribute('data-state');
    submit.textContent = t.submit;
    submit.disabled = false;
    another.hidden = true;
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  };
  const chooseIntent = (value: string) => {
    const input = form.querySelector<HTMLInputElement>(`[name="requestType"][value="${value}"]`);
    if (input) input.checked = true;
  };
  const reset = () => {
    form.reset();
    resetStatus();
    started = false;
    update();
  };
  form.addEventListener('input', (event) => {
    if (!started) { track('contact-form-start'); started = true; }
    if (event.target instanceof HTMLElement) event.target.removeAttribute('aria-invalid');
  });
  form.addEventListener('change', update);
  another.addEventListener('click', () => { reset(); field('name').focus(); });
  document.querySelectorAll<HTMLElement>('[data-open-contact]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      if (busy) { if (dialog && !dialog.open) dialog.showModal(); return; }
      if (completed) reset();
      const raw = trigger.dataset.requestType || 'informazioni';
      const legacyPlan = contactPlans.find(plan => plan === raw);
      const plan = contactPlans.find(plan => plan === trigger.dataset.contactPlan) || legacyPlan || '';
      field('plan').value = plan;
      const selected = trigger.dataset.contactPeriod || (plan && plan !== 'custom' ? document.querySelector<HTMLInputElement>('[name="pricing-period"]:checked')?.value : '');
      field('contextPeriod').value = plan === 'custom' ? '' : contactPeriods.find(period => period === selected) || '';
      chooseIntent(legacyPlan ? 'preventivo' : contactIntents.find(value => value === raw) || 'informazioni');
      update();
      if (dialog) { if (!dialog.open) dialog.showModal(); }
      else { form.scrollIntoView({ block: 'start', behavior: 'smooth' }); field('name').focus({ preventScroll: true }); }
    });
  });
  document.querySelector('#contact-close')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || completed) return;
    status.textContent = '';
    status.removeAttribute('data-state');
    for (const name of ['name', 'email', 'message']) {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      input.value = input.value.trim();
      input.setAttribute('aria-invalid', String(!input.validity.valid));
    }
    if (!form.checkValidity()) {
      status.dataset.state = 'error'; status.textContent = t.invalid;
      track('contact-validation-error'); form.reportValidity(); return;
    }
    const data = new FormData(form);
    const payload = {
      lang: data.get('lang'), name: data.get('name'), email: data.get('email'), phone: data.get('phone'),
      message: data.get('message'), requestType: intent(), plan: intent() === 'preventivo' ? field('plan').value : '',
      period: period(), sourcePath: data.get('sourcePath'),
    };
    busy = true; submit.disabled = true; submit.textContent = t.submitting;
    form.setAttribute('aria-busy', 'true');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload), signal: controller.signal });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(typeof result.error === 'string' ? result.error : t.error);
      completed = true;
      status.dataset.state = 'success'; status.textContent = t.success;
      submit.dataset.state = 'sent';
      submit.innerHTML = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      submit.append(t.sent);
      another.hidden = false;
      track('contact-submit-success');
      status.focus({ preventScroll: true });
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error instanceof Error && error.name !== 'AbortError' ? error.message : t.error;
      track('contact-submit-error');
      status.focus({ preventScroll: true });
    } finally {
      clearTimeout(timeout); busy = false;
      if (!completed) { submit.disabled = false; submit.textContent = t.submit; }
      form.removeAttribute('aria-busy');
    }
  });
  submit.disabled = false;
  update();
}
initContactForm();
document.addEventListener('astro:page-load', initContactForm);
