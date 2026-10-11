---
version: 1
slug: "src-pages-self-hosting-astro"
primary_target: "src/pages/self-hosting.astro"
related_targets: ["src/pages/en/self-hosting.astro"]
---

# Self-hosting acquisition page

## Scope and direction

- Routes: `/self-hosting/` and `/en/self-hosting/`.
- Mode: Persuade, with an honest technical entry point for organizers looking for free or open source festival management software.
- Primary job: understand free self-hosting, inspect the deployment command, and choose between operating the system independently and buying professional services.
- User-approved structure: K3s-inspired command-first opening, beta status, requirements, wizard behavior, licensing, self-hosting versus professional services, FAQ and commercial close.
- Preserve the existing visual system. The opening pairs explanatory copy and a real command panel; terminal selection and copy feedback are the signature interaction. No decorative animation or fabricated terminal output.
- The wizard includes a secondary GitHub star action for the main MySagra repository. Copy success appears once in the button and is announced through a visually hidden live region; clipboard failures remain visibly actionable without duplicating success text or changing terminal height.
- Desktop comparison cards stretch to the same height, with their actions aligned at the bottom. The paid-service advantages use yellow SVG plus markers; shared quote-scope wording sits below both cards. Data storage and backups are described without inventing a retention period.
- The homepage retains commercial metadata and positioning, with secondary internal links to this page. This page owns free/self-hosted intent; open source queries are addressed through a clear distinction, not a false license claim.

## Product and license truth

The owner confirmed that self-hosting for one's own festival is free. MySagra is source available under PolyForm Shield 1.0.0, not open source. The license restricts competing products and services. The page links the full terms and does not replace them with its summary.

MyWizard is tested by the team but still beta. The page does not claim installation success, production readiness or deployment benchmarks. A full event workflow test remains necessary.

Sources:
- https://github.com/MySagra/mywizard
- https://github.com/MySagra/mywizard/blob/main/installer/README.md
- https://github.com/MySagra/mysagra?tab=License-1-ov-file

## Operational constraints

Commands match the documented Bash and PowerShell quick starts. They write to `~/mysagra`, mount the output directory and Docker socket, and run `ghcr.io/mysagra/mywizard:latest`. The socket grants access to the Docker host; the page warns before execution. Without JavaScript both commands remain visible and selectable. The UI never executes a deployment.

Hardware, networking, certificates, credentials, backups, recovery and maintenance are not included in free self-hosting. Professional support and custom development require an agreed paid scope. The English offer follows the existing managed-cloud positioning; on-site installation is promoted only in Italian.

## SEO and validation

Italian title, H1 and opening target `gestionale sagra gratis`; English targets free self-hosted festival POS software for community food events. See `docs/self-hosting-seo-audit.md` for the exact metadata, keyword mapping and publication checks. Each locale has its own canonical URL, reciprocal hreflang and sitemap entry. Visible FAQ content matches FAQPage JSON-LD; no review stars or zero-price managed-service offers are fabricated. Structured data does not guarantee a rich result. Header, footer and homepage closing links prevent an orphan route.

Automated checks cover canonical normalization and page metadata, content, licensing links and schema. Browser checks cover desktop/mobile overflow, command selection and copying, clipboard failure, contact actions and no-JavaScript content. Deployment itself is not executed as part of website validation.

Search performance must be evaluated after publication in Search Console; keyword volumes and ranking gains are not assumed.

## AI search and alternate representations

Nine self-contained FAQ answers and a concise free-versus-managed comparison preserve license, cost and operational limitations. The official-source block uses a quiet hairline divider, linked references and a fixed editorial update date; it does not add another card or displace the commercial close. WebPage author, citation and dateModified match the visible project attribution and sources.

`/self-hosting.md` and `/en/self-hosting.md` are generated from the same localized content and shared commands as HTML. They are advertised as alternate representations and point back to the canonical HTML page, with noindex headers to avoid separate search entries. `public/llms.txt` indexes official pages and sources without replacing normal crawling/indexing requirements. See `docs/self-hosting-geo.md` for verification, maintenance and post-publication measurement.
