const PAGE_PATHS = new Set([
	"",
	"/en",
	"/myclienti",
	"/en/myclienti",
	"/privacy-policy",
	"/en/privacy-policy",
	"/cookie-policy",
	"/en/cookie-policy",
]);

export function getCanonicalRedirect(url: URL): string | null {
	const target = new URL(url);
	const pagePath = url.pathname.replace(/\/+$/, "");

	if (PAGE_PATHS.has(pagePath)) {
		target.pathname = `${pagePath}/`;
	}
	if (url.hostname === "www.mysagra.com") {
		target.protocol = "https:";
		target.host = "mysagra.com";
	}

	return target.href === url.href ? null : target.href;
}
