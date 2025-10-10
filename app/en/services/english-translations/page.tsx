import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Translations - Sworn Translator Kraków',
  description:
    'Professional sworn translations from Polish to English and from English to Polish. Certified translator in Kraków. Delivery 24-48h.',
  keywords: [
    'English translations',
    'English translator Kraków',
    'sworn English translations',
    'English documents',
    'Polish to English',
    'English apostille',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/services/english-translations`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-angielski`,
      en: `${siteConfig.urls.domain}/en/services/english-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-anhliysku`,
    },
  },
  openGraph: {
    title: 'English Translations | Professional Translator Kraków',
    description:
      'Professional sworn translations from Polish to English and from English to Polish.',
    url: `${siteConfig.urls.domain}/en/services/english-translations`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=English Translations&description=Professional sworn translations from Polish to English`,
        width: 1200,
        height: 630,
        alt: 'English Translations',
      },
    ],
  },
};

export default function EnglishTranslationsPageRoute() {
  const t = getTranslations('en');

  return <ServiceDetailPage locale="en" t={t} serviceType="english" />;
}

