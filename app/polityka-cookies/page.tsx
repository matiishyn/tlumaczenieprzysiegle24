import { LegalPage } from '@/components/pages/legal-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka cookies',
  description: 'Informacje dotyczące plików cookies i ich wykorzystania na stronie.',
};

export default function CookiesPageRoute() {
  const t = getTranslations(defaultLocale);

  return <LegalPage locale={defaultLocale} t={t} type="cookies" />;
}
