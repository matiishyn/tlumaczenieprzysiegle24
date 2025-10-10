import { LegalPage } from '@/components/pages/legal-page';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Регламент',
  description: 'Регламент надання перекладацьких послуг електронним шляхом.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk/rehulyamin`,
    languages: {
      pl: `${siteConfig.urls.domain}/regulamin`,
      en: `${siteConfig.urls.domain}/en/terms`,
      uk: `${siteConfig.urls.domain}/uk/rehulyamin`,
    },
  },
};

export default function TermsPageRoute() {
  const t = getTranslations('uk');

  return <LegalPage locale="uk" t={t} type="terms" />;
}

