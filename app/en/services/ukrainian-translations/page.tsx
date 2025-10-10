import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ukrainian Translations - Sworn Translator Kraków',
  description:
    'Professional sworn translations from Polish to Ukrainian and from Ukrainian to Polish. Certified translator in Kraków. Fast delivery, competitive prices.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/services/ukrainian-translations`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-ukrainski`,
      en: `${siteConfig.urls.domain}/en/services/ukrainian-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-ukrainsku`,
    },
  },
};

export default function UkrainianTranslationsPageRoute() {
  const t = getTranslations('en');

  return <ServiceDetailPage locale="en" t={t} serviceType="ukrainian" />;
}

