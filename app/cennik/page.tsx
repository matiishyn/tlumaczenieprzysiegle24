import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PricingSection } from '@/components/pricing-section';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cennik tłumaczeń przysięgłych',
  description:
    'Przejrzyste ceny tłumaczeń przysięgłych w Krakowie. Akty, dyplomy, świadectwa od 80 zł. Szybka wycena online.',
};

export default function PricingPage() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <PricingSection t={t} locale={defaultLocale} />
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
