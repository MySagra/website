// Shared JSON-LD nodes. Every page emits the same Organization and WebSite so
// search engines and AI crawlers see one consistent entity graph.
export const SITE = 'https://mysagra.com';
export const ORGANIZATION_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

export const founders = [
  {
    '@type': 'Person',
    '@id': `${SITE}/about/#nicolo-spampatti`,
    name: 'Nicolò Spampatti',
    jobTitle: 'Co-founder, developer',
    url: `${SITE}/about/`,
    sameAs: ['https://www.linkedin.com/in/nicol%C3%B2-spampatti-b7833931b/'],
    affiliation: { '@type': 'CollegeOrUniversity', name: 'Università degli Studi di Bergamo' },
  },
  {
    '@type': 'Person',
    '@id': `${SITE}/about/#gabriele-bianco`,
    name: 'Gabriele Bianco',
    jobTitle: 'Co-founder, developer',
    url: `${SITE}/about/`,
    sameAs: ['https://www.linkedin.com/in/gabriele-bianco/'],
    affiliation: { '@type': 'CollegeOrUniversity', name: 'Università degli Studi di Bergamo' },
  },
];

export const organization = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'MySagra',
  url: `${SITE}/`,
  // Google requires a raster logo (min 112x112) for Organization rich results.
  logo: { '@type': 'ImageObject', url: `${SITE}/images/mysagra-logo-512.png`, width: 512, height: 512 },
  email: 'info@mysagra.com',
  foundingDate: '2026',
  founder: founders,
  sameAs: ['https://github.com/MySagra'],
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', email: 'info@mysagra.com', url: `${SITE}/contact/`, availableLanguage: ['it', 'en'] },
    { '@type': 'ContactPoint', contactType: 'technical support', email: 'support@mysagra.com', availableLanguage: ['it', 'en'] },
  ],
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: 'MySagra',
  inLanguage: ['it', 'en'],
  publisher: { '@id': ORGANIZATION_ID },
};

export const partOfWebsite = { '@id': WEBSITE_ID };
