import type { Lang } from './ui';

const content = {
  it: {
    title: 'Chi siamo: il team dietro MySagra | MySagra',
    description: 'Chi c’è dietro MySagra: Nicolò Spampatti e Gabriele Bianco, co-founder e sviluppatori, studenti di ingegneria informatica con radici nel volontariato.',
    breadcrumb: 'Chi siamo',
    h1: 'Chi c’è dietro MySagra',
    intro: 'Siamo Nicolò Spampatti e Gabriele Bianco, due studenti di ingegneria informatica dell’Università di Bergamo e due ragazzi di oratorio. Abbiamo creato MySagra per aiutare i volontari che ogni anno mandano avanti sagre e feste di paese.',
    photoAlt: 'Nicolò Spampatti e Gabriele Bianco, fondatori di MySagra',
    foundersTitle: 'I fondatori',
    role: 'Co-founder e sviluppatore',
    founderNote: 'Studente di ingegneria informatica all’Università di Bergamo.',
    linkedin: 'Profilo LinkedIn',
    whyTitle: 'Perché esiste MySagra',
    whyCopy: 'MySagra unisce la nostra passione per l’informatica all’esperienza del volontariato: serviva un sistema moderno, veloce e facile da usare, a un costo sostenibile per chi organizza.',
    principles: [
      ['Per volontari', 'Pensato per chi sta in cassa o in cucina senza formazione tecnica.'],
      ['Veloce nelle serate piene', 'Cassa, comande e tabellone numeri collegati in un unico sistema.'],
      ['Costo sostenibile', 'Servizi gestiti a prezzi pubblicati e self-hosting gratuito per la propria sagra.'],
    ],
    factsTitle: 'MySagra in breve',
    facts: [
      ['Anno di avvio', '2026'],
      ['Fondatori', 'Nicolò Spampatti, Gabriele Bianco'],
      ['Licenza', 'Source-available, PolyForm Shield 1.0.0'],
      ['Contatti', 'info@mysagra.com'],
    ],
    licenseLink: 'Scopri il self-hosting e la licenza',
    sourceLink: 'Codice sorgente su GitHub',
    ctaTitle: 'Organizzi una sagra?',
    ctaCopy: 'Raccontaci il tuo evento: ti aiutiamo a scegliere la soluzione giusta.',
    ctaPrimary: 'Contattaci',
    ctaSecondary: 'Vedi soluzioni e prezzi',
  },
  en: {
    title: 'About us: the team behind MySagra | MySagra',
    description: 'Who is behind MySagra: Nicolò Spampatti and Gabriele Bianco, co-founders and developers, computer engineering students with roots in volunteering.',
    breadcrumb: 'About',
    h1: 'The team behind MySagra',
    intro: 'We are Nicolò Spampatti and Gabriele Bianco, two computer engineering students at the University of Bergamo who grew up volunteering in our parish youth centre. We built MySagra to help the volunteers who run community food festivals every year.',
    photoAlt: 'Nicolò Spampatti and Gabriele Bianco, founders of MySagra',
    foundersTitle: 'The founders',
    role: 'Co-founder and developer',
    founderNote: 'Computer engineering student at the University of Bergamo.',
    linkedin: 'LinkedIn profile',
    whyTitle: 'Why MySagra exists',
    whyCopy: 'MySagra brings together our passion for computing and our volunteer experience: festivals needed a modern, fast and easy-to-use system at a cost organizers can sustain.',
    principles: [
      ['Built for volunteers', 'Designed for people at the till or in the kitchen with no technical training.'],
      ['Fast on busy nights', 'Checkout, kitchen tickets and the order display connected in one system.'],
      ['Sustainable cost', 'Managed services with published prices, and free self-hosting for your own festival.'],
    ],
    factsTitle: 'MySagra at a glance',
    facts: [
      ['Started', '2026'],
      ['Founders', 'Nicolò Spampatti, Gabriele Bianco'],
      ['License', 'Source-available, PolyForm Shield 1.0.0'],
      ['Contact', 'info@mysagra.com'],
    ],
    licenseLink: 'Read about self-hosting and the license',
    sourceLink: 'Source code on GitHub',
    ctaTitle: 'Running a festival?',
    ctaCopy: 'Tell us about your event and we will help you choose the right setup.',
    ctaPrimary: 'Contact us',
    ctaSecondary: 'See plans and pricing',
  },
} as const;

export function getAboutContent(lang: Lang) {
  return content[lang];
}
