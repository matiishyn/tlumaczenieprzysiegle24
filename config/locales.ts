export const locales = ['pl', 'en', 'uk'] as const;
export const defaultLocale = 'pl' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
  uk: 'Українська',
};

export const localeRoutes: Record<string, Record<Locale, string>> = {
  home: { pl: '/', en: '/en', uk: '/uk' },
  services: { pl: '/uslugi', en: '/en/services', uk: '/uk/posluhy' },
  'services-ukrainian': {
    pl: '/uslugi/tlumaczenia-na-ukrainski',
    en: '/en/services/ukrainian-translations',
    uk: '/uk/posluhy/pereklad-na-ukrainsku'
  },
  'services-english': {
    pl: '/uslugi/tlumaczenia-na-angielski',
    en: '/en/services/english-translations',
    uk: '/uk/posluhy/pereklad-na-anhliysku'
  },
  pricing: { pl: '/cennik', en: '/en/pricing', uk: '/uk/tsiny' },
  about: { pl: '/o-mnie', en: '/en/about', uk: '/uk/pro-mene' },
  contact: { pl: '/kontakt', en: '/en/contact', uk: '/uk/kontakt' },
  privacy: {
    pl: '/polityka-prywatnosci',
    en: '/en/privacy-policy',
    uk: '/uk/polityka-pryvatnosti'
  },
  terms: { pl: '/regulamin', en: '/en/terms', uk: '/uk/rehulyamin' },
  cookies: {
    pl: '/polityka-cookies',
    en: '/en/cookie-policy',
    uk: '/uk/polityka-cookies'
  },
};
