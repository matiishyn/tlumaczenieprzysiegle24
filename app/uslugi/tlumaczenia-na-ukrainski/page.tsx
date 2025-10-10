import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tłumaczenia na ukraiński - Tłumacz przysięgły Kraków',
  description:
    'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i z ukraińskiego na polski. Certyfikowany tłumacz w Krakowie. Szybka realizacja, konkurencyjne ceny.',
  keywords: [
    'tłumaczenia na ukraiński',
    'tłumacz ukraiński Kraków',
    'tłumaczenia przysięgłe ukraiński',
    'dokumenty ukraińskie',
    'tłumaczenia z ukraińskiego',
    'apostille ukraiński',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-ukrainski`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-ukrainski`,
      en: `${siteConfig.urls.domain}/en/services/ukrainian-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-ukrainsku`,
    },
  },
  openGraph: {
    title: 'Tłumaczenia na ukraiński | Tłumaczenia Przysięgłe Kraków',
    description:
      'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i z ukraińskiego na polski.',
    url: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-ukrainski`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Tłumaczenia na ukraiński&description=Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński`,
        width: 1200,
        height: 630,
        alt: 'Tłumaczenia na ukraiński',
      },
    ],
  },
};

export default function UkrainianTranslationsPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ServiceDetailPage locale={defaultLocale} t={t} serviceType="ukrainian" />;
}
