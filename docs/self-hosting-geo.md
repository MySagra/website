# MySagra self-hosting: AI search and agent-readability improvements

## Scope and evidence

This work improves `/self-hosting/` and `/en/self-hosting/`, with a small site-wide discovery index. It does not change the homepage's commercial intent, consent handling or crawler policy. No AI citation baseline, Search Console data, production CDN/WAF configuration or referral analytics was available. Rankings, citations and Google AI Overview inclusion are not measured or guaranteed.

Product claims come from the owner's confirmation of free self-hosting for one's own festival, existing published-service copy, the MyWizard installation guide and the MySagra license. The public MyWizard guide and license were fetched during this pass; the guide's Bash and PowerShell quick starts match the website commands. This is not a deployment test or independent legal opinion.

## Changes

- Nine natural-language FAQ answers cover free use, licensing, technical skills, beta readiness, Docker-host access, food sales, total operating costs, Internet requirements and later professional-service requests. Answers identify MySagra or MyWizard explicitly and keep relevant limitations with the claim.
- The free-versus-managed introduction is a standalone comparison: self-hosting has no software subscription, while infrastructure, maintenance and technical work remain the organizer's responsibility. Managed cloud and support are paid and scope-dependent. No numeric price is invented.
- A quiet source block after the FAQ links the official wizard guide, MySagra license and PolyForm Shield text. All three destinations returned HTTP 200. The PolyForm version URL works without a trailing slash; the slash variant returned 404 and is not used.
- A visible `<time>` and WebPage `dateModified` share the fixed editorial date in `src/lib/self-hosting.ts`. The date is not generated from the request time. WebPage `author` references the existing MySagra organization; `citation` contains the same sources shown to readers. No personal reviewer, credentials or certification is fabricated.
- `/self-hosting.md` and `/en/self-hosting.md` are plain-text Markdown representations generated from the same localized content and shared commands as HTML. They include operational caveats, both commands, requirements, steps, license limits, comparison items, all FAQ answers, sources and the commercial close. No user-agent-specific copy, hidden AI-only claims or client-side rendering is required.
- HTML advertises Markdown through both `<link rel="alternate" type="text/markdown">` and the HTTP `Link` header. Markdown declares `Content-Type`, `Content-Language`, a canonical HTTP link to HTML and `X-Robots-Tag: noindex, follow`. Only the primary HTML URLs remain in the XML sitemap.
- `public/llms.txt` indexes canonical bilingual product/self-hosting pages, their Markdown representations and official technical sources. It explains the licensing and paid-service boundaries. It is an optional discovery aid, not a recognized Google ranking requirement or guaranteed entry point for every assistant. A redundant `llms-full.txt` or speculative knowledge-bundle format is not introduced.

## Access and indexing

The existing `robots.txt` allows OAI-SearchBot and PerplexityBot, as well as other existing agents. It was left unchanged. Search/retrieval access and model-training access are different decisions; the existing GPTBot allowance is not implicitly changed by this work.

Robots permission is not proof of retrieval. Production HTTP status, CDN bot challenges, WAF rules, authentication and engine indexing must still be checked after deployment. Google AI features rely on ordinary crawlability, indexing and helpful content; no special AI markup or `llms.txt` is required for eligibility. FAQPage is kept consistent with visible answers, not treated as a promise of FAQ rich results or AI citations.

## Verification

- Astro check: zero errors and warnings, with the existing Analytics script-processing hint.
- Production build: passed.
- All 18 automated tests pass, including canonical normalization, localized metadata, nine visible/schema FAQ answers, HTML/Markdown answer parity, response headers, source references, executable-command text and discovery-index truthfulness.
- Both languages checked in Edge at 1440, 390 and 320 pixels: no horizontal overflow or JavaScript runtime errors. FAQ expansion, Markdown navigation and the existing quote modal work.
- With JavaScript disabled, both terminal commands, all FAQ markup and official-source links remain present in both languages.
- Source-block screenshots inspected at desktop/mobile widths in `.impeccable/review/selfhosting-geo-{it,en}-{1440,390}.png`. Existing palette, type and aligned comparison cards are preserved.

## Maintenance

Update `SELF_HOSTING_UPDATED_AT` only when the page receives a substantive editorial change, then update the expected date in tests. Keep the HTML and Markdown on the shared source; do not hand-edit generated representations. Recheck the guide when changing commands and the license when changing permitted-use explanations. If routes, paid offers or product capabilities change, review `llms.txt` too.

## Post-publication measurement

Start with these queries in both languages; they are an editorial test set, not researched search volumes:

| Italian | English |
| --- | --- |
| `gestionale sagra gratis self-hosted` | `free self-hosted festival POS software` |
| `MySagra è open source?` | `Is MySagra open source?` |
| `MySagra gratis per una sagra che vende cibo` | `Can I use MySagra for free at a food festival?` |
| `installare MySagra con Docker` | `Install MySagra with Docker` |
| `MySagra self-hosting o cloud gestito` | `MySagra self-hosting vs managed cloud` |

For each run, record the date, engine/model, prompt, answer, cited URL, brand mention, licensing/cost accuracy and whether the site is actually cited. Repeat comparable prompts periodically without treating one personalized answer as stable visibility. Track AI referral sessions and quote requests separately; attribution may be incomplete. Search Console impressions and clicks help assess ordinary search, not all assistant citations.

The next higher-leverage off-site step is consistent official repository/readme documentation and authentic third-party use cases or reviews. No invented review, paid placement, directory listing, community post or external citation was created here.
