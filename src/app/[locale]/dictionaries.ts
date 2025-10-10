import type { Locale } from '@/i18n';
import 'server-only';

const dictionaries = {
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  uk: () => import('./dictionaries/uk.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

