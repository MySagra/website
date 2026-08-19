import type { APIRoute } from "astro";
import { Resend } from "resend";
import { isLang, defaultLang } from "../../i18n/ui";

export const prerender = false;

const RECIPIENTS = {
	informazioni: "info@mysagra.com",
	supporto: "support@mysagra.com",
} as const;

type Topic = keyof typeof RECIPIENTS;

const REQUEST_TYPES = ["informazioni", "cloud", "onsite", "custom", "demo"] as const;
type RequestType = (typeof REQUEST_TYPES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SENDERS = ["Gabriele Bianco", "Nicolò Spampatti"] as const;

function isTopic(value: unknown): value is Topic {
	return value === "informazioni" || value === "supporto";
}

function isRequestType(value: unknown): value is RequestType {
	return (REQUEST_TYPES as readonly unknown[]).includes(value);
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

const COLORS = {
	yellow: "#FECC01",
	ink: "#111111",
	surface: "#FFFFFF",
	surfaceWarm: "#FAFAF7",
	neutral500: "#6B7280",
	neutral200: "#E5E7EB",
};

const RADIUS_LG = "20px";
const SHADOW_LIFTED = "0 24px 48px -16px rgba(17,17,17,.22), 0 8px 16px -8px rgba(17,17,17,.1)";
const FONT_DISPLAY = "Inter,system-ui,-apple-system,sans-serif";
const FONT_BODY = "Work Sans,system-ui,-apple-system,sans-serif";

const MESSAGES = {
	it: {
		invalidRequest: "Richiesta non valida.",
		missingFields: "Nome, email, oggetto e messaggio sono obbligatori.",
		invalidEmail: "Indirizzo email non valido.",
		serviceUnavailable: "Servizio email non configurato. Riprova più tardi.",
		sendFailed: "Invio non riuscito. Riprova più tardi.",
		confirmationSubject: "Abbiamo ricevuto la tua richiesta — MySagra",
		internalHeading: (name: string) => `Nuovo messaggio da ${name}`,
		fieldLabels: {
			name: "NOME",
			email: "EMAIL",
			phone: "TELEFONO",
			requestType: "TIPO DI RICHIESTA",
			subject: "OGGETTO",
			message: "MESSAGGIO",
		},
		requestTypeLabel: {
			informazioni: "Informazioni",
			cloud: "Soluzione cloud",
			onsite: "Installazione in loco",
			custom: "Build su misura",
			demo: "Richiesta demo",
		},
		pillLabel: { informazioni: "INFORMAZIONI", supporto: "SUPPORTO" },
		confirmationPill: { informazioni: "INFO", supporto: "SUPPORTO" },
		confirmationHeading: "Messaggio ricevuto",
		confirmationGreeting: (name: string) => `Ciao ${name},`,
		confirmationIntro: (sender: string) => `sono ${sender}, co-fondatore di MySagra.`,
		confirmationBody:
			"Abbiamo ricevuto il tuo messaggio e ti risponderemo a breve con tutte le informazioni che cerchi. Grazie per l'interessamento — è un piacere sapere che MySagra ti incuriosisce.",
		yourMessageLabel: "IL TUO MESSAGGIO",
		signOff: "A presto,",
		coFounderLabel: "Co-fondatore, MySagra",
		footerTagline: "MySagra Web",
		localeDate: "it-IT",
	},
	en: {
		invalidRequest: "Invalid request.",
		missingFields: "Name, email, subject and message are required.",
		invalidEmail: "Invalid email address.",
		serviceUnavailable: "Email service not configured. Try again later.",
		sendFailed: "Sending failed. Try again later.",
		confirmationSubject: "We received your request — MySagra",
		internalHeading: (name: string) => `New message from ${name}`,
		fieldLabels: {
			name: "NAME",
			email: "EMAIL",
			phone: "PHONE",
			requestType: "REQUEST TYPE",
			subject: "SUBJECT",
			message: "MESSAGE",
		},
		requestTypeLabel: {
			informazioni: "Information",
			cloud: "Managed cloud",
			onsite: "On-site installation",
			custom: "Custom build",
			demo: "Demo request",
		},
		pillLabel: { informazioni: "INFORMATION", supporto: "SUPPORT" },
		confirmationPill: { informazioni: "INFO", supporto: "SUPPORT" },
		confirmationHeading: "Message received",
		confirmationGreeting: (name: string) => `Hi ${name},`,
		confirmationIntro: (sender: string) => `I'm ${sender}, co-founder of MySagra.`,
		confirmationBody:
			"We've received your message and will get back to you shortly with all the information you're looking for. Thanks for reaching out — it's great to know MySagra caught your interest.",
		yourMessageLabel: "YOUR MESSAGE",
		signOff: "Talk soon,",
		coFounderLabel: "Co-founder, MySagra",
		footerTagline: "MySagra Web",
		localeDate: "en-US",
	},
} as const;

function highlightBrand(text: string): string {
	return text.replace(/MySagra/g, `<span style="background:${COLORS.yellow};padding:0 0.2em;border-radius:3px;">MySagra</span>`);
}

function renderHeader(pill: string): string {
	return `
		<tr>
			<td style="background:${COLORS.ink};padding:20px 28px;border-radius:${RADIUS_LG} ${RADIUS_LG} 0 0;">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
					<tr>
						<td style="vertical-align:middle;">
							<table role="presentation" cellpadding="0" cellspacing="0">
								<tr>
									<td style="width:28px;height:28px;vertical-align:middle;"><img src="https://mysagra.com/favicon.ico" width="28" height="28" alt="MySagra" style="display:block;border-radius:6px;" /></td>
									<td style="padding-left:10px;color:${COLORS.surface};font-family:${FONT_DISPLAY};font-weight:700;font-size:17px;letter-spacing:-0.02em;">MySagra</td>
								</tr>
							</table>
						</td>
						<td style="text-align:right;vertical-align:middle;">
							<span style="display:inline-block;background:${COLORS.yellow};color:${COLORS.ink};font-family:${FONT_DISPLAY};font-weight:600;font-size:11px;letter-spacing:0.05em;padding:6px 14px;border-radius:999px;">${pill}</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr><td style="background:${COLORS.ink};height:3px;background-image:linear-gradient(${COLORS.yellow},${COLORS.yellow});"></td></tr>`;
}

function renderInternalField(label: string, valueHtml: string, accent: boolean): string {
	return `
		<tr>
			<td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.12);${accent ? `border-left:3px solid ${COLORS.yellow};padding-left:14px;` : ""}">
				<div style="color:#9CA3AF;font-family:${FONT_DISPLAY};font-weight:600;font-size:11px;letter-spacing:0.05em;margin-bottom:4px;">${label}</div>
				<div style="color:${COLORS.surface};font-family:${FONT_BODY};font-size:1.0625rem;line-height:1.55;">${valueHtml}</div>
			</td>
		</tr>`;
}

function buildInternalEmailHtml(
	lang: "it" | "en",
	fields: { name: string; email: string; phone: string; requestType: RequestType; subject: string; message: string },
	pill: string,
): string {
	const t = MESSAGES[lang];
	const rows = [
		renderInternalField(t.fieldLabels.name, escapeHtml(fields.name), false),
		renderInternalField(t.fieldLabels.email, `<a href="mailto:${escapeHtml(fields.email)}" style="color:#93C5FD;text-decoration:none;">${escapeHtml(fields.email)}</a>`, false),
	];
	if (fields.phone) rows.push(renderInternalField(t.fieldLabels.phone, escapeHtml(fields.phone), false));
	rows.push(renderInternalField(t.fieldLabels.requestType, escapeHtml(t.requestTypeLabel[fields.requestType]), false));
	rows.push(renderInternalField(t.fieldLabels.subject, escapeHtml(fields.subject), false));
	rows.push(renderInternalField(t.fieldLabels.message, escapeHtml(fields.message).replace(/\n/g, "<br>"), true));

	return `<!doctype html>
<html>
<body style="margin:0;padding:32px 16px;background:${COLORS.surfaceWarm};font-family:${FONT_BODY};">
	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;box-shadow:${SHADOW_LIFTED};">
		${renderHeader(pill)}
		<tr>
			<td style="background:${COLORS.ink};padding:28px;border-radius:0 0 ${RADIUS_LG} ${RADIUS_LG};">
				<h1 style="margin:0 0 20px;color:${COLORS.surface};font-family:${FONT_DISPLAY};font-weight:700;font-size:22px;letter-spacing:-0.02em;">${escapeHtml(t.internalHeading(fields.name))}</h1>
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
					${rows.join("")}
				</table>
			</td>
		</tr>
	</table>
</body>
</html>`;
}

function buildConfirmationEmailHtml(
	lang: "it" | "en",
	fields: { name: string; message: string },
	pill: string,
	sender: string,
	dateStr: string,
): string {
	const t = MESSAGES[lang];
	return `<!doctype html>
<html>
<body style="margin:0;padding:32px 16px;background:${COLORS.surfaceWarm};font-family:${FONT_BODY};">
	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;box-shadow:${SHADOW_LIFTED};">
		${renderHeader(pill)}
		<tr>
			<td style="background:${COLORS.surface};padding:32px;border-radius:0 0 ${RADIUS_LG} ${RADIUS_LG};">
				<h1 style="margin:0 0 20px;color:${COLORS.ink};font-family:${FONT_DISPLAY};font-weight:700;font-size:24px;letter-spacing:-0.02em;">${t.confirmationHeading}</h1>
				<p style="margin:0 0 16px;color:${COLORS.ink};font-size:1.0625rem;line-height:1.55;">${t.confirmationGreeting(escapeHtml(fields.name))}</p>
				<p style="margin:0 0 16px;color:${COLORS.ink};font-size:1.0625rem;line-height:1.55;">${highlightBrand(escapeHtml(t.confirmationIntro(sender)))}</p>
				<p style="margin:0 0 20px;color:${COLORS.ink};font-size:1.0625rem;line-height:1.55;">${highlightBrand(t.confirmationBody)}</p>
				<div style="background:${COLORS.surfaceWarm};border-left:3px solid ${COLORS.yellow};border-radius:12px;padding:16px 18px;margin:0 0 24px;">
					<div style="color:${COLORS.neutral500};font-family:${FONT_DISPLAY};font-weight:600;font-size:11px;letter-spacing:0.05em;margin-bottom:6px;">${t.yourMessageLabel}</div>
					<div style="color:${COLORS.ink};font-size:1.0625rem;line-height:1.55;">${escapeHtml(fields.message).replace(/\n/g, "<br>")}</div>
				</div>
				<p style="margin:0 0 2px;color:${COLORS.ink};font-size:1.0625rem;">${t.signOff}</p>
				<p style="margin:0 0 2px;color:${COLORS.ink};font-family:${FONT_DISPLAY};font-weight:700;font-size:1.0625rem;letter-spacing:-0.02em;">${escapeHtml(sender)}</p>
				<p style="margin:0 0 24px;color:${COLORS.neutral500};font-size:13px;">${highlightBrand(t.coFounderLabel)}</p>
				<hr style="border:none;border-top:1px solid ${COLORS.neutral200};margin:0 0 16px;" />
				<p style="margin:0;text-align:center;color:${COLORS.neutral500};font-size:12px;">
					<a href="https://mysagra.com" style="color:${COLORS.neutral500};text-decoration:underline;">mysagra.com</a>
					&nbsp;·&nbsp;
					<a href="mailto:info@mysagra.com" style="color:${COLORS.neutral500};text-decoration:none;">info@${highlightBrand("mysagra")}.com</a>
				</p>
			</td>
		</tr>
	</table>
	<p style="max-width:560px;margin:16px auto 0;text-align:center;color:${COLORS.neutral500};font-size:11px;">${t.footerTagline} · ${dateStr}</p>
</body>
</html>`;
}

export const POST: APIRoute = async ({ request }) => {
	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return Response.json({ ok: false, error: MESSAGES[defaultLang].invalidRequest }, { status: 400 });
	}

	const langValue = String(body.lang ?? "");
	const lang = isLang(langValue) ? langValue : defaultLang;
	const t = MESSAGES[lang];

	const name = String(body.name ?? "").trim();
	const email = String(body.email ?? "").trim();
	const phone = String(body.phone ?? "").trim();
	const subject = String(body.subject ?? "").trim();
	const message = String(body.message ?? "").trim();
	const topic: Topic = isTopic(body.topic) ? body.topic : "informazioni";
	const requestType: RequestType = isRequestType(body.requestType) ? body.requestType : "informazioni";

	if (!name || !email || !subject || !message) {
		return Response.json({ ok: false, error: t.missingFields }, { status: 400 });
	}
	if (!EMAIL_RE.test(email)) {
		return Response.json({ ok: false, error: t.invalidEmail }, { status: 400 });
	}

	const apiKey = import.meta.env.RESEND_API_KEY;
	if (!apiKey) {
		console.error("RESEND_API_KEY is not configured");
		return Response.json({ ok: false, error: t.serviceUnavailable }, { status: 500 });
	}

	const resend = new Resend(apiKey);
	const to = RECIPIENTS[topic];
	const sender = SENDERS[Math.floor(Math.random() * SENDERS.length)];
	const dateStr = new Date().toLocaleDateString(t.localeDate, { day: "numeric", month: "long", year: "numeric" });

	try {
		const internal = await resend.emails.send({
			from: "MySagra <no-reply@mysagra.com>",
			to,
			replyTo: email,
			subject: `[${t.pillLabel[topic]}] ${subject}`,
			html: buildInternalEmailHtml(lang, { name, email, phone, requestType, subject, message }, t.pillLabel[topic]),
			text: [
				`Nuova richiesta (${t.pillLabel[topic]}) dal sito.`,
				"",
				`Nome: ${name}`,
				`Email: ${email}`,
				phone ? `Telefono: ${phone}` : null,
				`${t.fieldLabels.requestType}: ${t.requestTypeLabel[requestType]}`,
				`Oggetto: ${subject}`,
				"",
				message,
			]
				.filter((line) => line !== null)
				.join("\n"),
		});

		if (internal.error) {
			console.error("Resend internal send failed", internal.error);
			return Response.json({ ok: false, error: t.sendFailed }, { status: 502 });
		}

		const confirmation = await resend.emails.send({
			from: "MySagra <no-reply@mysagra.com>",
			to: email,
			subject: t.confirmationSubject,
			html: buildConfirmationEmailHtml(lang, { name, message }, t.confirmationPill[topic], sender, dateStr),
			text: [
				t.confirmationGreeting(name),
				"",
				t.confirmationIntro(sender),
				t.confirmationBody,
				"",
				`${t.yourMessageLabel}: ${message}`,
				"",
				t.signOff,
				sender,
				t.coFounderLabel,
			].join("\n"),
		});

		if (confirmation.error) {
			console.error("Resend confirmation send failed", confirmation.error);
		}

		return Response.json({ ok: true });
	} catch (error) {
		console.error("Contact form send failed", error);
		return Response.json({ ok: false, error: t.sendFailed }, { status: 502 });
	}
};
