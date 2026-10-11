import assert from 'node:assert/strict';
import test from 'node:test';

const base = process.env.TEST_BASE_URL;
const paths = ['/', '/en/', '/self-hosting/', '/en/self-hosting/'];

function decodeAttribute(value) {
  return value.replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&amp;', '&');
}

for (const path of paths) {
  test(`keeps basic analytics active and gates only replay at ${path}`, { skip: !base }, async () => {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    const scripts = [...html.matchAll(/<script\b([^>]*)>[\s\S]*?<\/script>/g)]
      .map(([, attributes]) => Object.fromEntries([...attributes.matchAll(/([\w:-]+)="([^"]*)"/g)]
        .map(([, name, value]) => [name, decodeAttribute(value)])))
      .filter((attributes) => attributes['data-website-id']);
    assert.equal(scripts.length, 2);
    const tracker = scripts.find((attributes) => attributes.src);
    const recorder = scripts.find((attributes) => attributes['data-name'] === 'umami-replays');
    assert.ok(tracker);
    assert.notEqual(tracker.type, 'text/plain');
    assert.equal(tracker['data-name'], undefined);
    assert.ok(recorder);
    assert.equal(recorder.src, undefined);
    assert.equal(recorder.type, 'text/plain');
    assert.equal(recorder['data-type'], 'text/javascript');
    assert.match(recorder['data-src'], /\/recorder\.js$/);
    assert.equal(recorder['data-website-id'], tracker['data-website-id']);
    assert.equal(recorder['data-block-selector'], '#contact-dialog');
    assert.equal(recorder['data-sample-rate'], '0.15');
    const configMatch = html.match(/id="klaro-config"\s+data-config="([^"]+)"/);
    assert.ok(configMatch);
    const config = JSON.parse(decodeAttribute(configMatch[1]));
    assert.equal(config.services.length, 1);
    assert.equal(config.services[0].name, 'umami-replays');
    assert.equal(config.services[0].title, 'Umami Session Replay');
    assert.deepEqual(config.services[0].purposes, ['session-replay']);
    assert.ok(config.translations[config.lang].purposes['session-replay'].title);
    assert.equal(config.services[0].required, false);
    assert.equal(config.services[0].default, false);
    assert.equal(config.hideDeclineAll, false);
    assert.equal(config.groupByPurpose, false);
    assert.equal(config.translations[config.lang].acceptSelected, config.translations[config.lang].save);
    assert.ok(config.translations[config.lang].consentModal.title);
    assert.notEqual(config.translations[config.lang].consentModal.description, config.translations[config.lang].consentNotice.description);
    assert.equal(config.cookieName, 'klaro-consent-v2');
  });
}

for (const lang of ['it', 'en']) {
  test(`discloses the separate statistics and replay behavior in ${lang}`, { skip: !base }, async () => {
    const prefix = lang === 'en' ? '/en' : '';
    const disclosure = lang === 'en'
      ? 'basic Umami statistics remain active even if you reject'
      : 'le statistiche di base Umami restano attive anche se rifiuti';
    const response = await fetch(new URL(`${prefix}/cookie-policy/`, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(disclosure));
    const privacyResponse = await fetch(new URL(`${prefix}/privacy-policy/`, base));
    assert.equal(privacyResponse.status, 200);
    const privacy = await privacyResponse.text();
    assert.ok(privacy.includes(lang === 'en'
      ? 'loads even without consent to replays'
      : 'si carica anche senza consenso ai replay'));
  });
}
