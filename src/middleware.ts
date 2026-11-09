import { defineMiddleware } from "astro:middleware";
import { getCanonicalRedirect } from "./lib/canonical-url";

const COOKIE = "mysagra_lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const onRequest = defineMiddleware(async (context, next) => {
	const { request, url, cookies } = context;
	if (request.method === "GET" || request.method === "HEAD") {
		const canonicalRedirect = getCanonicalRedirect(url);
		if (canonicalRedirect) return context.redirect(canonicalRedirect, 308);
	}
	// First-time visitor on the Italian root: honor their browser language
	// once. The cookie is written only when we redirect, so ordinary page
	// responses stay cookie-free and cacheable. Its presence alone stops any
	// later redirect, so a manual visit to "/" afterwards is never bounced.
	if (url.pathname === "/") {
		if (!cookies.has(COOKIE)) {
			const acceptLanguage = request.headers.get("accept-language") ?? "";
			const primary = acceptLanguage.split(",")[0]?.trim().split("-")[0]?.toLowerCase();

			if (primary && primary !== "it") {
				cookies.set(COOKIE, "en", { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
				const redirect = context.redirect("/en/", 302);
				redirect.headers.set("Vary", "Accept-Language, Cookie");
				return redirect;
			}
		}
		const response = await next();
		response.headers.append("Vary", "Accept-Language, Cookie");
		return response;
	}

	return next();
});
