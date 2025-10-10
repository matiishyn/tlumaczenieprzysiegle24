import { ServicesPage } from '@/components/pages/services-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usługi tłumaczeniowe',
  description:
    'Profesjonalne tłumaczenia przysięgłe na język ukraiński i angielski. Certyfikowany tłumacz w Krakowie. Dokumenty urzędowe, edukacyjne, prawne.',
};

export default function ServicesPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ServicesPage locale={defaultLocale} t={t} />;
}
