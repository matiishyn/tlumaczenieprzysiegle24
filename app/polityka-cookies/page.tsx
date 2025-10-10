import { LegalPage } from '@/components/pages/legal-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka cookies',
  description: 'Informacje dotyczące plików cookies i ich wykorzystania na stronie.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.urls.domain}/polityka-cookies`,
    languages: {
      pl: `${siteConfig.urls.domain}/polityka-cookies`,
      en: `${siteConfig.urls.domain}/en/cookie-policy`,
      uk: `${siteConfig.urls.domain}/uk/polityka-cookies`,
    },
  },
};

export default function CookiesPageRoute() {
  const t = getTranslations(defaultLocale);

  return <LegalPage locale={defaultLocale} t={t} type="cookies" />;
}
