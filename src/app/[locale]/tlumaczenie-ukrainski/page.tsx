import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Locale } from '@/i18n';
import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = {
    pl: 'Tłumaczenia Przysięgłe Ukraińskiego | Warszawa',
    en: 'Sworn Ukrainian Translation | Warsaw',
    uk: 'Присяжні Переклади Українською | Варшава',
  };

  return {
    title: title[locale],
  };
}

export default async function UkrainianTranslationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const content = {
    pl: {
      title: 'Tłumaczenia Przysięgłe Języka Ukraińskiego',
      subtitle: 'Profesjonalne tłumaczenia dokumentów ukraińskich na polski i odwrotnie',
      intro: 'Specjalizuję się w tłumaczeniach przysięgłych z języka ukraińskiego na polski i z polskiego na ukraiński. Posiadam uprawnienia Ministerstwa Sprawiedliwości i wieloletnie doświadczenie w pracy z dokumentami ukraińskimi.',
      whyChoose: 'Dlaczego warto wybrać moje usługi',
      reasons: [
        'Doświadczenie w tłumaczeniu dokumentów ukraińskich',
        'Znajomość specyfiki dokumentacji ukraińskiej',
        'Szybka realizacja - standardowo 2-3 dni',
        'Możliwość realizacji ekspresowej (24h)',
        'Konkurencyjne ceny',
        'Kontakt w języku ukraińskim',
      ],
      process: 'Jak wygląda proces',
      steps: [
        {
          title: 'Wyślij dokumenty',
          description: 'Prześlij skany lub zdjęcia dokumentów przez email, WhatsApp lub Telegram',
        },
        {
          title: 'Otrzymaj wycenę',
          description: 'W ciągu kilku godzin otrzymasz szczegółową wycenę',
        },
        {
          title: 'Tłumaczenie',
          description: 'Przystępuję do tłumaczenia dokumentów',
        },
        {
          title: 'Odbiór',
          description: 'Odbierz gotowe tłumaczenie osobiście, pocztą lub kurierem',
        },
      ],
    },
    en: {
      title: 'Sworn Ukrainian Translation Services',
      subtitle: 'Professional translation of Ukrainian documents to Polish and vice versa',
      intro: 'I specialize in sworn translations from Ukrainian to Polish and from Polish to Ukrainian. I hold certifications from the Ministry of Justice and have years of experience working with Ukrainian documents.',
      whyChoose: 'Why choose my services',
      reasons: [
        'Experience in translating Ukrainian documents',
        'Knowledge of Ukrainian documentation specifics',
        'Fast delivery - standard 2-3 days',
        'Express service available (24h)',
        'Competitive prices',
        'Communication in Ukrainian',
      ],
      process: 'How it works',
      steps: [
        {
          title: 'Send documents',
          description: 'Send scans or photos via email, WhatsApp or Telegram',
        },
        {
          title: 'Get a quote',
          description: 'Receive a detailed quote within a few hours',
        },
        {
          title: 'Translation',
          description: 'I proceed with translating your documents',
        },
        {
          title: 'Delivery',
          description: 'Pick up in person, by mail or courier',
        },
      ],
    },
    uk: {
      title: 'Присяжні Переклади з Української Мови',
      subtitle: 'Професійний переклад українських документів на польську та навпаки',
      intro: 'Спеціалізуюся на присяжних перекладах з української на польську та з польської на українську мови. Маю дозвіл Міністерства юстиції та багаторічний досвід роботи з українськими документами.',
      whyChoose: 'Чому варто обрати мої послуги',
      reasons: [
        'Досвід перекладу українських документів',
        'Знання специфіки української документації',
        'Швидке виконання - стандартно 2-3 дні',
        'Можливість експрес-виконання (24 год)',
        'Конкурентні ціни',
        'Спілкування українською мовою',
      ],
      process: 'Як працює процес',
      steps: [
        {
          title: 'Надішліть документи',
          description: 'Надішліть скани або фото через email, WhatsApp або Telegram',
        },
        {
          title: 'Отримайте оцінку',
          description: 'Протягом кількох годин отримаєте детальну оцінку',
        },
        {
          title: 'Переклад',
          description: 'Починаю переклад ваших документів',
        },
        {
          title: 'Отримання',
          description: 'Заберіть готовий переклад особисто, поштою або кур\'єром',
        },
      ],
    },
  };

  const pageContent = content[locale];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                🇺🇦 {dict.nav.ukrainianTranslation}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {pageContent.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {pageContent.subtitle}
              </p>
              <p className="text-lg max-w-3xl mx-auto">
                {pageContent.intro}
              </p>
              <div className="pt-6">
                <a href={`/${locale}#contact`}>
                  <Button size="xl">
                    {dict.hero.cta}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{pageContent.whyChoose}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {pageContent.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-medium">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">{pageContent.process}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pageContent.steps.map((step, index) => (
                  <Card key={index} className="relative">
                    <CardHeader>
                      <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg pt-2">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services from main page */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{dict.services.title}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {dict.services.items.slice(0, 8).map((service, index) => (
                  <div key={index} className="flex items-start justify-between gap-4 p-4 rounded-lg border bg-card">
                    <div>
                      <p className="font-semibold mb-1">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">
                      {service.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{dict.cta.title}</h2>
              <p className="text-xl text-muted-foreground">{dict.cta.subtitle}</p>
              <a href={`/${locale}#contact`}>
                <Button size="xl">{dict.cta.button}</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}

