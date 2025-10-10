// i18n configuration for the application
export const locales = ['pl', 'en', 'uk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pl';

export const localeNames: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
  uk: 'Українська',
};

export const localeFlags: Record<Locale, string> = {
  pl: '🇵🇱',
  en: '🇬🇧',
  uk: '🇺🇦',
};

