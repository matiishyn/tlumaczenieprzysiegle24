import { PricingPage } from '@/components/pages/pricing-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sworn translation pricing',
  description:
    'Transparent sworn translation prices in Kraków. Certificates, diplomas, documents from 80 PLN. Fast online quote.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/pricing`,
    languages: {
      pl: `${siteConfig.urls.domain}/cennik`,
      en: `${siteConfig.urls.domain}/en/pricing`,
      uk: `${siteConfig.urls.domain}/uk/tsiny`,
    },
  },
};

export default function PricingPageRoute() {
  const t = getTranslations('en');

  return <PricingPage locale="en" t={t} />;
}

