import { ServicesPage } from '@/components/pages/services-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usługi tłumaczeniowe',
  description:
    'Profesjonalne tłumaczenia przysięgłe na język ukraiński i angielski. Certyfikowany tłumacz w Krakowie. Dokumenty urzędowe, edukacyjne, prawne.',
  keywords: [
    'tłumaczenia przysięgłe Kraków',
    'tłumaczenia ukraińskie',
    'tłumaczenia angielskie',
    'tłumacz przysięgły Kraków',
    'dokumenty urzędowe',
    'apostille Kraków',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/uslugi`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi`,
      en: `${siteConfig.urls.domain}/en/services`,
      uk: `${siteConfig.urls.domain}/uk/posluhy`,
    },
  },
  openGraph: {
    title: 'Usługi tłumaczeniowe | Tłumaczenia Przysięgłe Kraków',
    description:
      'Profesjonalne tłumaczenia przysięgłe na język ukraiński i angielski. Certyfikowany tłumacz w Krakowie.',
    url: `${siteConfig.urls.domain}/uslugi`,
    type: 'website',
  },
};

export default function ServicesPageRoute() {
  const t = getTranslations(defaultLocale);

  return <ServicesPage locale={defaultLocale} t={t} />;
}
