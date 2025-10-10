import { PricingPage } from '@/components/pages/pricing-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ціни на присяжні переклади',
  description:
    'Прозорі ціни на присяжні переклади в Кракові. Свідоцтва, дипломи, документи від 80 zł. Швидка онлайн-оцінка.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/tsiny`,
    languages: {
      pl: `${siteConfig.urls.domain}/cennik`,
      en: `${siteConfig.urls.domain}/en/pricing`,
      uk: `${siteConfig.urls.domain}/uk/tsiny`,
    },
  },
};

export default function PricingPageRoute() {
  const t = getTranslations('uk');

  return <PricingPage locale="uk" t={t} />;
}

