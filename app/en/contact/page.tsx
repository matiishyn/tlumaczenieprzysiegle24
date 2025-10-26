import { ContactPage } from '@/components/pages/contact-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    `Contact sworn translator in Kraków. Tel: ${siteConfig.business.phone}, ul. Centralna 21. Personal pickup or courier.`,
  alternates: {
    canonical: `${siteConfig.urls.domain}/en/contact`,
    languages: {
      pl: `${siteConfig.urls.domain}/kontakt`,
      en: `${siteConfig.urls.domain}/en/contact`,
      uk: `${siteConfig.urls.domain}/uk/kontakt`,
    },
  },
};

export default function ContactPageRoute() {
  const t = getTranslations('en');

  return <ContactPage locale="en" t={t} />;
}

