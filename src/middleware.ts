import { defineMiddleware } from "astro:middleware";

const COOKIE = "mysagra_lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const onRequest = defineMiddleware((context, next) => {
	const { request, url, cookies } = context;
	const pathLang = url.pathname.startsWith("/en") ? "en" : "it";

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
