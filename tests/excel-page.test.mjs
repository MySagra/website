import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL;
const site = 'https://mysagra.com';
const paths = ['/festival-management-excel/', '/en/festival-management-excel/'];

for (const path of paths) {
  test(`renders Excel page with honest report preview and metadata: ${path}`, { skip: !base }, async () => {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200);
    const html = await response.text();
    const en = path.startsWith('/en/');
    assert.match(html, new RegExp(`<html lang="${en ? 'en' : 'it'}"`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${site}${path}"`));
    for (const localePath of paths) assert.ok(html.includes(`href="${site}${localePath}"`));
    assert.match(html, /data-request-type="demo"/);
    assert.match(html, /data-umami-event-location="excel-hero"/);
    assert.match(html, en ? /fictional examples/ : /valori sono inventati/);
    assert.match(html, en ? /not an Excel spreadsheet synchronised in real time/ : /non un foglio Excel sincronizzato in tempo reale/);
    assert.doesNotMatch(html, /\bdownload\s*=|THESIS:|FINISH:/);
    for (const sheet of ['Statistiche Ordini', 'Statistiche Pietanze', 'Statistiche Casse']) assert.ok(html.includes(sheet));
    for (const column of ['Data/Ora', 'Ricavo Totale', 'Ricavo Contanti', 'Ricavo Carta', 'Ordini Totali', 'Tempo Medio Completamento (min)', 'Nome', 'Quantità', 'Cassa']) assert.ok(html.includes(column));
    assert.equal((html.match(/class="sheet-panel"/g) || []).length, 3);
    assert.ok(!/<section[^>]*class="sheet-panel"[^>]*\bhidden/.test(html));
    const text = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
    const graph = JSON.parse(text)['@graph'];
    const web = graph.find(x => x['@type'] === 'WebPage');
    assert.equal(web.url, `${site}${path}`);
    assert.equal(web.inLanguage, en ? 'en' : 'it');
    const decode = text => text.replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
    assert.ok(decode(html).includes(`<title>${web.name}</title>`));
    assert.ok(decode(html).includes(`name="description" content="${web.description}"`));
    const faq = graph.find(x => x['@type'] === 'FAQPage');
    assert.equal(faq.mainEntity.length, 5);
    assert.equal((html.match(/<details\b/g) || []).length, 5);
    for (const q of faq.mainEntity) {
      assert.ok(decode(html).includes(q.name));
      assert.ok(decode(html).includes(q.acceptedAnswer.text));
    }
  });
}

test('Excel acquisition pages are discoverable in sitemap, homepage and footer', async () => {
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  for (const path of paths) {
    const block = sitemap.split('<url>').find(x => x.includes(`<loc>${site}${path}</loc>`));
    assert.ok(block);
    assert.ok(block.includes(`hreflang="it" href="${site}${paths[0]}"`));
    assert.ok(block.includes(`hreflang="en" href="${site}${paths[1]}"`));
  }
  for (const component of ['HomePage', 'Footer']) {
    const source = await readFile(new URL(`../src/components/${component}.astro`, import.meta.url), 'utf8');
    assert.ok(source.includes('festival-management-excel/'));
  }
});
