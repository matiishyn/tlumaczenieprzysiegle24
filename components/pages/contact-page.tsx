import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Locale } from '@/config/locales';

interface ContactPageProps {
  locale: Locale;
  t: any;
}

export function ContactPage({ locale, t }: ContactPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} t={t} />
      <main className="flex-1 pt-16">
        <ContactSection t={t} locale={locale} />
      </main>
      <SiteFooter locale={locale} t={t} />
    </div>
  );
}
