import type { Lang } from "./ui";

export interface SiteContent {
	meta: { title: string; description: string; keywords: string };
	header: {
		nav: { vantaggi: string; soluzioni: string; ecosistema: string; docs: string };
		cta: string;
		sectionsAria: string;
		menuOpenAria: string;
	};
	hero: {
		h1Line1: string;
		h1Line2: string;
		dek: string;
		ctaPrimary: string;
		ctaSecondary: string;
		heroImgAlt: string;
		logosLabel: string;
	};
	vantaggi: { h2: string };
	outcomes: { title: string; desc: string; icon: string }[];
	soluzioni: {
		h2: string;
		lede: string;
		demoNotePrefix: string;
		demoNoteCta: string;
		tiers: {
			icon: string;
			name: string;
			tag?: string;
			featured?: boolean;
			desc: string;
			points: string[];
			warning?: string;
			cta: string;
		}[];
	};
	ecosistema: {
		h2: string;
		lede: string;
		items: { name: string; role: string; icon: string; photo?: string; photos?: string[]; desc: string }[];
		screenshotOf: string;
		customNotePrefix: string;
		customNoteLink: string;
		personalize: { alt: string; badges: { icon: string; label: string }[] };
	};
	closing: {
		h2: string;
		p: string;
		cta: string;
		noteOpenSource: string;
		noteGithub: string;
		noteAnd: string;
		noteDocs: string;
	};
	story: {
		h2: string;
		p: string;
		photoLabel: string;
	};
	faq: {
		h2: string;
		lede: string;
		items: { q: string; a: string }[];
	};
	privacyPolicy: {
		metaTitle: string;
		metaDescription: string;
		h1: string;
		lastUpdated: string;
		backLabel: string;
		controllerH2: string;
		controllerBody: string;
		contactLabel: string;
		dataH2: string;
		dataBody: string;
		purposesH2: string;
		purposes: string[];
		thirdPartyH2: string;
		services: { name: string; desc: string }[];
		rightsH2: string;
		rightsIntro: string;
		rightsList: string[];
		rightsOutroPrefix: string;
		rightsOutroSuffix: string;
		cookieNoteH2: string;
		cookieNotePrefix: string;
		cookieNoteLinkLabel: string;
	};
	cookiePolicy: {
		metaTitle: string;
		metaDescription: string;
		h1: string;
		lastUpdated: string;
		backLabel: string;
		intro: string;
		tableH2: string;
		tableHeaders: { name: string; provider: string; purpose: string; type: string; duration: string };
		rows: { name: string; provider: string; purpose: string; type: string; duration: string; essential: boolean }[];
		badgeEssential: string;
		badgeFunctional: string;
		consentH2: string;
		consentBody: string;
		contactH2: string;
		contactPrefix: string;
		privacyNotePrefix: string;
		privacyNoteLinkLabel: string;
	};
	cookieBanner: {
		description: string;
		learnMore: string;
		acceptAll: string;
		privacyPolicyName: string;
	};
	footer: {
		tagline: string;
		ghStar: string;
		prodotto: { title: string; vantaggi: string; soluzioni: string; ecosistema: string };
		risorse: { title: string; docs: string; support: string };
		copyright: string;
	};
	contactModal: {
		title: string;
		closeAria: string;
		fieldName: string;
		fieldEmail: string;
		fieldPhone: string;
		fieldRequestType: string;
		fieldSubject: string;
		fieldMessage: string;
		placeholderName: string;
		placeholderEmail: string;
		placeholderPhone: string;
		placeholderSubject: string;
		placeholderMessage: string;
		requestTypePlaceholder: string;
		requestTypeOptions: {
			informazioni: string;
			cloud: string;
			onsite: string;
			custom: string;
			demo: string;
		};
		phonePrefixAria: string;
		submit: string;
		submitting: string;
		success: string;
		errorFallback: string;
	};
	notFound: {
		metaTitle: string;
		metaDescription: string;
		markAria: string;
		h1: string;
		body: string;
		ctaPrimary: string;
	};
}

const it: SiteContent = {
	meta: {
		title: "MySagra | Gestionale per Sagre e Feste di Paese",
		description:
			"MySagra è il gestionale per sagre e feste di paese: cassa, cucina, stampa comande e tabellone numeri, facile per i volontari, anche senza internet.",
		keywords:
			"gestionale sagre, software sagre, software feste di paese, gestionale pro loco, cassa sagra offline",
	},
	header: {
		nav: { vantaggi: "Vantaggi", soluzioni: "Soluzioni", ecosistema: "Ecosistema", docs: "Open Source" },
		cta: "Contattaci",
		sectionsAria: "Sezioni",
		menuOpenAria: "Apri il menu",
	},
	hero: {
		h1Line1: "Il gestionale smart e moderno",
		h1Line2: "per sagre e feste.",
		dek: "Il software smart e moderno per gestire sagre e feste di paese, personalizzabile per tutte le tue esigenze. Ordini in tempo reale, stampa comande e cassa integrata.",
		ctaPrimary: "Contattaci",
		ctaSecondary: "Vedi le soluzioni",
		heroImgAlt: "Volontari al banco usano MyCassa su schermo mentre i clienti ordinano durante una sagra",
		logosLabel: "Usato da sagre e feste in Italia",
	},
	vantaggi: { h2: "Come cambia il tuo evento con MySagra" },
	outcomes: [
		{
			title: "Niente più ordini persi",
			desc: "Ogni comanda arriva stampata alla stazione giusta, in automatico.",
			icon: "receipt",
		},
		{
			title: "Più casse, un solo evento",
			desc: "Ogni terminale è sempre allineato: cassa, stampa e dashboard vedono in tempo reale gli stessi ordini, anche con più postazioni attive insieme.",
			icon: "wifi",
		},
		{
			title: "I numeri veri, a fine serata",
			desc: "Dashboard in tempo reale: niente più conti a mano dopo la chiusura. Dati esportabili in Excel.",
			icon: "chart",
		},
		{
			title: "Il banco non va in tilt",
			desc: "MyCassa e MyStampa reggono anche nelle serate più affollate dell'anno.",
			icon: "shield",
		},
		{
			title: "Ordini salvati, sempre recuperabili",
			desc: "Recuperate o cancellate ogni ordine quando serve, con statistiche precise a fine serata.",
			icon: "history",
		},
		{
			title: "Va d'accordo con l'hardware che avete",
			desc: "Compatibile con qualsiasi dispositivo e con le stampanti POS a protocollo standard ESC/POS.",
			icon: "plug",
		},
	],
	soluzioni: {
		h2: "Tre soluzioni per portare MySagra alla vostra sagra",
		lede: "Nessuna cifra inventata qui: il prezzo si discute insieme, per evento o per stagione.",
		demoNotePrefix: "Vuoi capire meglio come funziona?",
		demoNoteCta: "Contattaci per richiedere una demo →",
		tiers: [
			{
				icon: "cloud",
				name: "Cloud gestito",
				tag: "Consigliato",
				featured: true,
				desc: "Un'istanza MySagra pronta all'uso: hosting, sicurezza, aggiornamenti e backup a nostro carico. Supporto anche durante le serate.",
				points: ["Nessun server da gestire", "Assistenza durante l'evento", "Scala dai piccoli ai grandi numeri"],
				warning:
					"Richiede una connessione Internet stabile. Non forniamo i dispositivi: terminali, stampanti e tablet restano a vostro carico.",
				cta: "Richiedi un preventivo",
			},
			{
				icon: "onsite",
				name: "Installazione in loco",
				desc: "Tutto lo stack sull'hardware del vostro evento: rete locale, stampanti, terminali e display configurati da noi. Siamo di Bergamo: se la vostra sagra è in zona, siamo ancora più vicini.",
				points: ["Rete LAN-first, resiste se internet cade", "Formazione dei volontari", "Presenza all'apertura, su richiesta", "Assistenza prioritaria"],
				cta: "Richiedi un preventivo",
			},
			{
				icon: "custom",
				name: "Build su misura",
				desc: "Esigenze particolari? Adattiamo MySagra alla vostra sagra: funzionalità dedicate, integrazioni, flussi fuori standard.",
				points: ["Sviluppo su misura", "Integrazioni dedicate", "Pensato con voi, non solo per voi"],
				cta: "Raccontaci le tue esigenze",
			},
		],
	},
	ecosistema: {
		h2: "Un ecosistema componibile",
		lede: "Cinque strumenti indipendenti, collegati allo stesso cervello. Attivate solo quelli che vi servono, aggiungete gli altri quando volete.",
		items: [
			{
				name: "MySagra",
				role: "core",
				icon: "core",
				desc: "Il cervello: eventi, menu, categorie, varianti, stazioni, ruoli, dashboard in tempo reale. Custodisce ogni ordine e le statistiche della sagra.",
			},
			{
				name: "MyCassa",
				role: "cassa",
				icon: "cassa",
				photo: "/images/mycassa-terminal.webp",
				desc: "Terminale che si adatta a qualsiasi dispositivo: dal PC al telefono, touch o no. Gestisce pagamenti con carta e in contanti, comunicando anche con il cassetto.",
			},
			{
				name: "MyClienti",
				role: "cliente",
				icon: "clienti",
				photos: ["/images/myclienti-app-1.webp", "/images/myclienti-app-2.webp"],
				desc: "Menu e autordine dal telefono del cliente, personalizzato con le vostre immagini, eventi e sponsor: si ordina senza fare la fila, mentre il pagamento resta comunque in cassa. Inclusa in ogni soluzione.",
			},
			{
				name: "MyStampa",
				role: "stampa",
				icon: "stampa",
				photo: "/images/mystampa-receipt.webp",
				desc: "Comande e scontrini termici divisi in automatico per stazione: cucina, griglia, bar, pizzeria. Stampa anche i resoconti di fine serata, con statistiche e quantità vendute.",
			},
			/* temporarily disabled
			{
				name: "MyNumeri",
				role: "display",
				icon: "numeri",
				desc: "Il tabellone numeri per sagre: chiama l'ordine pronto sullo schermo, niente più ressa al banco.",
			},
			*/
		],
		screenshotOf: "Screenshot di",
		customNotePrefix: "Esigenze particolari?",
		customNoteLink: "Guardate la soluzione Build su misura →",
		personalize: {
			alt: "Anteprima dell'app MyClienti, personalizzabile con i vostri colori, eventi, sponsor e menu",
			badges: [
				{ icon: "image", label: "Le tue immagini" },
				{ icon: "calendar", label: "I tuoi eventi" },
				{ icon: "layout", label: "Menu su misura" },
				{ icon: "star", label: "I tuoi sponsor" },
			],
		},
	},
	closing: {
		h2: "Raccontateci la vostra sagra.",
		p: "Rispondiamo entro un giorno lavorativo. Nessun impegno.",
		cta: "Contattaci",
		noteOpenSource: "MySagra è un progetto open source: il codice dell'intero ecosistema è pubblico",
		noteGithub: "su GitHub ↗",
		noteAnd: "Trovate tutto anche nella",
		noteDocs: "documentazione ↗",
	},
	story: {
		h2: "Come nasce MySagra",
		p: "Tutto comincia con due studenti universitari, una sagra di paese e un quaderno di comande che non tornava mai a fine serata. MySagra nasce da lì: uno strumento pensato da chi ha passato le proprie estati dietro un banco, non da chi guarda le sagre da fuori.",
		photoLabel: "Foto del team",
	},
	faq: {
		h2: "Domande frequenti",
		lede: "Le domande che ci fanno più spesso presidenti di pro loco e organizzatori.",
		items: [
			{
				q: "Cos'è MySagra?",
				a: "MySagra è il gestionale per sagre e feste di paese: collega cassa, cucina, stampa comande e tabellone numeri in un unico sistema, pensato per volontari senza formazione tecnica.",
			},
			{
				q: "Qual è il miglior gestionale per sagre che funziona anche senza internet?",
				a: "MySagra è pensato apposta per questo: l'architettura LAN-first tiene cassa, stampa comande e tabellone numeri attivi sulla rete locale dell'evento anche se la connessione Internet salta. È la differenza principale rispetto a un gestionale da negozio adattato a una sagra.",
			},
			{
				q: "MySagra funziona anche se il Wi-Fi cade?",
				a: "Dipende dalla soluzione. Con l'installazione in loco sì: l'architettura è LAN-first, cassa e stampa continuano a funzionare sulla rete locale anche se la connessione Internet dell'evento va e viene. Con la soluzione cloud serve invece una connessione stabile: se cade, si perde solo l'ordine online dal telefono dei clienti, una funzione comoda ma non indispensabile per lavorare al banco.",
			},
			{
				q: "Cos'è MyNumeri, il tabellone numeri per le sagre?",
				a: "MyNumeri è il monitor pubblico che chiama i numeri degli ordini pronti, sincronizzato in tempo reale con cassa e cucina: i clienti aspettano senza affollare il banco.",
			},
			{
				q: "Quanto costa MySagra?",
				a: "Il prezzo si concorda insieme, per evento o per stagione, in base alla soluzione scelta: cloud gestito, installazione in loco o build su misura. Nessuna cifra fissa pubblicata: contattateci per un preventivo.",
			},
			{
				q: "Serve un tecnico per usare MySagra durante l'evento?",
				a: "No. Il sistema è pensato per volontari senza esperienza informatica. Per l'installazione in loco offriamo anche formazione dello staff prima dell'apertura.",
			},
			{
				q: "Quanto tempo serve per installare MySagra prima della sagra?",
				a: "Il nostro team monta tutto in una singola serata: rete locale, switch, router, stampanti e postazioni pronte per l'apertura.",
			},
			{
				q: "MySagra è difficile da imparare e configurare per i volontari?",
				a: "No, è pensato per essere il contrario: il software è semplice e intuitivo, e i volontari imparano a usarlo nella stessa serata dell'installazione. Configurare menu, app clienti, postazioni di ritiro e stampanti richiede solo pochi minuti, senza bisogno di un tecnico.",
			},
			{
				q: "Cosa fornisce MySagra per l'installazione in loco?",
				a: "MySagra usa un modello di gestione diverso dal solito: esiste un server, e noi forniamo e configuriamo stampanti, cablaggio, creazione della rete locale, switch e router, oltre alla carta per le stampanti. Cablaggio e carta sono prezzati in base a quanto ne serve per l'evento.",
			},
			{
				q: "MySagra fornisce anche monitor, tablet e telefoni?",
				a: "No, e non a caso: essendo MySagra una pagina web, funziona su qualsiasi dispositivo con un browser, anche datato — lo abbiamo usato pure su PC con Windows 7. Oggi quasi tutti hanno già un telefono o un tablet, quindi prestarli sarebbe inutile: è anche per questo che il prezzo di MySagra è tendenzialmente più basso della concorrenza.",
			},
		],
	},
	privacyPolicy: {
		metaTitle: "Privacy Policy | MySagra",
		metaDescription: "Informativa sulla privacy di MySagra. Scopri come trattiamo i tuoi dati.",
		h1: "Privacy Policy",
		lastUpdated: "Ultimo aggiornamento: agosto 2026",
		backLabel: "Torna al sito",
		controllerH2: "Titolare del trattamento",
		controllerBody:
			"Il titolare del trattamento dei dati personali è Nicolò Spampatti, sviluppatore e creatore di MySagra.",
		contactLabel: "Contatto: ",
		dataH2: "Dati raccolti",
		dataBody:
			"MySagra raccoglie dati di navigazione anonimi tramite Umami Analytics e, solo se ci scrivete tramite il modulo di contatto, i dati che inserite volontariamente (nome, email, telefono se fornito, oggetto e messaggio). Non effettuiamo profilazione né tracciamento pubblicitario di terze parti.",
		purposesH2: "Finalità del trattamento",
		purposes: [
			"Monitoraggio anonimo delle performance e dell'utilizzo del sito (Umami Analytics)",
			"Gestione delle richieste inviate tramite il modulo di contatto (Resend)",
			"Protezione da traffico malevolo e sicurezza della rete (Cloudflare, se attivo sul dominio)",
		],
		thirdPartyH2: "Servizi di terze parti",
		services: [
			{
				name: "Umami Analytics",
				desc: "Soluzione di analytics anonima e cookieless. Non imposta cookie, non raccoglie dati personali identificabili e non effettua tracking cross-site.",
			},
			{
				name: "Resend",
				desc: "Servizio di invio email usato per recapitare le richieste inviate dal modulo di contatto e la relativa conferma. Elabora solo i dati che inserite volontariamente nel modulo.",
			},
			{
				name: "Cloudflare",
				desc: "Servizio CDN e protezione DDoS eventualmente attivo a livello di dominio. Se presente, imposta cookie tecnici essenziali per la sicurezza della connessione.",
			},
		],
		rightsH2: "Diritti degli utenti",
		rightsIntro: "Per i dati forniti tramite il modulo di contatto, potete in qualsiasi momento richiedere:",
		rightsList: [
			"Accesso ai dati che ci avete fornito",
			"Rettifica di dati inesatti o incompleti",
			"Cancellazione dei dati, salvo obblighi di legge",
			"Limitazione o opposizione al trattamento",
		],
		rightsOutroPrefix: "Per esercitare questi diritti, scriveteci a ",
		rightsOutroSuffix:
			". Avete inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali.",
		cookieNoteH2: "Cookie",
		cookieNotePrefix: "Per l'elenco dettagliato dei cookie, consulta la nostra ",
		cookieNoteLinkLabel: "Cookie Policy",
	},
	cookiePolicy: {
		metaTitle: "Cookie Policy | MySagra",
		metaDescription: "Cookie Policy di MySagra. Dettaglio dei cookie utilizzati sul sito.",
		h1: "Cookie Policy",
		lastUpdated: "Ultimo aggiornamento: agosto 2026",
		backLabel: "Torna al sito",
		intro:
			"Questo sito usa solo cookie tecnici essenziali. Non impostiamo cookie di profilazione o di tracciamento pubblicitario. Umami Analytics è cookieless: non imposta alcun cookie.",
		tableH2: "Cookie utilizzati",
		tableHeaders: { name: "Nome", provider: "Provider", purpose: "Scopo", type: "Tipo", duration: "Durata" },
		rows: [
			{
				name: "klaro-consent",
				provider: "MySagra",
				purpose: "Ricorda le preferenze sul banner cookie",
				type: "Funzionale",
				duration: "1 anno",
				essential: false,
			},
		],
		badgeEssential: "Essenziale",
		badgeFunctional: "Funzionale",
		consentH2: "Gestione del consenso",
		consentBody:
			"Puoi gestire le preferenze cookie tramite il banner mostrato alla prima visita. Poiché il sito non imposta cookie di tracciamento che richiedano consenso esplicito ai sensi del GDPR, il banner ha valore informativo. Umami Analytics è cookieless e raccoglie solo dati aggregati anonimi.",
		contactH2: "Contatti",
		contactPrefix: "Per qualsiasi domanda: ",
		privacyNotePrefix: "Per maggiori dettagli sul trattamento dei dati, consulta la nostra ",
		privacyNoteLinkLabel: "Privacy Policy",
	},
	cookieBanner: {
		description:
			"Usiamo solo Umami, un analytics anonimo e senza cookie, per capire come viene usato il sito. Nessun tracciamento, nessuna profilazione.",
		learnMore: "Scopri di più",
		acceptAll: "Ho capito",
		privacyPolicyName: "privacy policy",
	},
	footer: {
		tagline: "Il gestionale smart e moderno per sagre e feste.",
		ghStar: "Stella su GitHub",
		prodotto: { title: "Prodotto", vantaggi: "Vantaggi", soluzioni: "Soluzioni", ecosistema: "Ecosistema" },
		risorse: { title: "Risorse", docs: "Documentazione", support: "support@mysagra.com" },
		copyright: "MySagra.",
	},
	contactModal: {
		title: "Contattaci!",
		closeAria: "Chiudi",
		fieldName: "Il tuo nome *",
		fieldEmail: "La tua email *",
		fieldPhone: "Telefono (opzionale)",
		fieldRequestType: "Tipo di richiesta *",
		fieldSubject: "Oggetto *",
		fieldMessage: "Spiegaci come vorreste adattare MySagra alla vostra sagra *",
		placeholderName: "Gabriele Bianco",
		placeholderEmail: "m@esempio.com",
		placeholderPhone: "333 123 4567",
		placeholderSubject: "Oggetto della richiesta",
		placeholderMessage: "Raccontaci il vostro evento: numero di volontari, portate, hardware che avete già, tempistiche…",
		requestTypePlaceholder: "Seleziona una richiesta",
		requestTypeOptions: {
			informazioni: "Informazioni",
			cloud: "Soluzione cloud",
			onsite: "Installazione in loco",
			custom: "Build su misura",
			demo: "Richiesta demo",
		},
		phonePrefixAria: "Prefisso",
		submit: "Invia email",
		submitting: "Invio in corso…",
		success: "Richiesta inviata! Controlla la tua email per la conferma.",
		errorFallback: "Invio non riuscito. Riprova.",
	},
	notFound: {
		metaTitle: "Pagina non trovata | MySagra",
		metaDescription: "La pagina che cerchi non esiste o è stata spostata.",
		markAria: "Errore 404",
		h1: "Questa pagina non c'è, come le comande perse senza MySagra",
		body: "Il link potrebbe essere sbagliato o la pagina è stata spostata. Torna alla home o scrivici se pensi sia un errore.",
		ctaPrimary: "Torna alla home",
	},
};

const en: SiteContent = {
	meta: {
		title: "MySagra | Festival Management Software for Village Fairs",
		description:
			"MySagra is festival management software for village fairs: checkout, kitchen, ticket printing and queue display, easy for volunteers, even offline.",
		keywords:
			"festival management software, village fair POS, queue management software, offline POS system",
	},
	header: {
		nav: { vantaggi: "Benefits", soluzioni: "Plans", ecosistema: "Ecosystem", docs: "Open Source" },
		cta: "Contact us",
		sectionsAria: "Sections",
		menuOpenAria: "Open menu",
	},
	hero: {
		h1Line1: "The smart, modern platform",
		h1Line2: "for festivals and fairs.",
		dek: "The smart, modern software for running village festivals and fairs, customizable to your needs. Real-time orders, ticket printing and integrated checkout.",
		ctaPrimary: "Contact us",
		ctaSecondary: "See the plans",
		heroImgAlt: "Volunteers at the counter using MyCassa on screen while customers order during a festival",
		logosLabel: "Used by festivals and fairs across Italy",
	},
	vantaggi: { h2: "How MySagra changes your event" },
	outcomes: [
		{
			title: "No more lost orders",
			desc: "Every ticket prints automatically at the right station.",
			icon: "receipt",
		},
		{
			title: "Multiple registers, one event",
			desc: "Every terminal stays in sync: checkout, printing and dashboard see the same orders in real time, even with several stations running at once.",
			icon: "wifi",
		},
		{
			title: "Real numbers, at closing time",
			desc: "Real-time dashboard: no more counting by hand after close. Data exportable to Excel.",
			icon: "chart",
		},
		{
			title: "The counter never chokes",
			desc: "MyCassa and MyStampa hold up even on the busiest nights of the year.",
			icon: "shield",
		},
		{
			title: "Saved orders, always recoverable",
			desc: "Recover or cancel any order whenever you need, with precise stats at the end of the night.",
			icon: "history",
		},
		{
			title: "Works with the hardware you already have",
			desc: "Compatible with any device and with standard ESC/POS thermal printers.",
			icon: "plug",
		},
	],
	soluzioni: {
		h2: "Three ways to bring MySagra to your festival",
		lede: "No made-up numbers here: pricing is discussed together, per event or per season.",
		demoNotePrefix: "Want to see how it actually works?",
		demoNoteCta: "Contact us to request a demo →",
		tiers: [
			{
				icon: "cloud",
				name: "Managed cloud",
				tag: "Recommended",
				featured: true,
				desc: "A ready-to-use MySagra instance: hosting, security, updates and backups on us. Support during your events too.",
				points: ["No server to manage", "Support during the event", "Scales from small to large crowds"],
				warning:
					"Requires a stable internet connection. We don't provide the devices: terminals, printers and tablets remain on your side.",
				cta: "Request a quote",
			},
			{
				icon: "onsite",
				name: "On-site installation",
				desc: "The full stack on your event's own hardware: local network, printers, terminals and displays set up by us. We're based in Bergamo, Italy: even closer if your festival is nearby.",
				points: ["LAN-first network, survives if internet drops", "Volunteer training", "On-site at opening, on request", "Priority support"],
				cta: "Request a quote",
			},
			{
				icon: "custom",
				name: "Custom build",
				desc: "Special needs? We adapt MySagra to your festival: dedicated features, integrations, non-standard flows.",
				points: ["Custom development", "Dedicated integrations", "Built with you, not just for you"],
				cta: "Tell us what you need",
			},
		],
	},
	ecosistema: {
		h2: "A composable ecosystem",
		lede: "Five independent tools, wired to the same brain. Turn on only what you need, add the rest whenever you want.",
		items: [
			{
				name: "MySagra",
				role: "core",
				icon: "core",
				desc: "The brain: events, menus, categories, variants, stations, roles, real-time dashboard. Keeps every order and the festival's stats.",
			},
			{
				name: "MyCassa",
				role: "cassa",
				icon: "cassa",
				photo: "/images/mycassa-terminal.webp",
				desc: "Terminal that fits any device: from a PC to a phone, touch or not. Handles card and cash payments, and talks to the cash drawer too.",
			},
			{
				name: "MyClienti",
				role: "cliente",
				icon: "clienti",
				photos: ["/images/myclienti-app-1.webp", "/images/myclienti-app-2.webp"],
				desc: "Menu and self-ordering from the customer's phone, skinned with your own images, events and sponsors: customers order without queueing, while payment still happens at the counter. Included in every plan.",
			},
			{
				name: "MyStampa",
				role: "stampa",
				icon: "stampa",
				photo: "/images/mystampa-receipt.webp",
				desc: "Order tickets and thermal receipts split automatically by station: kitchen, grill, bar, pizzeria. Also prints end-of-night reports, with sales stats and quantities.",
			},
			/* temporarily disabled
			{
				name: "MyNumeri",
				role: "display",
				icon: "numeri",
				desc: "The queue-number display for festivals: calls each ready order on screen, no more crowding at the counter.",
			},
			*/
		],
		screenshotOf: "Screenshot of",
		customNotePrefix: "Special needs?",
		customNoteLink: "Check out the Custom build plan →",
		personalize: {
			alt: "Preview of the MyClienti app, customizable with your colors, events, sponsors and menu",
			badges: [
				{ icon: "image", label: "Your images" },
				{ icon: "calendar", label: "Your events" },
				{ icon: "layout", label: "Custom menu" },
				{ icon: "star", label: "Your sponsors" },
			],
		},
	},
	closing: {
		h2: "Tell us about your festival.",
		p: "We reply within one business day. No commitment.",
		cta: "Contact us",
		noteOpenSource: "MySagra is an open source project: the code for the entire ecosystem is public",
		noteGithub: "on GitHub ↗",
		noteAnd: "You'll also find everything in the",
		noteDocs: "documentation ↗",
	},
	story: {
		h2: "How MySagra started",
		p: "It all starts with two university students, a village festival and an order notebook that never balanced by the end of the night. MySagra was born from that: a tool built by people who spent their summers behind a counter, not by people watching festivals from the outside.",
		photoLabel: "Team photo",
	},
	faq: {
		h2: "Frequently asked questions",
		lede: "The questions pro loco presidents and organizers ask us most.",
		items: [
			{
				q: "What is MySagra?",
				a: "MySagra is festival management software for village festivals and fairs: it connects checkout, kitchen, ticket printing and a queue-number display in one system, built for volunteers with no technical training.",
			},
			{
				q: "What's the best festival management software that works without internet?",
				a: "MySagra is built for exactly this: a LAN-first architecture keeps checkout, ticket printing and the queue display running on the event's local network even if the internet connection drops. That's the core difference versus shop POS software adapted for a festival.",
			},
			{
				q: "Does MySagra still work if the Wi-Fi drops?",
				a: "Depends on the plan. With on-site installation, yes: the architecture is LAN-first, so checkout and printing keep working on the local network even when the event's internet connection is unreliable. With the managed cloud plan you need a stable connection instead: if it drops, you only lose customer self-ordering from their phones — handy, but not essential for running the counter.",
			},
			{
				q: "What is MyNumeri, the queue-number display for festivals?",
				a: "MyNumeri is the public screen that calls out ready order numbers, synced in real time with checkout and kitchen: customers wait without crowding the counter.",
			},
			{
				q: "How much does MySagra cost?",
				a: "Pricing is agreed together, per event or per season, based on the plan you choose: managed cloud, on-site installation or custom build. There's no fixed published price — contact us for a quote.",
			},
			{
				q: "Do we need a technician to run MySagra during the event?",
				a: "No. The system is built for volunteers with no IT background. For on-site installations we also train staff before opening.",
			},
			{
				q: "How long does it take to install MySagra before the festival?",
				a: "Our team installs everything in a single evening: local network, switch, router, printers and stations ready for opening.",
			},
			{
				q: "Is MySagra hard for volunteers to learn and configure?",
				a: "No, quite the opposite by design: the software is simple and intuitive, and volunteers learn to use it the same evening it's installed. Setting up menus, the customer app, pickup stations and printers takes just a few minutes, no technician needed.",
			},
			{
				q: "What does MySagra provide for on-site installation?",
				a: "MySagra uses a different management model than usual: a server exists, and we provide and set up printers, cabling, local network creation, switch and router, plus paper for the printers. Cabling and paper are priced based on how much the event actually needs.",
			},
			{
				q: "Does MySagra also provide monitors, tablets and phones?",
				a: "No, deliberately: since MySagra is a web page, it runs on any device with a browser, even older ones — we've used it on Windows 7 PCs too. Almost everyone already owns a phone or tablet today, so lending them out would be pointless — which is also why MySagra tends to be priced lower than the competition.",
			},
		],
	},
	privacyPolicy: {
		metaTitle: "Privacy Policy | MySagra",
		metaDescription: "MySagra privacy policy. Learn how we handle your data.",
		h1: "Privacy Policy",
		lastUpdated: "Last updated: August 2026",
		backLabel: "Back to site",
		controllerH2: "Data Controller",
		controllerBody: "The data controller is Nicolò Spampatti, developer and creator of MySagra.",
		contactLabel: "Contact: ",
		dataH2: "Data Collected",
		dataBody:
			"MySagra collects anonymous navigation data via Umami Analytics and, only if you write to us through the contact form, the data you voluntarily enter (name, email, phone if provided, subject and message). We do not perform profiling or third-party advertising tracking.",
		purposesH2: "Purpose of Processing",
		purposes: [
			"Anonymous site performance and usage monitoring (Umami Analytics)",
			"Handling requests submitted via the contact form (Resend)",
			"Protection from malicious traffic and network security (Cloudflare, if active on the domain)",
		],
		thirdPartyH2: "Third-Party Services",
		services: [
			{
				name: "Umami Analytics",
				desc: "Anonymous, cookieless analytics solution. Sets no cookies, collects no personally identifiable data, and performs no cross-site tracking.",
			},
			{
				name: "Resend",
				desc: "Email delivery service used to send contact-form requests and their confirmation. Processes only the data you voluntarily enter in the form.",
			},
			{
				name: "Cloudflare",
				desc: "CDN and DDoS protection service, if active at the domain level. When present, it sets essential technical cookies for connection security.",
			},
		],
		rightsH2: "User Rights",
		rightsIntro: "For data provided via the contact form, you may request at any time:",
		rightsList: [
			"Access to the data you've provided us",
			"Rectification of inaccurate or incomplete data",
			"Erasure of your data, subject to legal obligations",
			"Restriction of, or objection to, processing",
		],
		rightsOutroPrefix: "To exercise these rights, write to us at ",
		rightsOutroSuffix: ". You also have the right to lodge a complaint with the data protection authority.",
		cookieNoteH2: "Cookies",
		cookieNotePrefix: "For a detailed list of cookies, see our ",
		cookieNoteLinkLabel: "Cookie Policy",
	},
	cookiePolicy: {
		metaTitle: "Cookie Policy | MySagra",
		metaDescription: "MySagra Cookie Policy. Details about the cookies used on this site.",
		h1: "Cookie Policy",
		lastUpdated: "Last updated: August 2026",
		backLabel: "Back to site",
		intro:
			"This site uses only essential technical cookies. We do not set profiling or advertising tracking cookies. Umami Analytics is cookieless: it sets no cookies.",
		tableH2: "Cookies Used",
		tableHeaders: { name: "Name", provider: "Provider", purpose: "Purpose", type: "Type", duration: "Duration" },
		rows: [
			{
				name: "klaro-consent",
				provider: "MySagra",
				purpose: "Remembers your cookie banner preferences",
				type: "Functional",
				duration: "1 year",
				essential: false,
			},
		],
		badgeEssential: "Essential",
		badgeFunctional: "Functional",
		consentH2: "Consent Management",
		consentBody:
			"You can manage cookie preferences via the banner shown on first visit. Since the site doesn't set tracking cookies that require explicit consent under GDPR, the banner is informational. Umami Analytics is cookieless and collects only anonymous aggregated data.",
		contactH2: "Contact",
		contactPrefix: "For any question: ",
		privacyNotePrefix: "For more detail on how we process data, see our ",
		privacyNoteLinkLabel: "Privacy Policy",
	},
	cookieBanner: {
		description:
			"We use only Umami, an anonymous, cookieless analytics tool, to understand how the site is used. No tracking, no profiling.",
		learnMore: "Learn more",
		acceptAll: "Got it",
		privacyPolicyName: "privacy policy",
	},
	footer: {
		tagline: "The smart, modern platform for festivals and fairs.",
		ghStar: "Star on GitHub",
		prodotto: { title: "Product", vantaggi: "Benefits", soluzioni: "Plans", ecosistema: "Ecosystem" },
		risorse: { title: "Resources", docs: "Docs", support: "support@mysagra.com" },
		copyright: "MySagra.",
	},
	contactModal: {
		title: "Contact us!",
		closeAria: "Close",
		fieldName: "Your name *",
		fieldEmail: "Your email *",
		fieldPhone: "Phone (optional)",
		fieldRequestType: "Request type *",
		fieldSubject: "Subject *",
		fieldMessage: "Tell us how you'd like to adapt MySagra to your festival *",
		placeholderName: "Jane Smith",
		placeholderEmail: "m@example.com",
		placeholderPhone: "333 123 4567",
		placeholderSubject: "Subject of your request",
		placeholderMessage: "Tell us about your event: number of volunteers, courses served, hardware you already have, timeline…",
		requestTypePlaceholder: "Select a request",
		requestTypeOptions: {
			informazioni: "Information",
			cloud: "Managed cloud",
			onsite: "On-site installation",
			custom: "Custom build",
			demo: "Demo request",
		},
		phonePrefixAria: "Prefix",
		submit: "Send email",
		submitting: "Sending…",
		success: "Request sent! Check your email for confirmation.",
		errorFallback: "Sending failed. Try again.",
	},
	notFound: {
		metaTitle: "Page Not Found | MySagra",
		metaDescription: "The page you're looking for doesn't exist or has moved.",
		markAria: "404 Error",
		h1: "This page went missing, like orders lost without MySagra",
		body: "The link might be wrong or the page has moved. Head back home or get in touch if you think this is a mistake.",
		ctaPrimary: "Back to home",
	},
};

export const content: Record<Lang, SiteContent> = { it, en };

export function getContent(lang: Lang): SiteContent {
	return content[lang];
}
