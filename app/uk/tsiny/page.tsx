import { PricingPage } from '@/components/pages/pricing-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ціни на присяжні переклади',
  description:
    'Прозорі ціни на присяжні переклади в Кракові. Свідоцтва, дипломи, документи від 80 zł. Швидка онлайн-оцінка.',
  keywords: [
    'ціни присяжні переклади',
    'ціни перекладач Краків',
    'вартість перекладу документів',
    'онлайн оцінка перекладу',
    'присяжні переклади ціна',
  ],
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/tsiny`,
    languages: {
      pl: `${siteConfig.urls.domain}/cennik`,
      en: `${siteConfig.urls.domain}/en/pricing`,
      uk: `${siteConfig.urls.domain}/uk/tsiny`,
    },
  },
  openGraph: {
    title: 'Ціни на присяжні переклади | Професійний перекладач Краків',
    description:
      'Прозорі ціни на присяжні переклади в Кракові. Свідоцтва, дипломи, документи від 80 zł.',
    url: `${siteConfig.urls.domain}/uk/tsiny`,
    type: 'website',
    locale: 'uk_UA',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Ціни на присяжні переклади&description=Прозорі ціни на присяжні переклади в Кракові`,
        width: 1200,
        height: 630,
        alt: 'Ціни на присяжні переклади',
      },
    ],
  },
};

export default function PricingPageRoute() {
  const t = getTranslations('uk');

  return <PricingPage locale="uk" t={t} />;
}

