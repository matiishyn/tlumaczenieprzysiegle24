import { AboutPage } from '@/components/pages/about-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O tłumaczu przysięgłym',
  description:
    'Certyfikowany tłumacz przysięgły w Krakowie. Wpis na liście Ministerstwa Sprawiedliwości. Specjalizacja: język ukraiński i angielski.',
  keywords: [
    'tłumacz przysięgły Kraków',
    'certyfikowany tłumacz',
    'lista tłumaczy przysięgłych',
    'Ministerstwo Sprawiedliwości',
    'tłumaczenia ukraińskie',
    'tłumaczenia angielskie',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/o-mnie`,
    languages: {
      pl: `${siteConfig.urls.domain}/o-mnie`,
      en: `${siteConfig.urls.domain}/en/about`,
      uk: `${siteConfig.urls.domain}/uk/pro-mene`,
    },
  },
  openGraph: {
    title: 'O tłumaczu przysięgłym | Tłumaczenia Przysięgłe Kraków',
    description:
      'Certyfikowany tłumacz przysięgły w Krakowie. Wpis na liście Ministerstwa Sprawiedliwości.',
    url: `${siteConfig.urls.domain}/o-mnie`,
    type: 'website',
  },
};

export default function AboutPageRoute() {
  const t = getTranslations(defaultLocale);

  return <AboutPage locale={defaultLocale} t={t} />;
}
