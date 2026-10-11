# Self-hosting SEO implementation and focused audit

## Scope and limitations

Routes: `/self-hosting/` and `/en/self-hosting/`. This is an implementation and local technical/on-page audit, not a production indexing, search-demand or Core Web Vitals audit. No Search Console, keyword-volume or ranking data was available. The homepage's commercial metadata was not changed.

## Keyword mapping

| Locale | Primary intent | Supporting topics |
| --- | --- | --- |
| Italian | Free festival management software: `gestionale sagra gratis` | Free self-hosting, festival checkout and kitchen orders, Docker installation, available source code, PolyForm Shield, paid assistance |
| English | Free self-hosted festival POS software | Community food events, checkout and kitchen orders, Docker deployment, source available licensing, paid support |

Open source searches are answered through the existing licensing explanation and FAQ. MySagra is not described as open source: PolyForm Shield restricts competing products and services. No search-volume or ranking claim is made for these terms.

The homepage owns the managed-service buying intent; the self-hosting page owns free/technical intent. Distinct titles, opening content and internal links support this separation. Actual query overlap should be checked in Search Console after publication.

## Metadata

### Italian

- Title: `Gestionale sagra gratis e self-hosted | MySagra` (47 characters).
- Description: `Gestionale sagra gratis in self-hosting: casse, menu e comande. Scopri il wizard Docker beta, la licenza PolyForm Shield e i servizi a pagamento con assistenza.` (160 characters).
- H1: `Il gestionale sagra gratis da installare in autonomia.`

### English

- Title: `Free Self-Hosted Festival POS Software | MySagra` (48 characters).
- Description: `Free self-hosted festival POS software for menus, checkout and kitchen orders. Try the beta Docker wizard, PolyForm Shield license and paid support services.` (157 characters).
- H1: `Free festival POS software. Self-hosted by your team.`

Character counts are editorial checks, not guarantees: Google may rewrite titles and snippets or truncate them based on rendered width and search context.

## Findings and resolutions

| Finding | Impact | Evidence | Resolution |
| --- | --- | --- | --- |
| Original hero phrasing did not state the Italian primary free-software intent directly | Medium | Localized content file | Updated H1 and first paragraph; preserved license and infrastructure responsibilities |
| English positioning was broad festival management rather than food-event POS | Medium | Original title and H1 | Focused on free self-hosted festival POS, with menus, checkout and kitchen orders in the description and opening |
| Social images had no localized alternate text or size metadata on this route | Low | Page head | Added localized OG/Twitter alt text and actual WebP dimensions, verified as 2400 × 1601 |
| Structured graph did not connect source code, license and publisher | Low | Existing WebPage/BreadcrumbList/FAQPage graph | Added Organization, SoftwareSourceCode and ImageObject; connected publisher, main entity and primary image |

## Technical checks

- Both routes return HTTP 200 locally with a single H1 and the correct HTML language.
- Each locale self-canonicalizes; neither canonicals to the other language or the homepage.
- Both pages declare the same reciprocal `it`, `en` and Italian `x-default` alternates.
- Both sitemap entries and their alternates match the page head.
- The existing canonical redirect includes both slashless routes and preserves query parameters.
- `robots.txt` allows crawling and references the sitemap. Page robots allow indexing/following and large image previews. This does not prove Google has indexed the deployed page.
- The explicit locale routes are not selected through browser-language negotiation.
- Navigation, footer and homepage closing links make the route discoverable; external repository links are not substitutes for internal links.
- OG and Twitter titles/descriptions use the same localized editorial source as the search metadata.

## Structured data

The rendered browser DOM contains JSON-LD for Organization, WebPage, SoftwareSourceCode, ImageObject, BreadcrumbList and FAQPage. The source-code entity points to the actual repository and `LICENSE.md`; no fabricated rating, review, software offer or zero-price managed-service claim is added.

The nine FAQ entries are generated from the same data as the visible answers. JSON parsing, graph references and text parity were tested. This is not a Google Rich Results Test result. FAQ rich results are generally restricted to eligible authoritative government and health sites; no FAQ snippet or software rich result is promised.

The subsequent GEO pass adds visible official sources and a fixed update date, mirrored by WebPage citation, author and dateModified. Alternate Markdown representations share the HTML content and commands, declare canonical links to HTML and use noindex headers; the HTML sitemap and search intent remain unchanged. See `docs/self-hosting-geo.md` for the agent-readability audit and measurement limits.

## Verification and publication checklist

- `pnpm exec astro check`: zero errors; one pre-existing script-processing hint in Analytics.
- `pnpm build`: passed.
- `TEST_BASE_URL=http://localhost:4321 node --experimental-strip-types --test tests/*.test.mjs`: all 18 tests passed, including the later GEO and Markdown checks.
- Rendered DOM metadata, schema, canonical and hreflang checked in both languages at desktop and mobile sizes.
- Updated hero screenshots inspected at 1440 and 390 pixels; no horizontal overflow.

After deployment:
1. Inspect both canonical URLs in Search Console and request indexing if appropriate.
2. Submit or re-check `https://mysagra.com/sitemap.xml`.
3. Verify deployed response headers, canonical redirects and robots; preview environments may differ.
4. Run the deployed URLs through PageSpeed Insights and Google Rich Results Test. Do not infer field Core Web Vitals from local rendering.
5. Track impressions, clicks, query overlap and quote-request conversions by route and locale before changing the keyword strategy.
