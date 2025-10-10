import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { Languages, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usługi tłumaczeniowe',
  description:
    'Profesjonalne tłumaczenia przysięgłe na język ukraiński i angielski. Certyfikowany tłumacz w Krakowie. Dokumenty urzędowe, edukacyjne, prawne.',
};

export default function ServicesPage() {
  const t = getTranslations(defaultLocale);

  const services = [
    {
      title: 'Tłumaczenia na ukraiński',
      description: 'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i odwrotnie',
      href: '/uslugi/tlumaczenia-na-ukrainski',
      flag: '🇺🇦',
      features: [
        'Dokumenty urzędowe i osobiste',
        'Świadectwa i dyplomy',
        'Dokumenty pracownicze',
        'Umowy i kontrakty',
      ],
    },
    {
      title: 'Tłumaczenia na angielski',
      description: 'Certyfikowane tłumaczenia przysięgłe z polskiego na angielski i odwrotnie',
      href: '/uslugi/tlumaczenia-na-angielski',
      flag: '🇬🇧',
      features: [
        'Dokumenty na studia za granicą',
        'Dokumenty imigracyjne i wizowe',
        'Dokumenty biznesowe',
        'Apostille i legalizacja',
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Languages className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Usługi tłumaczeniowe
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Certyfikowane tłumaczenia przysięgłe wykonywane przez doświadczonego
                tłumacza wpisanego na listę Ministerstwa Sprawiedliwości
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {services.map((service) => (
                <Card key={service.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-5xl mb-4">{service.flag}</div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-slate-600">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.href}>
                        Dowiedz się więcej
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-slate-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Dlaczego tłumaczenia przysięgłe?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600">
                  <p>
                    Tłumaczenia przysięgłe są wymagane przez polskie i zagraniczne urzędy,
                    sądy, uczelnie oraz inne instytucje do oficjalnego potwierdzenia treści
                    dokumentów w innym języku.
                  </p>
                  <p>
                    Każde tłumaczenie przysięgłe jest opatrzone podpisem i pieczęcią
                    tłumacza przysięgłego, co nadaje mu moc prawną dokumentu urzędowego.
                  </p>
                  <p className="font-medium">
                    Jako certyfikowany tłumacz przysięgły (wpis na liście MS) gwarantuję:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zgodność z obowiązującymi przepisami prawa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pełną poufność przetwarzanych dokumentów</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Wysoką jakość merytoryczną i językową</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Terminowość realizacji zamówień</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Potrzebujesz wyceny?
              </h2>
              <p className="text-slate-600 mb-6">
                Wyślij dokumenty przez formularz online i otrzymaj bezpłatną wycenę w
                ciągu kilku godzin
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/#wycena">
                    Wyślij dokument <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/cennik">Zobacz cennik</Link>
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
