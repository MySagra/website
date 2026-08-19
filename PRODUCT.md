# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: pro loco presidents and event organizers deciding whether to run their sagra (Italian village food/folk festival) on MySagra. Non-technical decision-makers, not sysadmins or developers. Secondary (not the site's primary visitor, but the product's eventual operators): volunteer staff running the counter, kitchen, and bar during the event, usually untrained.

## Product Purpose

MySagra is a complete management platform for Italian sagre and community food events. It replaces paper order pads, cash boxes, and shouted kitchen tickets with one connected system: orders taken at counter or table, tickets printed automatically at the right station, a public display calling ready numbers, live sales data, and an optional customer-facing app for browsing the menu and self-ordering from a phone — payment always happens at the counter, never through the app. Success means an event that runs without chaos, even in the hands of volunteers with no training.

## Positioning

Not a generic POS: a purpose-built ecosystem for the specific reality of sagre — volunteer staff, unreliable outdoor Wi-Fi, one week of setup, and multi-night events where nothing is allowed to break. LAN-first architecture keeps the event running even if the internet drops. A neighboring generic point-of-sale product could not truthfully claim this operating-condition fit.

## Operating Context

Ecosystem components, all connecting to the MySagra core:

| Service | Role |
|---|---|
| **MySagra (core)** | Backend/admin: events, menus, categories, variants, per-ingredient surcharges, stations, roles/permissions, stock, real-time dashboard, reporting. |
| **MyCassa** | Touch-first cashier terminal, offline-tolerant, cash-drawer integration, card payments. |
| **MyStampa** (+ **MyStampa Companion**) | Thermal receipt/kitchen-ticket printing, auto-split by station (kitchen, grill, bar, pizza). Companion is the desktop app bridging local ESC/POS printers. |
| **MyNumeri** | Public order-number display monitor. |
| **MyClienti** | Customer-facing app, skinned per sagra (colors, events, sponsors): menu browsing, self-order, pre-order. Payment always happens at the counter — never through the app. Included in every plan. |

Event conditions the product is built around: volunteer, largely untrained staff; unreliable outdoor Wi-Fi; roughly one week of setup time; multi-night events with zero tolerance for downtime.

## Capabilities and Constraints

Three purchase models:

1. **SaaS Managed Cloud (flagship)** — hosted, secured, monitored, updated, backed up; priced per event or per season; support during event nights.
2. **On-site turnkey installation** — full stack deployed on-premise, local network/printers/terminals/displays configured, volunteers trained, LAN-first so the event survives an internet outage.
3. **Self-hosted core (open source)** — free, Docker-deployable, for a pro loco with a technical volunteer. This is the entry door and trust signal, not the primary offer.

Add-ons across all three: custom development, priority event-day support, menu setup/data entry, staff training, hardware supply.

Site ships in Italian (primary) and English.

## Brand Commitments

Product name: **MySagra**. Primary brand color is fixed and binding: MySagra Yellow `#FECC01` (already the declared site theme color) — the user specified full palette/usage rules for this; broader visual-system decisions belong in DESIGN.md/new-work, not here.

Current live site: https://mysagra.com — to be replaced, not preserved. It currently leads with "Open Source · Free to self-host" messaging and a GitHub CTA as the primary call to action. Treat it as evidence/anti-reference for the redesign, not as incumbent positioning to carry forward.

Typography: headings/important text use **Inter** — an explicit client pin matching the incumbent site's heading font, confirmed twice. Binding across visual-world changes unless the user revokes it.

Visual register (superseding prior visual-world explorations — Bacheca and Il Menu del Giorno were both built and explicitly rejected in favor of this): **modern SaaS, category standard played straight**, per the user's own words ("voglio qualcosa di moderno da SaaS"). Canon craft bar, confirmed by the user: **Toast POS, Square, Lightspeed** — match their craft level (rounded product-screenshot cards with soft lifted shadows, generous rounded corners ~10-14px, zigzag text+screenshot feature sections, warm real photography, bold rounded buttons, logo trust bar under the hero). Execute at full fidelity, no irony or smuggled quirk. Brand yellow `#FECC01` stays the one accent per the 70/20/10 ratio above, applied more confidently than a restrained/editorial register would (buttons, icon fills, occasional tinted section) but never as a full-bleed background.

## Evidence on Hand

Pizza Village is the intended anchor case study, but concrete numbers (scale, volume, outcomes) are not yet confirmed — do not fabricate metrics until supplied.

## Product Principles

1. Sell the outcome (shorter queues, no lost orders, kitchen/bar in sync, real closing numbers), not the license — lead with commercial value, not "open source."
2. The commercial CTA ("See pricing" / "Talk to us") is primary and repeated; self-hosting/GitHub is a footer-level trust signal, never the hero action.
3. Speak to the buyer (pro loco president/organizer), not the developer — avoid Docker/TLS/repository language on marketing surfaces; that vocabulary belongs in docs, not the homepage.
4. Reliability under real event conditions (volunteer staff, bad Wi-Fi, LAN-first, one-week setup, zero-failure event nights) is the core differentiator and should anchor proof and positioning.
5. Open source is a trust/no-lock-in signal, not the offer — proof beats promises, using real events and real names once evidence is confirmed.

## Accessibility & Inclusion

No product-specific requirement established beyond bilingual IT/EN delivery.
