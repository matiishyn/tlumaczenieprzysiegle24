import { ContactPage } from '@/components/pages/contact-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакт',
  description:
    'Зв\'яжіться з присяжним перекладачем у Кракові. Тел: +48 123 456 789, вул. Centralna 21. Особистий самовивіз або кур\'єр.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/kontakt`,
    languages: {
      pl: `${siteConfig.urls.domain}/kontakt`,
      en: `${siteConfig.urls.domain}/en/contact`,
      uk: `${siteConfig.urls.domain}/uk/kontakt`,
    },
  },
};

export default function ContactPageRoute() {
  const t = getTranslations('uk');

  return <ContactPage locale="uk" t={t} />;
}

