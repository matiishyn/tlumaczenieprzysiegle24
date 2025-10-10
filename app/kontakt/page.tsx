import { ContactPage } from '@/components/pages/contact-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z tłumaczem przysięgłym w Krakowie. Tel: +48 123 456 789, ul. Centralna 21. Odbiór osobisty lub kurier.',
};

export default function ContactPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ContactPage locale={defaultLocale} t={t} />;
}
