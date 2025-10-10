import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tłumaczenia na ukraiński - Tłumacz przysięgły Kraków',
  description:
    'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i z ukraińskiego na polski. Certyfikowany tłumacz w Krakowie. Szybka realizacja, konkurencyjne ceny.',
};

export default function UkrainianTranslationsPage() {
  const t = getTranslations(defaultLocale);

  const documents = [
    'Akty stanu cywilnego (urodzenia, małżeństwa, zgonu)',
    'Świadectwa i dyplomy szkolne',
    'Suplementy do dyplomów',
    'Dokumenty pracownicze (teczki pracy)',
    'Zaświadczenia o niekaralności',
    'Prawa jazdy',
    'Dokumenty medyczne (karty szczepień)',
    'Dokumenty sądowe i notarialne',
    'Umowy i pełnomocnictwa',
  ];

  const benefits = [
    'Certyfikowany tłumacz z wpisu MS (lista tłumaczy przysięgłych)',
    'Realizacja 24-48h (dostępna usługa ekspresowa)',
    'Odbiór osobisty w centrum Krakowa',
    'Możliwość wysyłki kurierem',
    'Bezpłatna wycena online',
    'Przejrzyste ceny brutto',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="text-4xl mb-4 block">🇺🇦</span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Tłumaczenia przysięgłe na ukraiński
                </h1>
                <p className="text-xl text-slate-600">
                  Profesjonalne tłumaczenia z polskiego na ukraiński i z ukraińskiego na
                  polski przez certyfikowanego tłumacza przysięgłego w Krakowie
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild>
                  <a href="#wycena">
                    Bezpłatna wycena <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/cennik">Zobacz cennik</a>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                      Najczęściej tłumaczone dokumenty
                    </h2>
                    <ul className="space-y-2">
                      {documents.map((doc, index) => (
                        <li key={index} className="flex items-start text-slate-600">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                      Dlaczego warto wybrać nasze usługi?
                    </h2>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-slate-600">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Proces realizacji tłumaczenia
                </h2>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">Wyślij dokumenty</h3>
                      <p className="text-slate-600">
                        Prześlij skany lub zdjęcia dokumentów przez formularz online
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">Otrzymaj wycenę</h3>
                      <p className="text-slate-600">
                        W ciągu kilku godzin otrzymasz szczegółową wycenę na email
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">Potwierdź zamówienie</h3>
                      <p className="text-slate-600">
                        Zaakceptuj wycenę i dokonaj płatności online lub przy odbiorze
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">Odbierz tłumaczenie</h3>
                      <p className="text-slate-600">
                        Gotowe tłumaczenie odbierz osobiście w Krakowie lub zamów kuriera
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <a href="/#wycena">
                    Zamów bezpłatną wycenę <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
