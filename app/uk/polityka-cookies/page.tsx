import { LegalPage } from '@/components/pages/legal-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Політика cookies',
  description: 'Інформація про файли cookies та їх використання на сайті.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/polityka-cookies`,
    languages: {
      pl: `${siteConfig.urls.domain}/polityka-cookies`,
      en: `${siteConfig.urls.domain}/en/cookie-policy`,
      uk: `${siteConfig.urls.domain}/uk/polityka-cookies`,
    },
  },
};

export default function CookiesPageRoute() {
  const t = getTranslations('uk');

  return <LegalPage locale="uk" t={t} type="cookies" />;
}

