// Markdown twins of the main pages, for AI agents and LLM crawlers.
// Each one is generated from the same i18n content as its HTML page, is
// marked noindex and points back to the HTML page as canonical, like
// src/lib/self-hosting.ts does for the self-hosting page.
import { getContent } from '../i18n/content';
import { getMyClientiContent } from '../i18n/myclienti';
import { getExcelContent } from '../i18n/excel';
import { getAboutContent } from '../i18n/about';
import { formatPrice } from './pricing';
import type { Lang } from '../i18n/ui';

const SITE = 'https://mysagra.com';
const homePath = (lang: Lang) => (lang === 'en' ? '/en/' : '/');
const join = (blocks: (string | false | undefined)[]) => `${blocks.filter(Boolean).join('\n\n')}\n`;
const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n');

export function renderHomeMarkdown(lang: Lang) {
  const t = getContent(lang);
  const home = homePath(lang);
  const s = t.soluzioni;
  const tiers = s.tiers.map((tier) => {
    const price = tier.pricing
      ? `${s.pricingLabels.from} ${formatPrice(tier.pricing.weekly, lang)} ${s.pricingLabels.perWeek} · ${formatPrice(tier.pricing.monthly, lang)} ${s.pricingLabels.perMonth}`
      : `${s.pricingLabels.price}: ${tier.customPrice}`;
    return join([`### ${tier.name}`, `**${price}**`, tier.desc, list(tier.points), tier.warning && `> ${tier.warning}`]).trim();
  });
  const self = s.selfHosting;
  return join([
    `# ${t.hero.h1Line1} ${t.hero.h1Line2}`,
    t.hero.dek,
    `## ${t.vantaggi.h2}`,
    ...t.outcomes.map((o) => `### ${o.title}\n\n${o.desc}`),
    `## ${s.h2}`,
    s.lede,
    ...tiers,
    `### ${self.name}`,
    join([self.price && `**${self.price}**`, self.desc, self.points && list(self.points), self.warning && `> ${self.warning}`, `[${self.cta}](${SITE}${self.href})`]).trim(),
    s.pricingNote,
    `## ${t.ecosistema.h2}`,
    t.ecosistema.lede,
    ...t.ecosistema.items.map((item) => `### ${item.name}\n\n${item.desc}`),
    `## ${t.story.h2}`,
    t.story.p,
    `[${lang === 'en' ? 'Meet the team' : 'Scopri chi siamo'}](${SITE}${home}about/)`,
    `## ${t.faq.h2}`,
    ...t.faq.items.map((item) => `### ${item.q}\n\n${item.a}`),
    `[${lang === 'en' ? 'Contact us' : 'Contattaci'}](${SITE}${home}contact/)`,
  ]);
}

export function renderMyClientiMarkdown(lang: Lang) {
  const t = getMyClientiContent(lang);
  const home = homePath(lang);
  return join([
    `# ${t.headline} ${t.headlineEnd}`,
    t.intro,
    t.note,
    `## ${t.customizeTitle}`,
    t.customizeIntro,
    ...t.fields.map(([title, copy]) => `### ${title}\n\n${copy}`),
    `## ${t.orderTitle}`,
    t.orderIntro,
    t.orderSteps.map(([title, copy], i) => `${i + 1}. **${title}**: ${copy}`).join('\n'),
    `## ${t.syncTitle}`,
    t.syncIntro,
    `### ${t.recoveryTitle}`,
    t.recoveryCopy,
    `## ${t.shareTitle}`,
    t.shareIntro,
    ...t.shareDetails.map(([title, copy]) => `### ${title}\n\n${copy}`),
    `## ${t.demoTitle}`,
    t.demoIntro,
    `[${t.demo}](https://clientidemo.mysagra.com/)`,
    `## ${t.faqTitle}`,
    ...t.faq.map(([q, a]) => `### ${q}\n\n${a}`),
    `## ${t.plansTitle}`,
    t.plansCopy,
    `[${t.plans}](${SITE}${home}#solutions)`,
  ]);
}

export function renderExcelMarkdown(lang: Lang) {
  const t = getExcelContent(lang);
  const home = homePath(lang);
  const [h1, h2, h3] = t.compareHeaders;
  return join([
    `# ${t.headline} ${t.headlineEnd}`,
    t.intro,
    `## ${t.reportTitle}`,
    t.reportIntro,
    ...t.sheets.map(([title, copy]) => `### ${title}\n\n${copy}`),
    `## ${t.templateTitle}`,
    t.templateCopy,
    list(t.templatePoints),
    `[${t.templateCta}](${SITE}${t.templateFile})`,
    t.templateNote,
    `## ${t.limitsTitle}`,
    t.limitsIntro,
    [`| ${h1} | ${h2} | ${h3} |`, '| --- | --- | --- |', ...t.comparison.map((row) => `| ${row.join(' | ')} |`)].join('\n'),
    t.limitsNote,
    `## ${t.operationsTitle}`,
    t.operationsIntro,
    ...t.features.map(([title, copy]) => `### ${title}\n\n${copy}`),
    `## ${t.workflowTitle}`,
    t.workflowIntro,
    t.workflow.map(([title, copy], i) => `${i + 1}. **${title}**: ${copy}`).join('\n'),
    `## ${t.faqTitle}`,
    ...t.faq.map(([q, a]) => `### ${q}\n\n${a}`),
    `[${t.plans}](${SITE}${home}#solutions)`,
  ]);
}

export function renderAboutMarkdown(lang: Lang) {
  const t = getAboutContent(lang);
  const home = homePath(lang);
  return join([
    `# ${t.h1}`,
    t.intro,
    `## ${t.foundersTitle}`,
    `- **Nicolò Spampatti**, ${t.role}. ${t.founderNote} [LinkedIn](https://www.linkedin.com/in/nicol%C3%B2-spampatti-b7833931b/)`,
    `- **Gabriele Bianco**, ${t.role}. ${t.founderNote} [LinkedIn](https://www.linkedin.com/in/gabriele-bianco/)`,
    `## ${t.whyTitle}`,
    t.whyCopy,
    ...t.principles.map(([title, copy]) => `### ${title}\n\n${copy}`),
    `## ${t.factsTitle}`,
    list(t.facts.map(([label, value]) => `**${label}**: ${value}`)),
    `[${t.ctaPrimary}](${SITE}${home}contact/)`,
  ]);
}

const renderers = { home: renderHomeMarkdown, myclienti: renderMyClientiMarkdown, excel: renderExcelMarkdown, about: renderAboutMarkdown };
const htmlPaths = { home: '', myclienti: 'myclienti/', excel: 'festival-management-excel/', about: 'about/' };
export type MarkdownPage = keyof typeof renderers;

export function markdownUrl(page: MarkdownPage, lang: Lang) {
  const base = `${SITE}${homePath(lang)}`;
  return page === 'home' ? `${base}index.md` : `${base}${htmlPaths[page].replace(/\/$/, '')}.md`;
}

export function createMarkdownResponse(page: MarkdownPage, lang: Lang) {
  return new Response(renderers[page](lang), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Language': lang,
      'X-Robots-Tag': 'noindex, follow',
      Link: `<${SITE}${homePath(lang)}${htmlPaths[page]}>; rel="canonical"`,
    },
  });
}
