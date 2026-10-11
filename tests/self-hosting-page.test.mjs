import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const base = process.env.TEST_BASE_URL;
const site = 'https://mysagra.com';
const paths = ['/self-hosting/', '/en/self-hosting/'];

for (const path of paths) {
  test(`renders truthful, localized self-hosting metadata and matching FAQ at ${path}`, { skip: !base }, async () => {
    const response = await fetch(new URL(path, base), { headers: { 'Accept-Language': path.startsWith('/en/') ? 'it' : 'en' } });
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    const isEnglish = path.startsWith('/en/');
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.equal(title, isEnglish ? 'Free Self-Hosted Festival POS Software | MySagra' : 'Gestionale sagra gratis e self-hosted | MySagra');
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(description.length >= 140 && description.length <= 160);
    assert.match(description, /PolyForm Shield/);
    assert.ok(description.startsWith(isEnglish ? 'Free self-hosted festival POS software' : 'Gestionale sagra gratis'));
    assert.match(html, isEnglish ? /<h1\b[^>]*>Free festival POS software\./ : /<h1\b[^>]*>Il gestionale sagra gratis/);
    assert.ok(html.includes(`property="og:title" content="${title}"`));
    assert.ok(html.includes(`name="twitter:title" content="${title}"`));
    assert.ok(html.includes(`property="og:description" content="${description}"`));
    assert.ok(html.includes(`name="twitter:description" content="${description}"`));
    assert.match(html, /property="og:image:alt" content="[^"]+"/);
    assert.match(html, /name="twitter:image:alt" content="[^"]+"/);
    assert.match(html, /property="og:image:width" content="2400"/);
    assert.match(html, /property="og:image:height" content="1601"/);
    assert.match(html, /name="robots" content="index, follow, max-image-preview:large"/);
    assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /noindex/i);
    assert.match(html, /PolyForm Shield/);
    assert.match(html, /source available/);
    assert.match(html, /ghcr\.io\/mysagra\/mywizard:latest/);
    assert.match(html, /https:\/\/github\.com\/MySagra\/mysagra\?tab=License-1-ov-file/);
    assert.match(html, /https:\/\/github\.com\/MySagra\/mywizard/);
    assert.ok(html.includes(`rel="canonical" href="${site}${path}"`));
    assert.ok(html.includes(`hreflang="it" href="${site}/self-hosting/"`));
    assert.ok(html.includes(`hreflang="en" href="${site}/en/self-hosting/"`));
    assert.match(html, /data-open-contact="informazioni"/);
    assert.match(html, /class="github-star"[^>]*href="https:\/\/github\.com\/MySagra\/mysagra"/);
    assert.match(html, /class="benefit-list"/);
    assert.match(html, /id="copy-status" role="status" aria-live="polite"/);
    assert.match(html, /THESIS: Separate free self-hosting intent/);
    assert.ok(html.includes(`<html lang="${path.startsWith('/en/') ? 'en' : 'it'}"`));
    const schemaText = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
    const graph = schemaText.map((text) => JSON.parse(text)).find((schema) => schema['@graph'])['@graph'];
    const webPage = graph.find((entity) => entity['@type'] === 'WebPage');
    assert.equal(webPage.url, `${site}${path}`);
    assert.equal(webPage.name, title);
    assert.equal(webPage.description, description);
    assert.equal(webPage.inLanguage, isEnglish ? 'en' : 'it');
    const source = graph.find((entity) => entity['@type'] === 'SoftwareSourceCode');
    assert.equal(source.codeRepository, 'https://github.com/MySagra/mysagra');
    assert.equal(source.license, 'https://github.com/MySagra/mysagra/blob/main/LICENSE.md');
    assert.match(source.description, /not open source|non open source/);
    assert.equal(webPage.mainEntity['@id'], source['@id']);
    assert.equal(webPage.dateModified, '2026-10-11');
    assert.match(html, /<time datetime="2026-10-11"[\s>]/);
    assert.ok(webPage.citation.includes('https://github.com/MySagra/mywizard/blob/main/installer/README.md'));
    assert.ok(webPage.citation.includes(source.license));
    assert.equal(webPage.author['@id'], webPage.publisher['@id']);
    const markdownUrl = `${site}${isEnglish ? '/en' : ''}/self-hosting.md`;
    assert.ok(html.includes(`rel="alternate" type="text/markdown" href="${markdownUrl}"`));
    assert.ok(response.headers.get('link').includes(`<${markdownUrl}>; rel="alternate"; type="text/markdown"`));
    assert.equal(webPage.publisher['@id'], graph.find((entity) => entity['@type'] === 'Organization')['@id']);
    const image = graph.find((entity) => entity['@type'] === 'ImageObject');
    assert.equal(image.width, 2400);
    assert.equal(image.height, 1601);
    const faq = graph.find((entity) => entity['@type'] === 'FAQPage');
    assert.equal(faq.mainEntity.length, 9);
    assert.equal((html.match(/<details\b/g) || []).length, faq.mainEntity.length);
    const decode = (text) => text.replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const decoded = decode(html);
    for (const question of faq.mainEntity) {
      assert.ok(decoded.includes(question.name));
      assert.ok(decoded.includes(question.acceptedAnswer.text));
    }
    const markdownResponse = await fetch(new URL(`${path.replace(/\/$/, '')}.md`, base));
    assert.equal(markdownResponse.status, 200);
    assert.match(markdownResponse.headers.get('content-type'), /^text\/markdown; charset=utf-8$/);
    assert.equal(markdownResponse.headers.get('content-language'), isEnglish ? 'en' : 'it');
    assert.equal(markdownResponse.headers.get('x-robots-tag'), 'noindex, follow');
    assert.equal(markdownResponse.headers.get('link'), `<${site}${path}>; rel="canonical"`);
    const markdown = await markdownResponse.text();
    for (const question of faq.mainEntity) {
      assert.ok(markdown.includes(question.name));
      assert.ok(markdown.includes(question.acceptedAnswer.text));
    }
    assert.ok(markdown.includes(source.license));
    assert.ok(markdown.includes('ghcr.io/mysagra/mywizard:latest'));
    assert.ok(markdown.includes('-v "$PWD":/out'));
    assert.ok(markdown.includes('-v "${PWD}:/out"'));
    for (const agent of ['OAI-SearchBot', 'PerplexityBot']) {
      const agentResponse = await fetch(new URL(`${path.replace(/\/$/, '')}.md`, base), { headers: { 'User-Agent': agent } });
      assert.equal(agentResponse.status, 200);
      assert.equal(await agentResponse.text(), markdown);
    }
    assert.ok(!graph.some((entity) => entity.offers || entity.aggregateRating));
  });
}

test('provides a truthful AI discovery index without changing crawl permissions', async () => {
  const llms = await readFile(new URL('../public/llms.txt', import.meta.url), 'utf8');
  assert.match(llms, /^# MySagra/);
  assert.match(llms, /not open source/);
  assert.match(llms, /professional support are paid/);
  for (const path of paths) {
    assert.ok(llms.includes(`${site}${path}`));
    assert.ok(llms.includes(`${site}${path.replace(/\/$/, '')}.md`));
  }
  const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8');
  assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//);
  assert.match(robots, /User-agent: PerplexityBot\s+Allow: \//);
  assert.doesNotMatch(robots, /Disallow: \//);
  if (base) {
    const response = await fetch(new URL('/llms.txt', base));
    assert.equal(response.status, 200);
    assert.equal((await response.text()).replace(/\r\n/g, '\n'), llms.replace(/\r\n/g, '\n'));
  }
});

test('includes both self-hosting locales and their alternates in the sitemap', async () => {
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  for (const path of paths) {
    assert.ok(sitemap.includes(`<loc>${site}${path}</loc>`));
    const block = sitemap.split('<url>').find((entry) => entry.includes(`<loc>${site}${path}</loc>`));
    assert.ok(block.includes(`hreflang="it" href="${site}/self-hosting/"`));
    assert.ok(block.includes(`hreflang="en" href="${site}/en/self-hosting/"`));
  }
});
