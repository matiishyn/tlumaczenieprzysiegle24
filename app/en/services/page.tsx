import { ServicesPage } from '@/components/pages/services-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Translation Services',
  description:
    'Professional sworn translations to Ukrainian and English. Certified translator in Kraków. Official, educational, legal documents.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/services`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi`,
      en: `${siteConfig.urls.domain}/en/services`,
      uk: `${siteConfig.urls.domain}/uk/posluhy`,
    },
  },
};

export default function ServicesPageRoute() {
  const t = getTranslations('en');

  return <ServicesPage locale="en" t={t} />;
}

