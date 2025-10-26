import { PricingPage } from '@/components/pages/pricing-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ціни на присяжні переклади документів у Кракові',
  description:
    'Присяжний перекладач української мови у Кракові виконує офіційні переклади документів з української на польську та навпаки за прозорими тарифами. Вартість залежить від типу документа і терміновості, без прихованих платежів. Усі переклади визнаються польськими установами. Надішліть документ онлайн та отримайте безкоштовну оцінку вартості протягом 15–30 хвилин.',
  keywords: [
    'ціни присяжні переклади Краків',
    'ціни перекладач українська мова',
    'вартість перекладу документів',
    'онлайн оцінка перекладу',
    'присяжні переклади ціна',
    'переклади українська польська',
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
    title: 'Ціни на присяжні переклади документів у Кракові | Професійний перекладач',
    description:
      'Присяжний перекладач української мови у Кракові виконує офіційні переклади документів з української на польську та навпаки за прозорими тарифами.',
    url: `${siteConfig.urls.domain}/uk/tsiny`,
    type: 'website',
    locale: 'uk_UA',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=Ціни на присяжні переклади документів у Кракові&description=Присяжний перекладач української мови у Кракові`,
        width: 1200,
        height: 630,
        alt: 'Ціни на присяжні переклади документів у Кракові',
      },
    ],
  },
};

export default function PricingPageRoute() {
  const t = getTranslations('uk');

  return <PricingPage locale="uk" t={t} />;
}

