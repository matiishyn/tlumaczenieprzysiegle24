import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tłumaczenia na angielski - Tłumacz przysięgły Kraków',
  description:
    'Profesjonalne tłumaczenia przysięgłe z polskiego na angielski i z angielskiego na polski. Certyfikowany tłumacz w Krakowie. Realizacja 24-48h.',
};

export default function EnglishTranslationsPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ServiceDetailPage locale={defaultLocale} t={t} serviceType="english" />;
}
