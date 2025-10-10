import { LegalPage } from '@/components/pages/legal-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Information about cookies and their use on the website.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/cookie-policy`,
    languages: {
      pl: `${siteConfig.urls.domain}/polityka-cookies`,
      en: `${siteConfig.urls.domain}/en/cookie-policy`,
      uk: `${siteConfig.urls.domain}/uk/polityka-cookies`,
    },
  },
};

export default function CookiesPageRoute() {
  const t = getTranslations('en');

  return <LegalPage locale="en" t={t} type="cookies" />;
}

