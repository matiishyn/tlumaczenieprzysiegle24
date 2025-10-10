import { PricingPage } from '@/components/pages/pricing-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cennik tłumaczeń przysięgłych',
  description:
    'Przejrzyste ceny tłumaczeń przysięgłych w Krakowie. Akty, dyplomy, świadectwa od 80 zł. Szybka wycena online.',
  keywords: [
    'cennik tłumaczeń przysięgłych',
    'ceny tłumacza przysięgłego Kraków',
    'koszt tłumaczenia dokumentów',
    'wycena tłumaczenia online',
    'tłumaczenia przysięgłe cena',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/cennik`,
    languages: {
      pl: `${siteConfig.urls.domain}/cennik`,
      en: `${siteConfig.urls.domain}/en/pricing`,
      uk: `${siteConfig.urls.domain}/uk/tsiny`,
    },
  },
  openGraph: {
    title: 'Cennik tłumaczeń przysięgłych | Tłumaczenia Przysięgłe Kraków',
    description:
      'Przejrzyste ceny tłumaczeń przysięgłych w Krakowie. Akty, dyplomy, świadectwa od 80 zł.',
    url: `${siteConfig.urls.domain}/cennik`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Cennik tłumaczeń przysięgłych&description=Przejrzyste ceny tłumaczeń przysięgłych w Krakowie`,
        width: 1200,
        height: 630,
        alt: 'Cennik tłumaczeń przysięgłych',
      },
    ],
  },
};

export default function PricingPageRoute() {
  const t = getTranslations(defaultLocale);

  return <PricingPage locale={defaultLocale} t={t} />;
}
