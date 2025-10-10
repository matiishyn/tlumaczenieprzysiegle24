import { AboutPage } from '@/components/pages/about-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O tłumaczu przysięgłym',
  description:
    'Certyfikowany tłumacz przysięgły w Krakowie. Wpis na liście Ministerstwa Sprawiedliwości. Specjalizacja: język ukraiński i angielski.',
};

export default function AboutPageRoute() {
  const t = getTranslations(defaultLocale);

  return <AboutPage locale={defaultLocale} t={t} />;
}
