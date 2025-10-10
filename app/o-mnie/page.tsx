import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { Award, BookOpen, Clock, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O tłumaczu przysięgłym',
  description:
    'Certyfikowany tłumacz przysięgły w Krakowie. Wpis na liście Ministerstwa Sprawiedliwości. Specjalizacja: język ukraiński i angielski.',
};

export default function AboutPage() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                O tłumaczu
              </h1>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-slate-500 text-sm">Zdjęcie tłumacza</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                      {siteConfig.business.ownerName}
                    </h2>
                    <p className="text-lg text-slate-600 mb-4">
                      Jestem certyfikowanym tłumaczem przysięgłym języka ukraińskiego i
                      angielskiego z wieloletnim doświadczeniem w tłumaczeniach
                      specjalistycznych.
                    </p>
                    <p className="text-slate-600">
                      Moja praca opiera się na dokładności, terminowości i wysokim
                      standardzie usług. Każde tłumaczenie wykonuję z najwyższą starannością,
                      dbając o zgodność z oryginałem oraz poprawność merytoryczną i
                      językową.
                    </p>
                  </div>

                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Award className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">
                            Wpis na listę tłumaczy przysięgłych MS
                          </h3>
                          <p className="text-slate-600 text-sm">
                            Numer wpisu: <span className="font-semibold">{siteConfig.business.mojNumber}</span>
                          </p>
                          <p className="text-slate-600 text-sm mt-1">
                            Lista tłumaczy przysięgłych Ministerstwa Sprawiedliwości
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <BookOpen className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-slate-900">Specjalizacja</h3>
                    </div>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Język ukraiński (polski ↔ ukraiński)</li>
                      <li>• Język angielski (polski ↔ angielski)</li>
                      <li>• Dokumenty urzędowe i prawne</li>
                      <li>• Dokumenty edukacyjne</li>
                      <li>• Dokumenty medyczne</li>
                      <li>• Umowy i kontrakty</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-slate-900">
                        Gwarancje i bezpieczeństwo
                      </h3>
                    </div>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Pełna poufność dokumentów</li>
                      <li>• Zgodność z obowiązującym prawem</li>
                      <li>• Ubezpieczenie OC tłumacza</li>
                      <li>• Archiwizacja zgodna z przepisami</li>
                      <li>• Bezpieczne przesyłanie plików</li>
                      <li>• Ochrona danych osobowych (RODO)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-12 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Clock className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      Jak wygląda współpraca?
                    </h3>
                  </div>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      <strong>1. Kontakt i wycena:</strong> Wyślij dokumenty przez formularz
                      online. Otrzymasz szczegółową wycenę w ciągu kilku godzin.
                    </p>
                    <p>
                      <strong>2. Realizacja:</strong> Po akceptacji wyceny przystępuję do
                      pracy. Standardowy czas realizacji to 2-3 dni robocze. Dostępna jest
                      również opcja ekspresowa (24-48h).
                    </p>
                    <p>
                      <strong>3. Odbiór:</strong> Gotowe tłumaczenie możesz odebrać osobiście
                      w centrum Krakowa lub zamówić przesyłkę kurierską na dowolny adres w
                      Polsce.
                    </p>
                    <p>
                      <strong>4. Pomoc dodatkowa:</strong> W razie potrzeby pomagam w
                      załatwieniu apostille, legalizacji konsularnej czy innych formalności.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Masz pytania? Skontaktuj się
                </h3>
                <p className="text-slate-600 mb-6">
                  Chętnie odpowiem na wszystkie pytania dotyczące tłumaczeń przysięgłych
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/#wycena">Wyślij dokument do wyceny</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/kontakt">Dane kontaktowe</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
