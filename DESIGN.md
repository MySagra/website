---
name: MySagra
description: Gestisci la tua sagra senza il caos.
colors:
  yellow: "#FECC01"
  ink: "#111111"
  surface: "#FFFFFF"
  surface-warm: "#FAFAF7"
  neutral-500: "#6B7280"
  neutral-200: "#E5E7EB"
  success: "#16A34A"
  danger: "#DC2626"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Work Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    lineHeight: 1.55
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.8rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.8rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
---

# Design System: MySagra

## Overview

**Creative North Star: "The Category Standard, Played Straight"**

This is not a rolled distinctive direction — the client explicitly asked for "qualcosa di moderno da SaaS" and named the craft bar directly: Toast POS, Square, Lightspeed. The job here is executing that canon at full fidelity, no irony, no smuggled quirk: rounded product-screenshot cards with soft lifted shadows, generous corner radii, icon-badge feature grids, warm real photography, bold pill CTAs, a logo trust bar under the hero. Two other worlds were built and explicitly rejected earlier in this engagement — a cork-noticeboard "Bacheca" and an editorial "Il Menu del Giorno" — both are now anti-reference only.

Brand yellow stays the one accent (never a fill-block background), but this register spends it more confidently than a restrained/editorial world would: on every primary button, every icon badge, a soft radial glow behind the hero screenshot, the featured pricing card's border. Real MyCassa/MyStampa photography carries the "this is real software" proof instead of illustration or paper texture.

**Key Characteristics:**
- White/off-white ground, ink text and rules, yellow as the confident single accent (buttons, icon-badge tints, hero glow).
- Rounded system throughout: 8px small controls, 12px cards/inputs, 20px large frames (hero screenshot, pricing cards), full pill on every primary/secondary button.
- Icon-badge feature grids and a real product screenshot in the hero — both load-bearing Toast/Square conventions, earned by the named canon, not a lazy default.
- Soft lifted shadows simulate a product screenshot floating above the page; flat hairline borders everywhere else.
- One quiet motion grammar: cards rise into place on scroll via `transform` only (never `opacity`), so content is never actually hidden if the observer doesn't fire.

## Colors

Warm neutral ground with a single confident accent, per the binding 70/20/10 ratio in PRODUCT.md.

### Primary
- **MySagra Yellow** (`#FECC01`): every primary CTA, icon-badge background tint (16% opacity), the hero screenshot's glow, the featured pricing card's border. Always ink text on top; never a full-bleed background.

### Neutral
- **Ink** (`#111111`): all text, dark sections (closing CTA, ecosystem "core" card).
- **Surface** (`#FFFFFF`) / **Surface Warm** (`#FAFAF7`): cards vs. section backgrounds — muted sections (soluzioni, vantaggi, ecosistema) sit on warm, cards and the hero sit on pure white.
- **Neutral 500** (`#6B7280`) / **Neutral 200** (`#E5E7EB`): supporting text and hairline borders.

### Named Rules
**The One Accent Rule.** Yellow never covers a section background. It fills small, specific shapes only: buttons, icon badges, one card border, one glow.

## Typography

**Display Font:** Inter (client-pinned, matching the incumbent site's heading font — also the real modern-SaaS default, so the pin and the canon agree here)
**Body Font:** Work Sans

**Character:** Inter Bold carries every heading with tight tracking (-0.02em), reading as confident and current. Work Sans stays neutral underneath so paragraph copy never competes.

### Hierarchy
- **Display / H1** (700, `clamp(2.3rem, 5vw, 3.75rem)`, 1.08): hero headline only.
- **H2** (700, `clamp(1.8rem, 3.4vw, 2.5rem)`): section headings.
- **H3** (700, ~1.05–1.25rem): card/feature titles.
- **Body** (400, 1.0625rem, 1.55): paragraphs.
- **Label** (600, 0.62–0.78rem, uppercase, tracked): role badges, section labels — always beside or below content, never stacked directly above a heading.

### Named Rules
**The No-Kicker Rule.** Nothing sits directly above an `<h1>`–`<h3>` as an eyebrow line — caught and fixed twice in this build (the hero's URL mark, the ecosystem role labels). Category/role tags live in an inline pill beside the heading instead.

## Layout

Centered, generous-whitespace marketing layout, max content width 68rem. Hero copy is centered (classic SaaS pattern); the hero screenshot below it breaks slightly narrower (62rem) so it reads as an inset object, not full-bleed. Feature and ecosystem sections use responsive grids (3 → 2 → 1 columns) with a section head (heading + one-line lede) centered above.

## Elevation & Depth

Soft, layered shadows carrying real offset and blur — never a flat drop shadow, never zero-offset.

### Shadow Vocabulary
- **Soft** (`0 2px 8px rgba(17,17,17,.06)`): resting cards, buttons on hover.
- **Lifted** (`0 24px 48px -16px rgba(17,17,17,.22), 0 8px 16px -8px rgba(17,17,17,.1)`): the hero product screenshot, the featured pricing card, the contact dialog sheet.

### Named Rules
**The Floating Screenshot Rule.** Anything presented as "the product" (hero image, pricing card) gets the Lifted shadow so it reads as an object resting above the page, not printed on it.

## Shapes

Rounded system, four steps: `8px` (small controls: menu toggle, icon-badge corners on tight layouts), `12px` (cards, inputs, buttons where not pill), `20px` (large frames: hero screenshot, pricing cards, story photo placeholder), and full pill (`999px`) on every primary and secondary CTA button plus the featured-tier tag.

## Components

### Buttons
- **Shape:** pill (999px) for primary/secondary CTAs; 12px rounded rect for in-card actions (tier CTA, submit).
- **Primary:** yellow fill, ink text, lifts 1px + soft shadow on hover.
- **Secondary:** white fill, neutral border, border darkens to ink on hover.
- **In-card (dark):** ink fill, surface text; the featured pricing tier's CTA swaps to yellow fill.

### Cards
- **Corner style:** 20px (pricing, ecosystem), no card treatment below that radius in this world.
- **Background:** white on warm section grounds.
- **Shadow:** Soft at rest; Lifted only for the featured/hero cases.
- **Icon badge:** 2.5rem rounded-8px square, yellow-at-16%-opacity fill, ink icon — the signature small motif reused across feature cards, pricing cards, and ecosystem cards.

### Inputs / Fields (contact modal)
- **Style:** 12px radius, 1px neutral-200 border, white fill.
- **Focus:** 2px ink outline, 1px offset.
- **Tabs:** segmented control (rounded-8px gray track, white active pill with Soft shadow) — not pills-in-a-row, not underline.

### Navigation
- **Header:** sticky white bar, 1px bottom hairline, pill yellow CTA, nav links at 65% opacity full on hover.
- **Mobile:** hamburger toggle, slide-down panel with a fade+max-height transition; the header's CTA stays visible above the open panel so it never needs its own duplicate button.

### Ecosystem "core" card (signature component)
Ink-filled card with a yellow icon badge, spans the full grid width above the other four product cards — the platform's "everything connects here" moment. Product name and role tag sit inline (role as a translucent pill beside the name, not above it).

## Do's and Don'ts

### Do:
- **Do** keep the reveal-on-scroll motion to a `transform`-only animation — opacity must never be the gating property, so content stays present without JavaScript, in print, or for crawlers.
- **Do** use the icon-badge (rounded-8px, yellow-16%, ink icon) as the one recurring small motif across every card type.
- **Do** use real photography (`public/images/`) wherever the layout can carry it; label any future synthetic/demo imagery explicitly.
- **Do** keep pricing honest — "Prezzo su richiesta" until real figures exist (PRODUCT.md, Evidence on Hand).

### Don't:
- **Don't** place a category/role label directly above a heading — inline pill beside it instead.
- **Don't** let yellow cover a section background; it fills specific small shapes only.
- **Don't** invent usage statistics or customer counts for hero stat-blocks — a real Toast/Square convention this build deliberately omits because no real numbers exist yet.
- **Don't** go back to the Bacheca or Il Menu del Giorno visual language without a new explicit client direction; both are superseded, not archived-as-options.
