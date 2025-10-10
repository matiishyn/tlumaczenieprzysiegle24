import { LegalPage } from '@/components/pages/legal-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for providing translation services electronically.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/terms`,
    languages: {
      pl: `${siteConfig.urls.domain}/regulamin`,
      en: `${siteConfig.urls.domain}/en/terms`,
      uk: `${siteConfig.urls.domain}/uk/rehulyamin`,
    },
  },
};

export default function TermsPageRoute() {
  const t = getTranslations('en');

  return <LegalPage locale="en" t={t} type="terms" />;
}

