import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Переклади українською - Присяжний перекладач Краків',
  description:
    'Професійні присяжні переклади з польської на українську і з української на польську. Сертифікований перекладач у Кракові. Швидке виконання, конкурентні ціни.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-ukrainsku`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-ukrainski`,
      en: `${siteConfig.urls.domain}/en/services/ukrainian-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-ukrainsku`,
    },
  },
};

export default function UkrainianTranslationsPageRoute() {
  const t = getTranslations('uk');

  return <ServiceDetailPage locale="uk" t={t} serviceType="ukrainian" />;
}

