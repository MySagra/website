---
version: 1
slug: "src-pages-contact-astro"
primary_target: "src/pages/contact.astro"
related_targets: ["src/pages/en/contact.astro","src/components/ContactPage.astro","src/components/ContactForm.astro","src/components/ContactModal.astro","src/scripts/contact-form.ts"]
---
# Contact flow
Mode: Operate. Existing-site extension, fixed visual world. Owner approved a short dialog for demo/pricing CTAs and a dedicated contact page linked in the footer, sharing one form. Audience: organizers who need a demo, quote or answer. No claim of superior conversion without an experiment. Actual published periods currently weekly/monthly; do not invent annual pricing.

## Direction contract
THESIS: Ask only what the organizer knows; use page/plan context rather than making the visitor compose an email subject or select a technical service.
OWN-WORLD: incumbent Inter / Work Sans, white and warm neutrals, ink controls, yellow primary action, 12px fields and 20px frames. Reuse native dialog and semantic radio groups.
STORY: choose demo, quote or question; enter name, email, optional phone and message; see success or a recoverable error. Quote period is optional and only asked when not already captured. Generated subjects and structured context are validated server-side.
FIRST VIEWPORT: on contact page, heading and direct email beside the shared form; on mobile a single reading column. In dialog, concise title, intent buttons and labeled fields, scrollable within the viewport. No subject field or service-type select.
FORM: user-approved scoped form/paged-contact extension, code-led; no visual-world roll. Signature behavior is automatic plan/period capture with a visible, clearable context summary. seed: none (user-pinned form flow).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Behavior constraints
No personal data in analytics. Track starts and successful/failed submissions with intent, plan, period and source only. Success stays visible, no timed modal dismissal. Validation/network failures preserve the message. Both form locations excluded from session replay via rr-block. Email remains available without JavaScript. No real emails may be sent by automated verification.
