import assert from "node:assert/strict";
import test from "node:test";
import { getCanonicalRedirect } from "../src/lib/canonical-url.ts";

const pages = ["/en", "/myclienti", "/en/myclienti", "/privacy-policy", "/en/privacy-policy", "/cookie-policy", "/en/cookie-policy"];

for (const path of pages) {
	test(`normalizes ${path} and preserves query parameters`, () => {
		assert.equal(getCanonicalRedirect(new URL(`https://mysagra.com${path}?utm_source=test`)), `https://mysagra.com${path}/?utm_source=test`);
		assert.equal(getCanonicalRedirect(new URL(`https://mysagra.com${path}/`)), null);
	});
}

test("normalizes the public host and page path in one redirect", () => {
	assert.equal(getCanonicalRedirect(new URL("http://www.mysagra.com/en/myclienti?utm_source=test")), "https://mysagra.com/en/myclienti/?utm_source=test");
});

test("keeps the canonical homepage unchanged", () => {
	assert.equal(getCanonicalRedirect(new URL("https://mysagra.com/")), null);
});

test("does not change API, static asset or unknown paths", () => {
	for (const path of ["/api/contact", "/api/contact/", "/robots.txt", "/sitemap.xml", "/images/myclienti-app-1.webp", "/missing-page"]) {
		assert.equal(getCanonicalRedirect(new URL(`https://mysagra.com${path}`)), null);
	}
});

test("preserves local and preview hosts", () => {
	assert.equal(getCanonicalRedirect(new URL("http://localhost:4321/myclienti")), "http://localhost:4321/myclienti/");
	assert.equal(getCanonicalRedirect(new URL("https://preview.vercel.app/en/myclienti/")), null);
});

test("normalizes repeated trailing slashes on known pages", () => {
	assert.equal(getCanonicalRedirect(new URL("https://mysagra.com/myclienti//")), "https://mysagra.com/myclienti/");
});
