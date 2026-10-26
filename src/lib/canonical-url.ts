const PAGE_PATHS = new Set([
	"",
	"/en",
	"/myclienti",
	"/en/myclienti",
	"/contact",
	"/en/contact",
	"/festival-management-excel",
	"/en/festival-management-excel",
	"/self-hosting",
	"/en/self-hosting",
	"/privacy-policy",
	"/en/privacy-policy",
	"/cookie-policy",
	"/en/cookie-policy",
]);

const LEGACY_PAGE_PATHS: Record<string, string> = {
	"/gestione-sagra-excel": "/festival-management-excel",
	"/en/gestione-sagra-excel": "/en/festival-management-excel",
};

export function getCanonicalRedirect(url: URL): string | null {
	const target = new URL(url);
	const pagePath = url.pathname.replace(/\/+$/, "");

	const canonicalPath = LEGACY_PAGE_PATHS[pagePath] ?? pagePath;
	if (PAGE_PATHS.has(canonicalPath)) {
		target.pathname = `${canonicalPath}/`;
	}
	if (url.hostname === "www.mysagra.com") {
		target.protocol = "https:";
		target.host = "mysagra.com";
	}

	return target.href === url.href ? null : target.href;
}
