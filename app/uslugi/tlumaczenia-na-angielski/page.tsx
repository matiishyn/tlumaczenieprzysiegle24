import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tłumaczenia na angielski - Tłumacz przysięgły Kraków',
  description:
    'Profesjonalne tłumaczenia przysięgłe z polskiego na angielski i z angielskiego na polski. Certyfikowany tłumacz w Krakowie. Realizacja 24-48h.',
  keywords: [
    'tłumaczenia na angielski',
    'tłumacz angielski Kraków',
    'tłumaczenia przysięgłe angielski',
    'dokumenty angielskie',
    'tłumaczenia z angielskiego',
    'apostille angielski',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-angielski`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-angielski`,
      en: `${siteConfig.urls.domain}/en/services/english-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-anhliysku`,
    },
  },
  openGraph: {
    title: 'Tłumaczenia na angielski | Tłumaczenia Przysięgłe Kraków',
    description:
      'Profesjonalne tłumaczenia przysięgłe z polskiego na angielski i z angielskiego na polski.',
    url: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-angielski`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Tłumaczenia na angielski&description=Profesjonalne tłumaczenia przysięgłe z polskiego na angielski`,
        width: 1200,
        height: 630,
        alt: 'Tłumaczenia na angielski',
      },
    ],
  },
};

export default function EnglishTranslationsPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ServiceDetailPage locale={defaultLocale} t={t} serviceType="english" />;
}
