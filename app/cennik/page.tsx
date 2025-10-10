import { PricingPage } from '@/components/pages/pricing-page';
import { defaultLocale } from '@/config/locales';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cennik tłumaczeń przysięgłych',
  description:
    'Przejrzyste ceny tłumaczeń przysięgłych w Krakowie. Akty, dyplomy, świadectwa od 80 zł. Szybka wycena online.',
};

export default function PricingPageRoute() {
  const t = getTranslations(defaultLocale);

  return <PricingPage locale={defaultLocale} t={t} />;
}
