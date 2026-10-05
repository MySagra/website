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
		noteSourceAvailable: string;
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
			onsite?: string;
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
			"MySagra è il gestionale per sagre e feste di paese: ordini, cassa e cucina collegati in un sistema pensato per i volontari. Richiedi una demo.",
		keywords:
			"gestionale sagre, software sagre, software feste di paese, gestionale pro loco, cassa sagra offline",
	},
	header: {
		nav: { vantaggi: "Vantaggi", soluzioni: "Soluzioni", ecosistema: "Ecosistema", docs: "Codice sorgente" },
		cta: "Contattaci",
		sectionsAria: "Sezioni",
		menuOpenAria: "Apri il menu",
	},
	hero: {
		h1Line1: "Il gestionale per sagre e feste.",
		h1Line2: "Un ecosistema sempre connesso.",
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
		noteSourceAvailable: "MySagra è source available: il codice è consultabile con licenza PolyForm Shield",
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
			"Con il vostro consenso facoltativo, MySagra usa Umami Analytics e Session Replay per analizzare la navigazione e ricostruire un campione delle visite (clic, scroll, movimenti del puntatore e cambi di pagina). I replay non sono video dello schermo e non sono semplici statistiche aggregate. Gli input sono mascherati e il modulo di contatto è escluso dalla registrazione; queste misure riducono il rischio di raccogliere dati personali, ma non garantiscono da sole l'anonimato. Se ci scrivete, trattiamo inoltre i dati inseriti volontariamente nel modulo (nome, email, telefono se fornito, oggetto e messaggio). Non usiamo i replay per pubblicità o tracciamento tra siti.",
		purposesH2: "Finalità del trattamento",
		purposes: [
			"Analisi dell'utilizzo del sito e individuazione di problemi di usabilità tramite Umami Analytics e Session Replay, sulla base del consenso, revocabile in qualsiasi momento dalle preferenze privacy",
			"Gestione delle richieste inviate tramite il modulo di contatto (Resend)",
			"Protezione da traffico malevolo e sicurezza della rete (Cloudflare, se attivo sul dominio)",
		],
		thirdPartyH2: "Servizi di terze parti",
		services: [
			{
				name: "Umami Analytics",
				desc: "Umami è ospitato su umami.mysagra.com. Il tracker, senza cookie di analytics, si carica solo dopo il consenso. I replay sono configurati per campionare il 15% delle sessioni consentite, con durata massima di 5 minuti e mascheramento degli input; il modulo di contatto è escluso. La conservazione standard dei replay prevista da Umami è di 30 giorni. Le impostazioni di registrazione devono essere abilitate e verificate anche nel pannello Umami.",
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
		rightsIntro: "Quando trattiamo dati personali, potete esercitare, nei casi previsti dalla legge, i seguenti diritti. Potete inoltre rifiutare o revocare il consenso all'analisi e ai replay senza limitazioni all'uso del sito; la revoca non pregiudica la liceità del trattamento precedente:",
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
			"Non usiamo cookie pubblicitari. Umami Analytics e Session Replay non impostano cookie di analytics, ma analizzano le interazioni durante la visita e si attivano solo con il consenso. Le preferenze vengono salvate nel localStorage del browser, non in un cookie.",
		tableH2: "Cookie e memoria locale",
		tableHeaders: { name: "Nome", provider: "Provider", purpose: "Scopo", type: "Tipo", duration: "Durata" },
		rows: [
			{
				name: "klaro-consent-v2",
				provider: "MySagra",
				purpose: "Memorizza le scelte di consenso nel localStorage del browser",
				type: "Tecnico (localStorage)",
				duration: "Fino alla cancellazione dei dati del sito nel browser",
				essential: true,
			},
		],
		badgeEssential: "Essenziale",
		badgeFunctional: "Funzionale",
		consentH2: "Gestione del consenso",
		consentBody:
			"Puoi accettare o rifiutare Umami Analytics e Session Replay dal banner. Il tracker resta bloccato fino al consenso; rifiutare non impedisce di usare il sito o inviare richieste. Puoi riaprire le preferenze dal footer o dal pulsante qui sotto e revocare il consenso. Alla revoca, la pagina viene ricaricata per fermare il tracker: eventuali dati non salvati nel modulo vengono persi. La revoca non elimina automaticamente i dati già raccolti.",
		contactH2: "Contatti",
		contactPrefix: "Per qualsiasi domanda: ",
		privacyNotePrefix: "Per maggiori dettagli sul trattamento dei dati, consulta la nostra ",
		privacyNoteLinkLabel: "Privacy Policy",
	},
	cookieBanner: {
		description:
			"Con il tuo consenso usiamo Umami per statistiche e replay di un campione delle visite (clic e scroll), per migliorare il sito. Gli input sono mascherati e il modulo contatti è escluso. Puoi rifiutare e cambiare scelta in qualsiasi momento.",
		learnMore: "Scopri di più",
		acceptAll: "Accetta",
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
		title: "Festival POS & Food Ordering Software | MySagra",
		description:
			"Keep food orders moving from checkout to kitchen with MySagra. Cloud POS for volunteer-run community festivals, with guided setup. Request a demo.",
		keywords:
			"festival POS, food ordering software for events, community festival software, cloud POS, kitchen order printing",
	},
	header: {
		nav: { vantaggi: "Benefits", soluzioni: "Plans", ecosistema: "Ecosystem", docs: "Source code" },
		cta: "Contact us",
		sectionsAria: "Sections",
		menuOpenAria: "Open menu",
	},
	hero: {
		h1Line1: "Food and drink orders, connected.",
		h1Line2: "Built for community festivals.",
		dek: "Run checkout, kitchen orders and customer self-ordering in one volunteer-friendly cloud platform. We manage the servers and guide you through setting up the local printing service that connects your printers to MySagra.",
		ctaPrimary: "Request a demo",
		ctaSecondary: "Explore managed cloud",
		heroImgAlt: "Volunteers at the counter using MyCassa on screen while customers order during a festival",
		logosLabel: "Used by festivals and fairs across Italy",
	},
	vantaggi: { h2: "Keep checkout and kitchen orders in sync" },
	outcomes: [
		{
			title: "No more lost orders",
			desc: "Kitchen order tickets print automatically at the right station: kitchen, grill, bar or pizzeria.",
			icon: "receipt",
		},
		{
			title: "Multiple registers, one event",
			desc: "Take orders at several checkout stations. Your registers, kitchen printers and dashboard share the same orders through MySagra's cloud platform.",
			icon: "wifi",
		},
		{
			title: "Sales reports without the paperwork",
			desc: "Follow sales on a real-time dashboard and export your data to Excel for your end-of-event report.",
			icon: "chart",
		},
		{
			title: "A simpler workflow for volunteers",
			desc: "Give volunteers a clear checkout workflow, with orders sent to the kitchen without handwritten notes or shouted instructions.",
			icon: "shield",
		},
		{
			title: "Saved orders, always recoverable",
			desc: "Find previous orders, cancel them when needed and keep track of sales throughout your event.",
			icon: "history",
		},
		{
			title: "Works with the hardware you already have",
			desc: "Use browser-based checkout on your computers, tablets or phones. We guide you through connecting compatible ESC/POS thermal printers.",
			icon: "plug",
		},
	],
	soluzioni: {
		h2: "Managed cloud, with help getting started",
		lede: "We run the servers and guide you through setting up local printing. Pricing is quoted per event or per season, based on your requirements.",
		demoNotePrefix: "Want to see the checkout and kitchen workflow?",
		demoNoteCta: "Contact us to request a demo →",
		tiers: [
			{
				icon: "cloud",
				name: "Managed cloud",
				tag: "Recommended",
				featured: true,
				desc: "Your MySagra instance hosted and maintained by us, with security, updates and backups managed for you. We guide you through installing and configuring the local printing service that communicates with our servers.",
				points: ["Hosting, updates and backups managed for you", "Guided local printing setup included", "Customer self-ordering included", "Support during your event"],
				warning:
					"Requires a stable internet connection. You provide checkout devices, compatible printers and the device running the local printing service.",
				cta: "Request a quote",
			},
			{
				icon: "custom",
				name: "Custom development",
				desc: "Need a different workflow for your festival? Tell us about your requirements and we can scope dedicated features or integrations for your MySagra setup.",
				points: ["Event-specific workflows", "Dedicated features and integrations", "Scope and quote agreed with you"],
				cta: "Tell us what you need",
			},
		],
	},
	ecosistema: {
		h2: "One connected system for festival food orders",
		lede: "Manage your event in the cloud, take orders at checkout or from customers' phones, and print kitchen tickets locally. Each tool connects to MySagra.",
		items: [
			{
				name: "MySagra",
				role: "core",
				icon: "core",
				desc: "Your cloud-based event management hub: menus, categories, variants, preparation stations, staff roles and a real-time sales dashboard. Orders from checkout and customer self-ordering are managed in the same system.",
			},
			{
				name: "MyCassa",
				role: "cassa",
				icon: "cassa",
				photo: "/images/mycassa-terminal.webp",
				desc: "Browser-based point of sale (POS) for your event's checkout stations. Volunteers take food and drink orders on a computer, tablet or phone, with orders shared through MySagra and sent to the right preparation stations.",
			},
			{
				name: "MyClienti",
				role: "cliente",
				icon: "clienti",
				photos: ["/images/myclienti-app-1.webp", "/images/myclienti-app-2.webp"],
				desc: "Let customers browse your menu and place their own orders from a phone, using your event's images and sponsors. Customers still pay at the counter, not through the app. Self-ordering is included with managed cloud.",
			},
			{
				name: "MyStampa",
				role: "stampa",
				icon: "stampa",
				photo: "/images/mystampa-receipt.webp",
				desc: "Print kitchen order tickets and thermal receipts locally, automatically split by station: kitchen, grill, bar or pizzeria. We guide you through setting up the local printing service that connects your printers to our cloud servers. MyStampa also prints end-of-event sales reports.",
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
		customNoteLink: "Explore custom development →",
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
		noteSourceAvailable: "MySagra is source available: the code is available under the PolyForm Shield license",
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
		lede: "What community festival organizers need to know about cloud checkout, kitchen printing and setup.",
		items: [
			{
				q: "What is MySagra?",
				a: "MySagra is cloud POS and food ordering software for community festivals and volunteer-run food events. It connects checkout stations, customer self-ordering and local kitchen printing, with menus and sales reports managed in one system. It focuses on food and drink orders, rather than admission ticketing or festival scheduling.",
			},
			{
				q: "Do we need to manage a server?",
				a: "No. With managed cloud, MySagra runs on our servers and we handle hosting, security, updates and backups. Your team uses the web interface for checkout and event management. For kitchen printing, you also run a local printing service on a device at your event; we guide you through its setup.",
			},
			{
				q: "How does kitchen order printing work with managed cloud?",
				a: "A local printing service communicates with MySagra's cloud servers and sends kitchen order tickets to your compatible printers. Orders are split by preparation station, such as the kitchen, grill, bar or pizzeria. Guidance for installing and configuring this service is included with managed cloud; you provide the printers and the device running it.",
			},
			{
				q: "Does the managed cloud service need an internet connection?",
				a: "Yes. Managed cloud requires a stable internet connection so checkout devices and the local printing service can communicate with our servers. Installing the printing service locally does not make the cloud platform an offline system. Plan for reliable connectivity at your venue before choosing this service.",
			},
			{
				q: "Do customers pay through the self-ordering app?",
				a: "No. Customers can browse your menu and place food and drink orders from their phones, but payment happens at the checkout counter, not through the app. Customer self-ordering is included with managed cloud and connects to the same order management system as your checkout stations.",
			},
			{
				q: "What hardware do we need for managed cloud?",
				a: "You provide computers, tablets or phones with a browser for checkout, compatible ESC/POS thermal printers, and a device to run the local printing service. You also need a stable internet connection. Tell us which hardware you have before setup so we can guide you on printer compatibility and configuration.",
			},
			{
				q: "Can volunteers use MySagra without technical training?",
				a: "MySagra is designed for volunteers without an IT background. Checkout staff take orders through a browser-based interface, while kitchen tickets are routed to the appropriate preparation stations. The local printing service needs to be installed and configured before the event, and we guide you through that setup.",
			},
			{
				q: "How much does MySagra cost?",
				a: "Managed cloud is quoted per event or per season, based on your requirements. It includes managed hosting, updates, backups, customer self-ordering and guidance for local printing setup. You provide the hardware. If you need dedicated features or integrations, we agree on the scope and quote for custom development separately.",
			},
			{
				q: "How do we get started before our festival?",
				a: "Contact us with your event dates, menu, checkout stations and existing hardware. We can discuss your requirements, arrange a demo and quote managed cloud for your event or season. We guide you through setting up the local printing service so you can test your checkout-to-kitchen workflow before opening.",
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
			"With your optional consent, MySagra uses Umami Analytics and Session Replay to analyse navigation and reconstruct a sample of visits (clicks, scrolling, pointer movements and page changes). Replays are not screen videos or simply aggregate statistics. Inputs are masked and the contact form is excluded from recording; these measures reduce the risk of collecting personal data but do not by themselves guarantee anonymity. If you contact us, we also process the data you voluntarily enter (name, email, optional phone number, subject and message). We do not use replays for advertising or cross-site tracking.",
		purposesH2: "Purpose of Processing",
		purposes: [
			"Site usage analysis and identification of usability issues through Umami Analytics and Session Replay, based on consent that can be withdrawn at any time in privacy preferences",
			"Handling requests submitted via the contact form (Resend)",
			"Protection from malicious traffic and network security (Cloudflare, if active on the domain)",
		],
		thirdPartyH2: "Third-Party Services",
		services: [
			{
				name: "Umami Analytics",
				desc: "Umami is hosted at umami.mysagra.com. Its tracker sets no analytics cookies and loads only after consent. Replays are configured to sample 15% of consenting sessions, with a maximum duration of 5 minutes and masked inputs; the contact form is excluded. Umami's standard replay retention is 30 days. Recording settings must also be enabled and verified in the Umami dashboard.",
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
		rightsIntro: "Where we process personal data, you may exercise the following rights as provided by law. You may also refuse or withdraw consent to analytics and replays without restrictions on using the site; withdrawal does not affect the lawfulness of prior processing:",
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
			"We do not use advertising cookies. Umami Analytics and Session Replay set no analytics cookies, but analyse interactions during a visit and activate only with consent. Preferences are saved in browser localStorage, not in a cookie.",
		tableH2: "Cookies and Local Storage",
		tableHeaders: { name: "Name", provider: "Provider", purpose: "Purpose", type: "Type", duration: "Duration" },
		rows: [
			{
				name: "klaro-consent-v2",
				provider: "MySagra",
				purpose: "Stores consent choices in browser localStorage",
				type: "Technical (localStorage)",
				duration: "Until site data is cleared in the browser",
				essential: true,
			},
		],
		badgeEssential: "Essential",
		badgeFunctional: "Functional",
		consentH2: "Consent Management",
		consentBody:
			"You can accept or reject Umami Analytics and Session Replay in the banner. The tracker remains blocked until consent; refusal does not prevent using the site or sending requests. Reopen preferences from the footer or the button below to withdraw consent. On withdrawal the page reloads to stop the tracker: any unsaved form data will be lost. Withdrawal does not automatically delete data already collected.",
		contactH2: "Contact",
		contactPrefix: "For any question: ",
		privacyNotePrefix: "For more detail on how we process data, see our ",
		privacyNoteLinkLabel: "Privacy Policy",
	},
	cookieBanner: {
		description:
			"With your consent, we use Umami for statistics and replays of a sample of visits (clicks and scrolling) to improve the site. Inputs are masked and the contact form is excluded. You can refuse and change your choice at any time.",
		learnMore: "Learn more",
		acceptAll: "Accept",
		privacyPolicyName: "privacy policy",
	},
	footer: {
		tagline: "Cloud POS and food ordering for community festivals.",
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
		fieldMessage: "Tell us about your festival *",
		placeholderName: "Jane Smith",
		placeholderEmail: "m@example.com",
		placeholderPhone: "+44 7700 900123",
		placeholderSubject: "Subject of your request",
		placeholderMessage: "Tell us your event dates, food and drink menu, number of checkout stations, and the devices and printers you already have…",
		requestTypePlaceholder: "Select a request",
		requestTypeOptions: {
			informazioni: "Information",
			cloud: "Managed cloud",
			custom: "Custom development",
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
