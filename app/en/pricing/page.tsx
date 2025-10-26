import { PricingPage } from '@/components/pages/pricing-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sworn translation pricing for documents in Kraków',
  description:
    'Sworn translator of Ukrainian language in Kraków performs official document translations from Ukrainian to Polish and vice versa at transparent rates. Cost depends on document type and urgency, with no hidden fees. All translations are recognized by Polish institutions. Send document online and receive free cost estimate within 15–30 minutes.',
  keywords: [
    'sworn translation pricing Kraków',
    'Ukrainian translator prices',
    'document translation cost',
    'online translation quote',
    'sworn translation rates',
    'Ukrainian Polish translations',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/pricing`,
    languages: {
      pl: `${siteConfig.urls.domain}/cennik`,
      en: `${siteConfig.urls.domain}/en/pricing`,
      uk: `${siteConfig.urls.domain}/uk/tsiny`,
    },
  },
  openGraph: {
    title: 'Sworn translation pricing for documents in Kraków | Professional translator',
    description:
      'Sworn translator of Ukrainian language in Kraków performs official document translations from Ukrainian to Polish and vice versa at transparent rates.',
    url: `${siteConfig.urls.domain}/en/pricing`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Sworn translation pricing for documents in Kraków&description=Sworn translator of Ukrainian language in Kraków`,
        width: 1200,
        height: 630,
        alt: 'Sworn translation pricing for documents in Kraków',
      },
    ],
  },
};

export default function PricingPageRoute() {
  const t = getTranslations('en');

  return <PricingPage locale="en" t={t} />;
}

