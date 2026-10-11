# Basic analytics and optional session replay

## Behavior

The owner requested that rejecting replay consent disable only session recording, while keeping basic Umami statistics active.

| Replay choice | Basic tracker | Session recorder |
| --- | --- | --- |
| No choice yet | Loaded | Blocked |
| Rejected, including a saved rejection | Loaded | Blocked |
| Accepted, including a saved acceptance | Loaded | Loaded |
| Consent withdrawn after acceptance | Reloaded and active | Stopped by page reload, then blocked |

`src/components/Analytics.astro` loads the basic tracker as a normal deferred script, with no Klaro service binding. Only the recorder is inert `text/plain` markup registered as `umami-replays`. Recorder sampling, input masking, maximum duration and contact-form exclusion remain unchanged.

`src/components/KlaroConsent.astro` registers one optional, default-disabled service named “Umami Session Replay”, under the localized session-replay purpose. The existing `klaro-consent-v2` storage key is retained: prior choices already included replay consent, and existing refusals continue blocking the recorder. Basic tracking is deliberately no longer controlled by that choice.

Removing an already running recorder script does not stop its listeners. Withdrawing consent saves the refusal and reloads the page, stopping the recorder but loading basic analytics again. Unsaved form content can be lost during this reload, as disclosed in the cookie policy. Revocation does not delete previously collected data.

## Disclosure

The Italian and English banner, privacy policy and cookie policy explain that basic statistics remain active after rejection and that consent applies only to replay. The policy update dates reflect the change. This documentation and technical implementation are not a legal determination that the deployed analytics configuration is exempt from consent. The controller must verify the lawful basis, actual Umami/server configuration and applicable privacy/ePrivacy requirements; cookieless operation alone does not establish an exemption or anonymity.

## Privacy preferences panel

The banner's detail link is labeled “Privacy preferences” in each locale. The panel uses a short localized title/introduction and a separate replay description rather than repeating the banner text. `groupByPurpose: false` exposes the single optional service directly, with one checkbox. The redundant modal-only accept-all button is visually and accessibly hidden; the visible actions are Reject and Save preferences. The banner's Accept action still enables replay directly, and the modal save action respects the checkbox, including when it is off.

Styles target Klaro's actual `.cm-modal.cm-klaro` element and use enough specificity to override its defaults. The panel matches the site's white/ink/yellow system, with readable link/attribution colors, visible keyboard focus, equal-sized buttons and vertically stacked mobile actions. The heading reserves room for the close control. No analytics behavior or existing consent storage is changed by this visual refinement.

## Verification

- Astro check and production build pass.
- All 24 HTTP/structural tests pass, including separate tracker/recorder script attributes, replay-only Klaro scope, operational safeguards and matching bilingual policy text.
- Browser checks in both languages cover fresh rejection, acceptance and reload, withdrawal and reload, previously saved rejection and previously saved acceptance. Basic tracking loads in each state; recorder loads only with an accepted choice and is absent after withdrawal.
- Browser checks intercept the external scripts with controlled responses, so no test visit or replay is sent to the production analytics service. They verify consent gating and script lifecycle, not actual backend ingestion, recording quality, production sampling or legal compliance.
