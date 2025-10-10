import { ServiceDetailPage } from '@/components/pages/service-detail-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Переклади англійською - Присяжний перекладач Краків',
  description:
    'Професійні присяжні переклади з польської на англійську і з англійської на польську. Сертифікований перекладач у Кракові. Виконання 24-48 год.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-anhliysku`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi/tlumaczenia-na-angielski`,
      en: `${siteConfig.urls.domain}/en/services/english-translations`,
      uk: `${siteConfig.urls.domain}/uk/posluhy/pereklad-na-anhliysku`,
    },
  },
};

export default function EnglishTranslationsPageRoute() {
  const t = getTranslations('uk');

  return <ServiceDetailPage locale="uk" t={t} serviceType="english" />;
}

