import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
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
    pl: 'Tłumaczenia Przysięgłe Angielskiego | Warszawa',
    en: 'Sworn English Translation | Warsaw',
    uk: 'Присяжні Переклади Англійською | Варшава',
  };

  return {
    title: title[locale],
  };
}

export default async function EnglishTranslationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const content = {
    pl: {
      title: 'Tłumaczenia Przysięgłe Języka Angielskiego',
      subtitle: 'Profesjonalne tłumaczenia dokumentów angielskich na polski i odwrotnie',
      intro: 'Specjalizuję się w tłumaczeniach przysięgłych z języka angielskiego na polski i z polskiego na angielski. Posiadam uprawnienia Ministerstwa Sprawiedliwości i wieloletnie doświadczenie.',
      whyChoose: 'Dlaczego warto wybrać moje usługi',
      reasons: [
        'Uprawnienia tłumacza przysięgłego języka angielskiego',
        'Doświadczenie w tłumaczeniu dokumentów urzędowych',
        'Znajomość terminologii prawniczej i biznesowej',
        'Szybka realizacja - standardowo 2-3 dni',
        'Możliwość realizacji ekspresowej (24h)',
        'Akceptacja tłumaczeń przez urzędy i instytucje',
      ],
      process: 'Jak wygląda proces',
      steps: [
        'Wyślij dokumenty przez email lub WhatsApp',
        'Otrzymaj wycenę w ciągu kilku godzin',
        'Zaakceptuj wycenę i dokonaj płatności',
        'Odbierz gotowe tłumaczenie',
      ],
    },
    en: {
      title: 'Sworn English Translation Services',
      subtitle: 'Professional translation of English documents to Polish and vice versa',
      intro: 'I specialize in sworn translations from English to Polish and from Polish to English. I hold certifications from the Ministry of Justice and have years of experience.',
      whyChoose: 'Why choose my services',
      reasons: [
        'Certified sworn translator of English',
        'Experience in translating official documents',
        'Knowledge of legal and business terminology',
        'Fast delivery - standard 2-3 days',
        'Express service available (24h)',
        'Translations accepted by authorities and institutions',
      ],
      process: 'How it works',
      steps: [
        'Send documents via email or WhatsApp',
        'Receive a quote within a few hours',
        'Accept the quote and make payment',
        'Pick up your completed translation',
      ],
    },
    uk: {
      title: 'Присяжні Переклади з Англійської Мови',
      subtitle: 'Професійний переклад англійських документів на польську та навпаки',
      intro: 'Спеціалізуюся на присяжних перекладах з англійської на польську та з польської на англійську мови. Маю дозвіл Міністерства юстиції та багаторічний досвід.',
      whyChoose: 'Чому варто обрати мої послуги',
      reasons: [
        'Сертифікований присяжний перекладач англійської',
        'Досвід перекладу офіційних документів',
        'Знання юридичної та бізнес-термінології',
        'Швидке виконання - стандартно 2-3 дні',
        'Можливість експрес-виконання (24 год)',
        'Переклади приймаються органами влади та установами',
      ],
      process: 'Як працює процес',
      steps: [
        'Надішліть документи через email або WhatsApp',
        'Отримайте оцінку протягом кількох годин',
        'Прийміть оцінку та здійсніть оплату',
        'Заберіть готовий переклад',
      ],
    },
  };

  const pageContent = content[locale];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                🇬🇧 {dict.nav.englishTranslation}
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
                  <Button size="xl">{dict.hero.cta}</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{pageContent.process}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pageContent.steps.map((step, index) => (
                  <Card key={index} className="relative">
                    <CardHeader>
                      <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-sm pt-2">{step}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

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

