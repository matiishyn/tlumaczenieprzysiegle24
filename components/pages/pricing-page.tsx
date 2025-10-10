import { PricingSection } from '@/components/pricing-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Locale } from '@/config/locales';

interface PricingPageProps {
  locale: Locale;
  t: any;
}

export function PricingPage({ locale, t }: PricingPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} t={t} />
      <main className="flex-1">
        <PricingSection t={t} locale={locale} />
      </main>
      <SiteFooter locale={locale} t={t} />
    </div>
  );
}
