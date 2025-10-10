import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PricingSection } from '@/components/pricing-section';
import { QuoteForm } from '@/components/quote-form';
import { FaqSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { getTranslations } from '@/lib/i18n';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Sworn Translation Kraków',
  description:
    'Professional sworn translations in Kraków. Certified translator from Ministry of Justice list. Fast delivery 24-48h. Personal pickup or courier.',
  alternates: {
    canonical: `${siteConfig.urls.domain}/en`,
    languages: {
      pl: siteConfig.urls.domain,
      en: `${siteConfig.urls.domain}/en`,
      uk: `${siteConfig.urls.domain}/uk`,
    },
  },
  openGraph: {
    locale: 'en_US',
  },
};

export default function EnglishHomePage() {
  const t = getTranslations('en');

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale="en" t={t} />
      <main className="flex-1">
        <HeroSection t={t} locale="en" />
        <ServicesSection t={t} locale="en" />
        <PricingSection t={t} locale="en" />
        <QuoteForm locale="en" t={t} />
        <FaqSection t={t} />
        <ContactSection t={t} locale="en" />
      </main>
      <SiteFooter locale="en" t={t} />
    </div>
  );
}
