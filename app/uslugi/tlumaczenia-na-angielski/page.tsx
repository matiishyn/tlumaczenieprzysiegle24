import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tłumaczenia na angielski - Tłumacz przysięgły Kraków',
  description:
    'Profesjonalne tłumaczenia przysięgłe z polskiego na angielski i z angielskiego na polski. Certyfikowany tłumacz w Krakowie. Realizacja 24-48h.',
};

export default function EnglishTranslationsPage() {
  const t = getTranslations(defaultLocale);

  const documents = [
    'Akty stanu cywilnego (birth, marriage, death certificates)',
    'Świadectwa i dyplomy (school certificates, diplomas)',
    'Suplementy do dyplomów (diploma supplements)',
    'Dokumenty firmowe i umowy',
    'Zaświadczenia o niekaralności',
    'Prawa jazdy (driver\'s licenses)',
    'Dokumenty medyczne',
    'Dokumenty sądowe',
    'Apostille i legalizacja',
  ];

  const useCases = [
    'Wyjazd na studia za granicę',
    'Emigracja do krajów anglojęzycznych',
    'Zatrudnienie w firmach międzynarodowych',
    'Procedury wizowe i imigracyjne',
    'Sprawy sądowe i notarialne',
    'Transakcje biznesowe',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="text-4xl mb-4 block">🇬🇧</span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Tłumaczenia przysięgłe na angielski
                </h1>
                <p className="text-xl text-slate-600">
                  Certyfikowane tłumaczenia z polskiego na angielski i z angielskiego na
                  polski przez doświadczonego tłumacza przysięgłego w Krakowie
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
                      Tłumaczymy m.in.
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
                      Kiedy potrzebujesz tłumaczenia?
                    </h2>
                    <ul className="space-y-2">
                      {useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start text-slate-600">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-white border-blue-200">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Apostille i legalizacja dokumentów
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Dla dokumentów wykorzystywanych za granicą często wymagane jest
                    apostille lub legalizacja. Pomagamy w załatwieniu tych formalności:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        Apostille dla krajów sygnatariuszy Konwencji Haskiej (USA, UK,
                        Australia, Kanada i wiele innych)
                      </span>
                    </li>
                    <li className="flex items-start text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Legalizacja konsularna dla pozostałych krajów</span>
                    </li>
                    <li className="flex items-start text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pełna obsługa - od tłumaczenia po dostarczenie gotowego dokumentu</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Standardy i jakość
                </h2>
                <p className="text-slate-600 mb-4">
                  Wszystkie tłumaczenia wykonywane są zgodnie z najwyższymi standardami
                  tłumaczeń przysięgłych:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      Wpis na listę tłumaczy przysięgłych Ministerstwa Sprawiedliwości
                    </span>
                  </li>
                  <li className="flex items-start text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Oryginalne pieczęcie i podpis tłumacza</span>
                  </li>
                  <li className="flex items-start text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Uznawane przez urzędy w Polsce i za granicą</span>
                  </li>
                  <li className="flex items-start text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gwarancja terminowości i poufności</span>
                  </li>
                </ul>
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
