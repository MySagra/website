import type { Lang } from '../i18n/ui';

// Single source for published starting prices: pricing cards, FAQ copy, JSON-LD and llms.txt all read from here.
export const prices = {
  cloud: { weekly: 69, monthly: 207 },
  onsite: { weekly: 179, monthly: 537 },
} as const;

export function formatPrice(amount: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'it' ? 'it-IT' : 'en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
}
