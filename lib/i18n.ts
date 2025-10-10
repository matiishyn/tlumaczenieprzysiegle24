import { Locale, defaultLocale } from '@/config/locales';
import { translations } from '@/config/translations';

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function getLocalePath(locale: Locale, path: string = ''): string {
  if (locale === defaultLocale) {
    return path || '/';
  }
  return `/${locale}${path}`;
}
