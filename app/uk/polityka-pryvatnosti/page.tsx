import { LegalPage } from '@/components/pages/legal-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
  description: 'Політика конфіденційності та захисту персональних даних відповідно до GDPR.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/polityka-pryvatnosti`,
    languages: {
      pl: `${siteConfig.urls.domain}/polityka-prywatnosci`,
      en: `${siteConfig.urls.domain}/en/privacy-policy`,
      uk: `${siteConfig.urls.domain}/uk/polityka-pryvatnosti`,
    },
  },
};

export default function PrivacyPageRoute() {
  const t = getTranslations('uk');

  return <LegalPage locale="uk" t={t} type="privacy" />;
}

