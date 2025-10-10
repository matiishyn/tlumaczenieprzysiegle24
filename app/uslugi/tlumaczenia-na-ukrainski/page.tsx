import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tłumaczenia na ukraiński - Tłumacz przysięgły Kraków',
  description:
    'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i z ukraińskiego na polski. Certyfikowany tłumacz w Krakowie. Szybka realizacja, konkurencyjne ceny.',
};

export default function UkrainianTranslationsPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ServiceDetailPage locale={defaultLocale} t={t} serviceType="ukrainian" />;
}
