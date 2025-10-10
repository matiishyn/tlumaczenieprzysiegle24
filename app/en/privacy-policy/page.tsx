import { LegalPage } from '@/components/pages/legal-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and personal data protection in accordance with GDPR.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/privacy-policy`,
    languages: {
      pl: `${siteConfig.urls.domain}/polityka-prywatnosci`,
      en: `${siteConfig.urls.domain}/en/privacy-policy`,
      uk: `${siteConfig.urls.domain}/uk/polityka-pryvatnosti`,
    },
  },
};

export default function PrivacyPageRoute() {
  const t = getTranslations('en');

  return <LegalPage locale="en" t={t} type="privacy" />;
}

