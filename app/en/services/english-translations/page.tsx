import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Translations - Sworn Translator Kraków',
  description:
    'Professional sworn translations from Polish to English and from English to Polish. Certified translator in Kraków. Delivery 24-48h.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/services/english-translations`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-angielski`,
      en: `${siteConfig.urls.domain}/en/services/english-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-anhliysku`,
    },
  },
};

export default function EnglishTranslationsPageRoute() {
  const t = getTranslations('en');

  return <ServiceDetailPage locale="en" t={t} serviceType="english" />;
}

