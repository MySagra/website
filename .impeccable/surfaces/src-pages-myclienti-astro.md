---
version: 1
slug: "src-pages-myclienti-astro"
primary_target: "src/pages/myclienti.astro"
related_targets: ["src/pages/en/myclienti.astro"]
---

# MyClienti landing

Mode: Persuade. Targets: /myclienti/ and /en/myclienti/. Audience: festival organizers and pro loco decision-makers. Public menu needs no registration. Public demo: https://clientidemo.mysagra.com/. Admin credentials must be requested; customization happens in MySagra admin, not the public demo. Preserve existing visual identity and homepage content.

## Direction contract

THESIS: From an organizer's idea to their online menu: personal ownership through concrete configuration, not a generic app promise.

OWN-WORLD: Inherit DESIGN.md: Inter headings, Work Sans text, white and warm-white surfaces, ink text, MySagra yellow buttons, rounded real screenshots and lifted shadows. Daylight-friendly marketing page for nontechnical organizers.

STORY: Understand the public menu, try it, see which content is editable, understand shared MySagra data, request admin credentials to build one's own version.

FIRST VIEWPORT: Left-aligned headline and copy about an online festival menu and an app made one's own; yellow public-demo action and secondary admin access action. Real portrait app screenshot on the right, clearly captioned as demo content. Three linked journey steps below. Signature interaction: section navigation plus a two-screenshot event/sponsor preview with accessible buttons, visible without JS. Motion: short transform transition on screenshot selection, suppressed for reduced motion.

FORM: Guided journey, ranked structure 6, chosen by user. Seed a86b407a. Code-led. Other structures: menu-first (1), customization-first (2), synchronization-first (3), use-case sequence (4), FAQ-led (5), guided journey (6), two audience paths (7).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Completion

Implemented both locales with shared MyClientiPage and translated content. Final fix-list verdict: ship; both listed fixes resolved after the second IT/EN desktop/mobile capture round. Review/documentation substituted in-thread because the harness has no subagent capability. Existing DESIGN.md and design sidecar preserved as an established-world extension; pre-existing sidecar drift remains out of scope. Existing screenshot provenance recorded in adjacent JSON sidecars, scan passes. Astro check and production build pass; interaction/no-JS checks pass. Local verification files are in .impeccable/review/myclienti/ (gitignored). Homepage ecosystem and footer link to the new localized page; sitemap includes both locales. Public demo is separate from admin access request. Email delivery not exercised.
