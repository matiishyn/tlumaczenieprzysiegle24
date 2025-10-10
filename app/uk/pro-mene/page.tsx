import { AboutPage } from '@/components/pages/about-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Про присяжного перекладача',
  description:
    'Сертифікований присяжний перекладач у Кракові. Запис у списку Міністерства юстиції. Спеціалізація: українська та англійська мови.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/pro-mene`,
    languages: {
      pl: `${siteConfig.urls.domain}/o-mnie`,
      en: `${siteConfig.urls.domain}/en/about`,
      uk: `${siteConfig.urls.domain}/uk/pro-mene`,
    },
  },
};

export default function AboutPageRoute() {
  const t = getTranslations('uk');

  return <AboutPage locale="uk" t={t} />;
}

