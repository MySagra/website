import { getSelfHostingContent } from '../i18n/self-hosting';
import type { Lang } from '../i18n/ui';

export const SELF_HOSTING_UPDATED_AT = '2026-10-11';

export const selfHostingCommands = [
  { id: 'bash', label: 'Linux / macOS', command: 'mkdir -p ~/mysagra && cd ~/mysagra\n\ndocker run --rm -it \\\n  -v "$PWD":/out \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  ghcr.io/mysagra/mywizard:latest' },
  { id: 'powershell', label: 'Windows · PowerShell', command: 'New-Item -ItemType Directory -Force -Path ~\\mysagra | Out-Null\nSet-Location ~\\mysagra\n\ndocker run --rm -it `\n  -v "${PWD}:/out" `\n  -v /var/run/docker.sock:/var/run/docker.sock `\n  ghcr.io/mysagra/mywizard:latest' },
];

export function getSelfHostingUpdatedLabel(lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'it' ? 'it-IT' : 'en-GB', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${SELF_HOSTING_UPDATED_AT}T00:00:00Z`));
}

export function renderSelfHostingMarkdown(lang: Lang) {
  const t = getSelfHostingContent(lang);
  const home = lang === 'en' ? '/en/' : '/';
  const canonical = `https://mysagra.com${home}self-hosting/`;
  const paragraphs = [
    `# ${t.headline}`,
    `[${t.breadcrumb}](${canonical})`,
    t.intro,
    t.heroNote,
    `[${t.plans}](https://mysagra.com${home}#solutions)`,
    '## MyWizard',
    t.wizardIntro,
    t.beta,
    t.socket,
    ...selfHostingCommands.flatMap(({ id, label, command }) => [`### ${label}`, `\`\`\`${id}\n${command}\n\`\`\``]),
    `[${t.repository}](https://github.com/MySagra/mywizard)`,
    `[${t.githubStar}](https://github.com/MySagra/mysagra)`,
    `## ${t.requirementsTitle}`,
    t.requirementsIntro,
    ...t.requirements.flatMap(([title, description]) => [`### ${title}`, description]),
    `## ${t.stepsTitle}`,
    ...t.steps.map(([title, description], index) => `${index + 1}. **${title}**: ${description}`),
    `[${t.docs}](https://github.com/MySagra/mywizard/blob/main/installer/README.md)`,
    `## ${t.licenseTitle}`,
    t.licenseIntro,
    t.licenseCopy,
    t.licenseNote,
    `[${t.licenseLink}](https://github.com/MySagra/mysagra?tab=License-1-ov-file)`,
    `[${t.sourceLink}](https://github.com/MySagra/mysagra)`,
    `## ${t.choiceTitle}`,
    t.choiceIntro,
    `### ${t.selfTitle}`,
    t.selfCopy,
    t.selfItems.map((item) => `- ${item}`).join('\n'),
    `[${t.selfAction}](${canonical}#wizard)`,
    `### ${t.paidTitle}`,
    t.paidCopy,
    t.paidItems.map((item) => `- ${item}`).join('\n'),
    `[${t.quote}](https://mysagra.com${home}#solutions)`,
    t.scope,
    `## ${t.faqTitle}`,
    ...t.faq.flatMap(([question, answer]) => [`### ${question}`, answer]),
    `## ${t.sourcesTitle}`,
    t.sourcesIntro,
    t.sources.map(([label, url]) => `- [${label}](${url})`).join('\n'),
    `${t.updatedLabel} ${getSelfHostingUpdatedLabel(lang)}.`,
    `## ${t.closingTitle}`,
    t.closingCopy,
    `[${t.plans}](https://mysagra.com${home}#solutions)`,
  ];
  return `${paragraphs.join('\n\n')}\n`;
}

export function createSelfHostingMarkdownResponse(lang: Lang) {
  const home = lang === 'en' ? '/en/' : '/';
  return new Response(renderSelfHostingMarkdown(lang), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Language': lang,
      'X-Robots-Tag': 'noindex, follow',
      Link: `<https://mysagra.com${home}self-hosting/>; rel="canonical"`,
    },
  });
}
