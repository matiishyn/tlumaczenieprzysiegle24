import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PricingSection } from '@/components/pricing-section';
import { QuoteForm } from '@/components/quote-form';
import { FaqSection } from '@/components/faq-section';
import { ReviewsSection } from '@/components/reviews-section';
import { ContactSection } from '@/components/contact-section';
import { OrganizationSchema, FAQSchema } from '@/components/structured-data';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';

export default function HomePage() {
  const t = getTranslations(defaultLocale);

  return (
    <>
      <OrganizationSchema />
      <FAQSchema faqs={t.faq.items} />
      <div className="flex min-h-screen flex-col">
        <SiteHeader locale={defaultLocale} t={t} />
        <main className="flex-1">
          <HeroSection t={t} locale={defaultLocale} />
          <ServicesSection t={t} locale={defaultLocale} />
          <PricingSection t={t} locale={defaultLocale} />
          <QuoteForm locale={defaultLocale} t={t} />
          <FaqSection t={t} />
          <ReviewsSection t={t} locale={defaultLocale} />
          <ContactSection t={t} locale={defaultLocale} />
        </main>
        <SiteFooter locale={defaultLocale} t={t} />
      </div>
    </>
  );
}
