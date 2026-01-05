import { ContactPage } from '@/components/pages/contact-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    `Skontaktuj się z tłumaczem przysięgłym w Krakowie. Tel: ${siteConfig.business.phone}, Rydlówka 42B/28. Odbiór osobisty lub kurier.`,
  keywords: [
    'kontakt tłumacz przysięgły Kraków',
    'adres tłumacza przysięgłego',
    'telefon tłumacz przysięgły',
    'odbiór osobisty Kraków',
    'kurier dokumenty',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/kontakt`,
    languages: {
      pl: `${siteConfig.urls.domain}/kontakt`,
      en: `${siteConfig.urls.domain}/en/contact`,
      uk: `${siteConfig.urls.domain}/uk/kontakt`,
    },
  },
  openGraph: {
    title: 'Kontakt | Tłumaczenia Przysięgłe Kraków',
    description:
      'Skontaktuj się z tłumaczem przysięgłym w Krakowie. Odbiór osobisty lub kurier.',
    url: `${siteConfig.urls.domain}/kontakt`,
    type: 'website',
  },
};

export default function ContactPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ContactPage locale={defaultLocale} t={t} />;
}
