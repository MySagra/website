# MyClienti SEO and GEO audit

Audit date: 2026-10-01. Scope: `/myclienti/` and `/en/myclienti/`, local source and rendered pages, plus public route availability and robots.txt. This is a technical/content audit, not a ranking or AI citation measurement.

## Executive summary

The local implementation has a solid crawlable foundation: server-rendered content, one H1, self-referencing canonicals, reciprocal IT/EN hreflang with x-default, sitemap entries, public demo access, descriptive image alternatives, and FAQ markup matching visible answers.

**The release blocker is deployment:** both public MyClienti URLs returned HTTP 404 during this audit. Local URLs return 200. Publish the updated site and verify the production responses before requesting indexing.

The primary content opportunities were a clearer product definition, more informative section headings, answers about QR codes and installation, and smaller screenshot downloads. These have been implemented in both locales.

## Findings and actions

| Priority | Finding | Evidence | Impact | Action/status |
| --- | --- | --- | --- | --- |
| P1 | Public product routes return 404 | HTTPS requests to both localized public URLs returned 404 | Blocks discovery of the product page as an indexable document | Deploy, confirm 200, then inspect URLs in Search Console |
| P2 | Product definition was indirect in the hero | Initial paragraph introduced benefits without immediately defining the web app | Visitors and answer engines had to infer the category | Implemented a direct definition covering browser access, customization, sharing, ordering and counter payment |
| P2 | Section headings were mostly promotional | Headings such as “Not just any menu. Yours.” | Less clear coverage of creation, synchronization and sharing intent | Implemented descriptive H2s without changing the page structure |
| P2 | Missing answers for QR menus, installation and PDF comparison | Original FAQ had seven questions | Missed relevant organizer questions | Added three grounded FAQ answers; ten answers now share one source with JSON-LD |
| P2 | Oversized screenshots for their display width | Originals are approximately 278 KiB and 200 KiB, displayed at 200–270 CSS pixels | Avoidable image transfer, especially on mobile | Added 540px WebP derivatives (~63 KiB and ~49 KiB), srcset and sizes; preserved originals for higher-density screens |
| P3 | Metadata could be more focused | Original descriptions were 178/183 characters; EN title was 64 characters | Potential snippet truncation and less direct query alignment | Updated titles to 57/60 characters and descriptions to 162/153; lengths are guidance, not Google limits |
| P3 | Entity connections could be clearer | Organization was embedded without a shared identifier | Weaker consistency between the homepage and product page graph | Added the existing organization identifier, publisher and mainEntity references, breadcrumb/FAQ identifiers, software language, feature list and screenshots |
| P3 | Social image metadata was incomplete | Missing Twitter image alt and image dimensions | Less complete social preview metadata, not a direct ranking factor | Added alt, dimensions and alternate OG locale |
| P2 | No documented first-hand customer evidence | Product context has no verified outcomes for an event case study | Limits trust and reasons for independent sources to cite or recommend the product | Request permission, event identity, real screenshots and verified observations; do not invent metrics |

## Preserved technical foundations

- Canonical, HTML hreflang and sitemap agree on the localized MyClienti URLs.
- Main copy and FAQs remain available without JavaScript.
- robots.txt allows search and AI retrieval crawlers, including OAI-SearchBot and PerplexityBot.
- Search crawlers and training crawlers have different purposes. Allowing training crawlers is not a prerequisite for search citation. No policy change was made.
- MyClienti remains included in every MySagra plan; no standalone free offer, invented price, ratings or review schema were added.
- The public demo remains separate from the request for management-panel credentials.
- The homepage link text “Scopri di più” / “Learn more” was preserved as requested. Its surrounding MyClienti context and the descriptive footer link provide context.

## GEO approach and limitations

The page now explains what MyClienti is in its first paragraph and answers practical questions with independently understandable statements. Real screenshots and the public demo support the product description. Structured data reflects visible content rather than making additional claims.

These changes improve clarity and extraction; they do not guarantee AI citations or recommendations. Google does not require an AI-specific file or special markup for AI Overviews. FAQPage markup on a SaaS page does not imply eligibility for Google's restricted FAQ rich results. SoftwareApplication markup without verified offers or reviews should not be presented as guaranteed rich-result eligibility.

No llms.txt, synthetic statistics, fake expert attribution, artificial freshness dates, or keyword-stuffed sections were added. A machine-readable overview is optional and lower priority than a working public page, useful documentation and independently verifiable evidence.

## Validation

- Astro check: zero errors and zero warnings; one existing Analytics.astro inline-script hint.
- Production build: passed.
- Browser tests: IT/EN at 320, 390, 740 and 1440 CSS pixels; one H1, no horizontal overflow, matching visible/schema FAQ content, ten questions, valid JSON parsing and consistent hreflang sets.
- Browser tests without JavaScript: product definition and all FAQs present in both locales.
- Responsive screenshots: the browser selected the 540px derivative at device pixel ratio 2; preview switching updates both src and srcset.
- Desktop/mobile screenshot inspection completed; original visual identity preserved.
- No Search Console, backlink-tool, live SERP, AI-platform citation, Rich Results Test, Lighthouse or field Core Web Vitals measurements were available. No conclusions about rankings, traffic or real-user LCP/INP/CLS are claimed.

## Proposed keyword map

These are intent hypotheses, not measured search-volume data:

- Primary IT: “menu online per sagre”.
- Secondary IT: “menu QR code sagra”, “app clienti sagra”, “ordini dal telefono sagra”.
- Branded: “MyClienti”, “MyClienti MySagra”.
- EN: “online festival menu”, “QR code menu for festivals”, “festival customer app”.
- Keep broad “gestionale per sagre” / “software gestione sagra” primarily on the homepage to distinguish product-page intent.

## Recommended next steps

1. Deploy and verify both production URLs, robots, canonicals, sitemap inclusion and redirect behavior for noncanonical URL variants.
2. Submit or refresh the sitemap in Search Console and inspect both URLs; review Bing Webmaster Tools if available.
3. After deployment, run mobile PageSpeed Insights and inspect field Core Web Vitals when enough traffic exists.
4. Publish one authorized case study with event context, actual usage, constraints, screenshots and verified outcomes.
5. Consider a short organizer guide about setting up and sharing a QR menu, with real configuration screenshots and links to MyClienti and the plans.
6. Monitor a small fixed set of search/AI queries monthly. For AI results record platform, query, date, cited URL and sample size; repeat queries rather than treating a single response as visibility proof.

## Open questions

- Is the primary goal selling the full MySagra platform, or attracting organizers specifically looking for an online/QR menu?
- Is there an authorized event or pro loco using MyClienti that can support a case study? What outcomes can be verified?
- Does ordering require registration? Are pre-orders and ordering modes available in every installation, or configurable by the organizer?
- Is Search Console available, including queries, impressions and indexing reports?
- Which competitors are actually encountered by buyers, and is English-language acquisition a current commercial priority?
