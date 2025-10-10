import { LegalPage } from '@/components/pages/legal-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności i ochrony danych osobowych zgodnie z RODO.',
};

export default function PrivacyPageRoute() {
  const t = getTranslations(defaultLocale);

  return <LegalPage locale={defaultLocale} t={t} type="privacy" />;
}
