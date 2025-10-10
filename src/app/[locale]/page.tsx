import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { WhatsAppWidget } from '@/components/layout/WhatsAppWidget';
import { About } from '@/components/sections/About';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { CTA } from '@/components/sections/CTA';
import { ExpressService } from '@/components/sections/ExpressService';
import { FAQ } from '@/components/sections/FAQ';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Languages } from '@/components/sections/Languages';
import { QuoteCalculator } from '@/components/sections/QuoteCalculator';
import { RecentProjects } from '@/components/sections/RecentProjects';
import { Services } from '@/components/sections/Services';
import { Social } from '@/components/sections/Social';
import { Testimonials } from '@/components/sections/Testimonials';
import type { Locale } from '@/i18n';
import { getDictionary } from './dictionaries';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} locale={locale} />
        <Services dict={dict} />
        <Languages dict={dict} />
        <QuoteCalculator dict={dict} locale={locale} />
        <HowItWorks dict={dict} />
        <ExpressService dict={dict} locale={locale} />
        <About dict={dict} />
        <RecentProjects dict={dict} />
        <Testimonials dict={dict} />
        <FAQ dict={dict} />
        <Blog dict={dict} locale={locale} />
        <Social dict={dict} />
        <Contact dict={dict} />
        <CTA dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppWidget locale={locale} />
    </>
  );
}

