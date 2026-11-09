import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';

export const prerender = true;

const site = 'https://mysagra.com';

// Each page lists the source files that hold its own content. <lastmod> is the
// date of the latest git commit touching any of them, so it only moves when the
// page really changes. Shared chrome (header, footer, styles) is deliberately
// left out. If git history is unavailable (e.g. a shallow clone), <lastmod> is
// omitted rather than guessed.
const pages: { path: string; sources: string[] }[] = [
  { path: '/', sources: ['src/pages/index.astro', 'src/pages/en/index.astro', 'src/components/HomePage.astro', 'src/i18n/content.ts', 'src/lib/pricing.ts'] },
  { path: '/myclienti/', sources: ['src/pages/myclienti.astro', 'src/pages/en/myclienti.astro', 'src/components/MyClientiPage.astro', 'src/i18n/myclienti.ts'] },
  { path: '/self-hosting/', sources: ['src/pages/self-hosting.astro', 'src/pages/en/self-hosting.astro', 'src/components/SelfHostingPage.astro', 'src/i18n/self-hosting.ts', 'src/lib/self-hosting.ts'] },
  { path: '/festival-management-excel/', sources: ['src/pages/festival-management-excel.astro', 'src/pages/en/festival-management-excel.astro', 'src/components/ExcelPage.astro', 'src/i18n/excel.ts'] },
  { path: '/contact/', sources: ['src/pages/contact.astro', 'src/pages/en/contact.astro', 'src/components/ContactPage.astro', 'src/components/ContactForm.astro', 'src/i18n/contact.ts'] },
  { path: '/about/', sources: ['src/pages/about.astro', 'src/pages/en/about.astro', 'src/components/AboutPage.astro', 'src/i18n/about.ts'] },
  { path: '/privacy-policy/', sources: ['src/pages/privacy-policy.astro', 'src/pages/en/privacy-policy.astro', 'src/components/PrivacyPolicy.astro'] },
  { path: '/cookie-policy/', sources: ['src/pages/cookie-policy.astro', 'src/pages/en/cookie-policy.astro', 'src/components/CookiePolicy.astro'] },
];

function lastCommitDate(sources: string[]): string | undefined {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...sources], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : undefined;
  } catch {
    return undefined;
  }
}

function urlEntry(loc: string, itPath: string, enPath: string, lastmod?: string) {
  return [
    '\t<url>',
    `\t\t<loc>${loc}</loc>`,
    ...(lastmod ? [`\t\t<lastmod>${lastmod}</lastmod>`] : []),
    `\t\t<xhtml:link rel="alternate" hreflang="it" href="${site}${itPath}" />`,
    `\t\t<xhtml:link rel="alternate" hreflang="en" href="${site}${enPath}" />`,
    `\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${site}${itPath}" />`,
    '\t</url>',
  ].join('\n');
}

const entries = pages.flatMap(({ path, sources }) => {
  const enPath = path === '/' ? '/en/' : `/en${path}`;
  const lastmod = lastCommitDate(sources);
  return [urlEntry(`${site}${path}`, path, enPath, lastmod), urlEntry(`${site}${enPath}`, path, enPath, lastmod)];
});

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

export const GET: APIRoute = () => new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
