import { AboutPage } from '@/components/pages/about-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Sworn Translator',
  description:
    'Certified sworn translator in Kraków. Entry on the Ministry of Justice list. Specialization: Ukrainian and English languages.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/about`,
    languages: {
      pl: `${siteConfig.urls.domain}/o-mnie`,
      en: `${siteConfig.urls.domain}/en/about`,
      uk: `${siteConfig.urls.domain}/uk/pro-mene`,
    },
  },
};

export default function AboutPageRoute() {
  const t = getTranslations('en');

  return <AboutPage locale="en" t={t} />;
}

