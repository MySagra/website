// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(),
	devToolbar: { enabled: false },
	// Emit every client script as a file instead of inlining small ones, so the
	// Content-Security-Policy in vercel.json can allow scripts from 'self' only.
	vite: { build: { assetsInlineLimit: 0 } },
	redirects: {
		'/gestione-sagra-excel': { status: 301, destination: '/festival-management-excel/' },
		'/en/gestione-sagra-excel': { status: 301, destination: '/en/festival-management-excel/' },
	},
	i18n: {
		defaultLocale: 'it',
		locales: ['it', 'en'],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false,
		},
	},
});
