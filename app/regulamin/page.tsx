import { LegalPage } from '@/components/pages/legal-page';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulamin',
  description: 'Regulamin świadczenia usług tłumaczeniowych drogą elektroniczną.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.urls.domain}/regulamin`,
    languages: {
      pl: `${siteConfig.urls.domain}/regulamin`,
      en: `${siteConfig.urls.domain}/en/terms`,
      uk: `${siteConfig.urls.domain}/uk/rehulyamin`,
    },
  },
};

export default function TermsPageRoute() {
  const t = getTranslations(defaultLocale);

  return <LegalPage locale={defaultLocale} t={t} type="terms" />;
}
