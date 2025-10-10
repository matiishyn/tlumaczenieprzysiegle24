import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ContactSection } from '@/components/contact-section';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z tłumaczem przysięgłym w Krakowie. Tel: +48 123 456 789, ul. Centralna 21. Odbiór osobisty lub kurier.',
};

export default function ContactPage() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1 pt-16">
        <ContactSection t={t} locale={defaultLocale} />
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
