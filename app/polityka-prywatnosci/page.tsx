import { LegalPage } from '@/components/pages/legal-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności i ochrony danych osobowych zgodnie z RODO.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.urls.domain}/polityka-prywatnosci`,
    languages: {
      pl: `${siteConfig.urls.domain}/polityka-prywatnosci`,
      en: `${siteConfig.urls.domain}/en/privacy-policy`,
      uk: `${siteConfig.urls.domain}/uk/polityka-pryvatnosti`,
    },
  },
};

export default function PrivacyPageRoute() {
  const t = getTranslations(defaultLocale);

  return <LegalPage locale={defaultLocale} t={t} type="privacy" />;
}
