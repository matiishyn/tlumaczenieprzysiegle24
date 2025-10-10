import { ServicesPage } from '@/components/pages/services-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Послуги з перекладу',
  description:
    'Професійні присяжні переклади українською та англійською. Сертифікований перекладач у Кракові. Урядові, освітні, правові документи.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/posluhy`,
    languages: {
      pl: `${siteConfig.urls.domain}/uslugi`,
      en: `${siteConfig.urls.domain}/en/services`,
      uk: `${siteConfig.urls.domain}/uk/posluhy`,
    },
  },
};

export default function ServicesPageRoute() {
  const t = getTranslations('uk');

  return <ServicesPage locale="uk" t={t} />;
}

