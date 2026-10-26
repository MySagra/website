import assert from 'node:assert/strict';
import test from 'node:test';
import { parseContact, contactSource } from '../src/lib/contact.ts';

const valid = { name: 'Anna Rossi', email: 'anna@example.com', message: 'Sagra a giugno, tre casse.', requestType: 'preventivo', lang: 'it', plan: 'cloud', period: 'monthly', sourcePath: '/festival-management-excel/' };

test('generates subject on server from validated structured context, ignoring supplied subject', () => {
  const result = parseContact({ ...valid, subject: 'Injected arbitrary subject' });
  assert.equal(result.ok, true);
  assert.equal(result.data.subject, '[Preventivo] Anna Rossi · Cloud gestito · Mensile · Report Excel');
  assert.equal(result.data.source, 'excel');
  assert.equal(result.data.topic, 'informazioni');
});

test('accepts a minimal question without a subject, phone, plan or period', () => {
  const result = parseContact({ name: ' Jane ', email: 'jane@example.com', message: ' A question ', requestType: 'informazioni', lang: 'en' });
  assert.equal(result.ok, true);
  assert.equal(result.data.subject, '[Question] Jane');
  assert.equal(result.data.message, 'A question');
});

test('recognizes legacy plan requests without keeping the old subject field mandatory', () => {
  const result = parseContact({ ...valid, requestType: 'onsite', plan: '', period: '' });
  assert.equal(result.ok, true);
  assert.equal(result.data.requestType, 'preventivo');
  assert.equal(result.data.plan, 'onsite');
});

test('does not attach a service period to custom development', () => {
  const result = parseContact({ ...valid, plan: 'custom', period: 'monthly' });
  assert.equal(result.ok, true);
  assert.equal(result.data.period, '');
});

test('rejects malformed input, missing fields, invalid enums, email and oversized fields', () => {
  for (const value of [null, [], 'text', 7, { ...valid, name: {} }, { ...valid, message: '  ' }, { ...valid, email: 'invalid' }, { ...valid, requestType: 'unknown' }, { ...valid, plan: 'invented' }, { ...valid, period: 'annual' }, { ...valid, name: 'Name\r\nBcc: target@example.com' }, { ...valid, message: 'x'.repeat(6001) }]) {
    assert.equal(parseContact(value).ok, false, JSON.stringify(value).slice(0, 100));
  }
});

test('recognizes localized sources without capturing URL query strings or unknown paths', () => {
  assert.equal(contactSource('/en/myclienti/'), 'myclienti');
  assert.equal(contactSource('/en/contact/'), 'contact');
  assert.equal(contactSource('/something-private'), 'other');
});

const base = process.env.TEST_BASE_URL;
for (const prefix of ['', '/en']) {
  test(`contact page has shared accessible form and no subject/service select: ${prefix || 'it'}`, { skip: !base }, async () => {
    const res = await fetch(`${base}${prefix}/contact/`);
    assert.equal(res.status, 200);
    const html = await res.text();
    assert.equal((html.match(/<form\b/g) || []).length, 1);
    assert.match(html, /class="contact-form rr-block"/);
    assert.match(html, /rel="canonical" href="https:\/\/mysagra.com\/(?:en\/)?contact\/"/);
    assert.doesNotMatch(html, /name="subject"|<select[^>]*name="requestType"/);
    assert.match(html, /name="requestType" value="demo"/);
    assert.match(html, /name="requestType" value="preventivo"/);
    assert.match(html, /name="requestType" value="informazioni"/);
    assert.match(html, /mailto:info@mysagra.com/);
  });
}

test('contact API rejects malformed submissions without attempting to send mail', { skip: !base }, async () => {
  for (const value of [null, [], { ...valid, message: '' }, { ...valid, email: 'invalid' }]) {
    const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(value) });
    assert.equal(res.status, 400);
    assert.equal((await res.json()).ok, false);
  }
});
