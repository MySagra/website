export const defaultLang = "it" as const;
const languages = {
	it: "Italiano",
	en: "English",
} as const;

export type Lang = keyof typeof languages;

export function isLang(value: string): value is Lang {
	return value in languages;
}
