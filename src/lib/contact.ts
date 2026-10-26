import type { Lang } from '../i18n/ui';

export const contactIntents = ['demo', 'preventivo', 'informazioni'] as const;
export type ContactIntent = typeof contactIntents[number];
export const contactPlans = ['cloud', 'onsite', 'custom'] as const;
export type ContactPlan = typeof contactPlans[number];
export const contactPeriods = ['weekly', 'monthly'] as const;
export type ContactPeriod = typeof contactPeriods[number];

export const contactLabels = {
  it: {
    intents: { demo: 'Demo', preventivo: 'Preventivo', informazioni: 'Domanda' },
    plans: { cloud: 'Cloud gestito', onsite: 'Installazione in loco', custom: 'Build su misura' },
    periods: { weekly: 'Settimanale', monthly: 'Mensile' },
    sources: { home: 'Homepage', excel: 'Report Excel', myclienti: 'MyClienti', selfhosting: 'Self-hosting', contact: 'Pagina contatti', other: 'Sito MySagra' },
  },
  en: {
    intents: { demo: 'Demo', preventivo: 'Quote', informazioni: 'Question' },
    plans: { cloud: 'Managed cloud', onsite: 'On-site installation', custom: 'Custom development' },
    periods: { weekly: 'Weekly', monthly: 'Monthly' },
    sources: { home: 'Homepage', excel: 'Excel reports', myclienti: 'MyClienti', selfhosting: 'Self-hosting', contact: 'Contact page', other: 'MySagra website' },
  },
} as const;

export function contactSource(path: string) {
  const normalized = path.replace(/^\/en(?=\/)/, '').replace(/\/+$/, '') || '/';
  if (normalized === '/') return 'home';
  if (normalized === '/festival-management-excel') return 'excel';
  if (normalized === '/myclienti') return 'myclienti';
  if (normalized === '/self-hosting') return 'selfhosting';
  if (normalized === '/contact') return 'contact';
  return 'other';
}

export interface ContactData {
  lang: Lang;
  name: string;
  email: string;
  phone: string;
  message: string;
  topic: 'informazioni' | 'supporto';
  requestType: ContactIntent;
  plan: ContactPlan | '';
  period: ContactPeriod | '';
  source: ReturnType<typeof contactSource>;
  subject: string;
}

type ContactError = 'invalidRequest' | 'missingFields' | 'invalidEmail' | 'tooLong';
export function parseContact(value: unknown): { ok: true; data: ContactData } | { ok: false; error: ContactError; lang: Lang } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { ok: false, error: 'invalidRequest', lang: 'it' };
  const body = value as Record<string, unknown>;
  const lang: Lang = body.lang === 'en' ? 'en' : 'it';
  const fail = (error: ContactError) => ({ ok: false as const, error, lang });
  const str = (key: string) => typeof body[key] === 'string' ? (body[key] as string).trim() : '';
  const name = str('name');
  const email = str('email');
  const phone = str('phone');
  const message = str('message');
  if (!name || !email || !message) return fail('missingFields');
  if (name.length > 120 || email.length > 254 || phone.length > 60 || message.length > 6000) return fail('tooLong');
  if (/[\r\n]/.test(name) || /[\r\n]/.test(email)) return fail('invalidRequest');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('invalidEmail');
  const legacyPlan = contactPlans.find(plan => plan === body.requestType);
  const requestType = legacyPlan ? 'preventivo' : contactIntents.find(intent => intent === body.requestType);
  if (!requestType) return fail('invalidRequest');
  const plan = contactPlans.find(plan => plan === body.plan) || legacyPlan || '';
  if (body.plan && !plan) return fail('invalidRequest');
  const period = plan === 'custom' ? '' : contactPeriods.find(period => period === body.period) || '';
  if (body.period && !period && plan !== 'custom') return fail('invalidRequest');
  const source = contactSource(str('sourcePath'));
  const labels = contactLabels[lang];
  const subject = [
    `[${labels.intents[requestType]}] ${name}`,
    plan ? labels.plans[plan] : '',
    period ? labels.periods[period] : '',
    !['home', 'contact', 'other'].includes(source) ? labels.sources[source] : '',
  ].filter(Boolean).join(' · ');
  return { ok: true, data: { lang, name, email, phone, message, requestType, plan, period, source, subject, topic: body.topic === 'supporto' ? 'supporto' : 'informazioni' } };
}
