import { defineMiddleware } from "astro:middleware";
import { getCanonicalRedirect } from "./lib/canonical-url";

const COOKIE = "mysagra_lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const onRequest = defineMiddleware((context, next) => {
	const { request, url, cookies } = context;
	if (request.method === "GET" || request.method === "HEAD") {
		const canonicalRedirect = getCanonicalRedirect(url);
		if (canonicalRedirect) return context.redirect(canonicalRedirect, 308);
	}
	const pathLang = url.pathname === "/en" || url.pathname.startsWith("/en/") ? "en" : "it";

	// First-time visitor on the Italian root: honor their browser language
	// once, then remember the outcome so it never fights a later manual
	// switch (via the header's IT/EN links) back to the other locale.
	if (url.pathname === "/" && !cookies.has(COOKIE)) {
		const acceptLanguage = request.headers.get("accept-language") ?? "";
		const primary = acceptLanguage.split(",")[0]?.trim().split("-")[0]?.toLowerCase();

		if (primary && primary !== "it") {
			cookies.set(COOKIE, "en", { path: "/", maxAge: ONE_YEAR });
			return context.redirect("/en/", 302);
		}
	}

	cookies.set(COOKIE, pathLang, { path: "/", maxAge: ONE_YEAR });
	return next();
});
