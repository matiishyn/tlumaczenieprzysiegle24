import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PricingSection } from '@/components/pricing-section';
import { QuoteForm } from '@/components/quote-form';
import { FaqSection } from '@/components/faq-section';
import { ReviewsSection } from '@/components/reviews-section';
import { ContactSection } from '@/components/contact-section';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Присяжний переклад Краків',
  description:
    'Професійні присяжні переклади в Кракові. Сертифікований перекладач зі списку Міністерства юстиції. Швидке виконання 24-48 год. Особистий самовивіз або кур\'єр.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/uk`,
    languages: {
      pl: siteConfig.urls.domain,
      en: `${siteConfig.urls.domain}/en`,
      uk: `${siteConfig.urls.domain}/uk`,
    },
  },
  openGraph: {
    locale: 'uk_UA',
  },
};

export default function UkrainianHomePage() {
  const t = getTranslations('uk');

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale="uk" t={t} />
      <main className="flex-1">
        <HeroSection t={t} locale="uk" />
        <ServicesSection t={t} locale="uk" />
        <PricingSection t={t} locale="uk" />
        <QuoteForm locale="uk" t={t} />
        <FaqSection t={t} />
        <ReviewsSection t={t} locale="uk" />
        <ContactSection t={t} locale="uk" />
      </main>
      <SiteFooter locale="uk" t={t} />
    </div>
  );
}
