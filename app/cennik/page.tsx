import { PricingPage } from '@/components/pages/pricing-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cennik tłumaczeń przysięgłych dokumentów w Krakowie',
  description:
    'Tłumacz przysięgły języka ukraińskiego w Krakowie wykonuje oficjalne tłumaczenia dokumentów z ukraińskiego na polski i odwrotnie według przejrzystych stawek. Koszt zależy od typu dokumentu i pilności, bez ukrytych opłat. Wszystkie tłumaczenia są uznawane przez polskie instytucje. Wyślij dokument online i otrzymaj bezpłatną wycenę w ciągu 15–30 minut.',
  keywords: [
    'cennik tłumaczeń przysięgłych Kraków',
    'ceny tłumacza ukraiński język',
    'koszt tłumaczenia dokumentów',
    'wycena tłumaczenia online',
    'tłumaczenia przysięgłe cena',
    'tłumaczenia ukraiński polski',
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
    title: 'Cennik tłumaczeń przysięgłych dokumentów w Krakowie | Profesjonalny tłumacz',
    description:
      'Tłumacz przysięgły języka ukraińskiego w Krakowie wykonuje oficjalne tłumaczenia dokumentów z ukraińskiego na polski i odwrotnie według przejrzystych stawek.',
    url: `${siteConfig.urls.domain}/cennik`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Cennik tłumaczeń przysięgłych dokumentów w Krakowie&description=Tłumacz przysięgły języka ukraińskiego w Krakowie`,
        width: 1200,
        height: 630,
        alt: 'Cennik tłumaczeń przysięgłych dokumentów w Krakowie',
      },
    ],
  },
};

export default function PricingPageRoute() {
  const t = getTranslations(defaultLocale);

  return <PricingPage locale={defaultLocale} t={t} />;
}
