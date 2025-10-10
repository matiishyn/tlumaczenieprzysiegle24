import { PricingPage } from '@/components/pages/pricing-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sworn translation pricing',
  description:
    'Transparent sworn translation prices in Kraków. Certificates, diplomas, documents from 80 PLN. Fast online quote.',
  keywords: [
    'sworn translation pricing',
    'translation prices Kraków',
    'certified translator cost',
    'document translation price',
    'online quote translation',
    'sworn translation rates',
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
    title: 'Sworn Translation Pricing | Professional Translator Kraków',
    description:
      'Transparent sworn translation prices in Kraków. Certificates, diplomas, documents from 80 PLN.',
    url: `${siteConfig.urls.domain}/en/pricing`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Sworn Translation Pricing&description=Transparent sworn translation prices in Kraków`,
        width: 1200,
        height: 630,
        alt: 'Sworn Translation Pricing',
      },
    ],
  },
};

export default function PricingPageRoute() {
  const t = getTranslations('en');

  return <PricingPage locale="en" t={t} />;
}

