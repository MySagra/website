import type { APIRoute } from 'astro';
import { formatPrice, prices } from '../lib/pricing';

export const prerender = true;

const cloudWeek = formatPrice(prices.cloud.weekly, 'en');
const cloudMonth = formatPrice(prices.cloud.monthly, 'en');
const onsiteWeek = formatPrice(prices.onsite.weekly, 'en');
const onsiteMonth = formatPrice(prices.onsite.monthly, 'en');

const body = `# MySagra

> Official festival food-service software: menus, checkout, kitchen orders and optional customer self-ordering. MySagra is source available under PolyForm Shield 1.0.0, not open source. Self-hosting for an organization's own festival is free under the license; managed services and professional support are paid.

This index links to official pages and documentation. It is not a replacement for the license, a deployment guarantee or a binding price list. The self-hosting pages distinguish software cost from hardware, infrastructure, maintenance and support.

MyWizard is a tested but still beta, temporary Docker deployment container. It generates Docker Compose configuration and can start the MySagra stack. Self-hosting requires technical skills, backups, networking and device testing before an event. Mounting the Docker socket grants access to the Docker host.

## Product and paid services

- [MySagra in Italian](https://mysagra.com/): Festival management, managed cloud, on-site installation and custom services according to the agreed quote.
- [MySagra in English](https://mysagra.com/en/): Festival POS and food ordering, managed cloud and custom development.
- [Managed-service options in Italian](https://mysagra.com/#solutions): Indicative starting prices: managed cloud from ${cloudWeek} per week (${cloudMonth} per month), on-site installation from ${onsiteWeek} per week (${onsiteMonth} per month), Enterprise by custom quote. Final cost is set in the quote. Not part of free self-hosting.
- [Managed-service options in English](https://mysagra.com/en/#solutions): Managed cloud from ${cloudWeek} per week (${cloudMonth} per month) and Enterprise by custom quote. Final cost is set in the quote.
- Every paid plan includes all MySagra ecosystem apps: MyCassa (checkout), MyStampa (station ticket printing), MyNumeri (public ready-order display) and MyClienti (customer menu and self-ordering, payment at the counter).
- [Contact in Italian](https://mysagra.com/contact/): Demo, quote and question requests.
- [Contact in English](https://mysagra.com/en/contact/): Demo, quote and question requests.

## Free self-hosting

- [Self-hosting in Italian](https://mysagra.com/self-hosting/): Free software, Docker requirements, beta MyWizard commands, license limits and paid-service comparison.
- [Self-hosting in English](https://mysagra.com/en/self-hosting/): Free self-hosted festival POS, operational responsibilities and support options.
- [Italian self-hosting page as Markdown](https://mysagra.com/self-hosting.md): Generated from the same localized content and commands as the HTML page.
- [English self-hosting page as Markdown](https://mysagra.com/en/self-hosting.md): Generated from the same localized content and commands as the HTML page.

## Licensing and deployment sources

- [MySagra source repository](https://github.com/MySagra/mysagra): Public source code; availability does not imply an unrestricted open-source license.
- [MySagra license](https://github.com/MySagra/mysagra/blob/main/LICENSE.md): PolyForm Shield 1.0.0 terms, including restrictions on competing products and services.
- [PolyForm Shield](https://polyformproject.org/licenses/shield/1.0.0): Official license text from PolyForm Project.
- [MyWizard repository](https://github.com/MySagra/mywizard): Deployment tooling.
- [MyWizard installation guide](https://github.com/MySagra/mywizard/blob/main/installer/README.md): Authoritative configuration, command and certificate details.

## Festival reporting

- [Festival management with Excel, in Italian](https://mysagra.com/festival-management-excel/): When a spreadsheet is enough, what MySagra adds during service, and .xlsx report export.
- [Festival management with Excel, in English](https://mysagra.com/en/festival-management-excel/): Order, dish and till statistics exported to Excel.

## Customer menus and ordering

- [MyClienti in Italian](https://mysagra.com/myclienti/): Customer-facing digital menus and self-ordering, with payment at the counter.
- [MyClienti in English](https://mysagra.com/en/myclienti/): Customer menus and food ordering, not in-app payment.
`;

export const GET: APIRoute = () => new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
