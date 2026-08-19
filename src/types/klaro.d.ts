declare module "klaro" {
	interface KlaroService {
		name: string;
		title: string;
		purposes: string[];
		required?: boolean;
	}

	interface KlaroConfig {
		version?: number;
		storageMethod?: string;
		cookieName?: string;
		cookieExpiresAfterDays?: number;
		privacyPolicy?: string;
		mustConsent?: boolean;
		acceptAll?: boolean;
		hideDeclineAll?: boolean;
		lang?: string;
		translations?: Record<string, unknown>;
		services: KlaroService[];
	}

	export function setup(config: KlaroConfig): void;
	export function show(config?: KlaroConfig): void;
	export function hide(): void;
}
