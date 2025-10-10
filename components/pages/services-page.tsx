import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/config/locales';
import { ArrowRight, CheckCircle2, Languages } from 'lucide-react';
import Link from 'next/link';

interface ServicesPageProps {
  locale: Locale;
  t: any;
}

export function ServicesPage({ locale, t }: ServicesPageProps) {
  const services = [
    {
      title: locale === 'pl' ? 'Tłumaczenia na ukraiński' :
        locale === 'en' ? 'Ukrainian translations' :
          'Українські переклади',
      description: locale === 'pl' ? 'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i odwrotnie' :
        locale === 'en' ? 'Professional sworn translations from Polish to Ukrainian and vice versa' :
          'Професійні присяжні переклади з польської на українську і навпаки',
      href: locale === 'pl' ? '/uslugi/tlumaczenia-na-ukrainski' :
        locale === 'en' ? '/en/services/ukrainian-translations' :
          '/uk/posluhy/pereklad-na-ukrainsku',
      flag: '🇺🇦',
      features: [
        locale === 'pl' ? 'Dokumenty urzędowe i osobiste' :
          locale === 'en' ? 'Official and personal documents' :
            'Урядові та особисті документи',
        locale === 'pl' ? 'Świadectwa i dyplomy' :
          locale === 'en' ? 'Certificates and diplomas' :
            'Свідоцтва та дипломи',
        locale === 'pl' ? 'Dokumenty pracownicze' :
          locale === 'en' ? 'Employment documents' :
            'Документи з працевлаштування',
        locale === 'pl' ? 'Umowy i kontrakty' :
          locale === 'en' ? 'Agreements and contracts' :
            'Договори та контракти',
      ],
    },
    {
      title: locale === 'pl' ? 'Tłumaczenia na angielski' :
        locale === 'en' ? 'English translations' :
          'Англійські переклади',
      description: locale === 'pl' ? 'Certyfikowane tłumaczenia przysięgłe z polskiego na angielski i odwrotnie' :
        locale === 'en' ? 'Certified sworn translations from Polish to English and vice versa' :
          'Сертифіковані присяжні переклади з польської на англійську і навпаки',
      href: locale === 'pl' ? '/uslugi/tlumaczenia-na-angielski' :
        locale === 'en' ? '/en/services/english-translations' :
          '/uk/posluhy/pereklad-na-anhliysku',
      flag: '🇬🇧',
      features: [
        locale === 'pl' ? 'Dokumenty na studia za granicą' :
          locale === 'en' ? 'Documents for studies abroad' :
            'Документи для навчання за кордоном',
        locale === 'pl' ? 'Dokumenty imigracyjne i wizowe' :
          locale === 'en' ? 'Immigration and visa documents' :
            'Іміграційні та візові документи',
        locale === 'pl' ? 'Dokumenty biznesowe' :
          locale === 'en' ? 'Business documents' :
            'Бізнес-документи',
        locale === 'pl' ? 'Apostille i legalizacja' :
          locale === 'en' ? 'Apostille and legalization' :
            'Апостиль та легалізація',
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} t={t} />
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
                {locale === 'pl' ? 'Usługi tłumaczeniowe' :
                  locale === 'en' ? 'Translation services' :
                    'Послуги з перекладу'}
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {locale === 'pl' ? 'Certyfikowane tłumaczenia przysięgłe wykonywane przez doświadczonego tłumacza wpisanego na listę Ministerstwa Sprawiedliwości' :
                  locale === 'en' ? 'Certified sworn translations performed by an experienced translator registered on the Ministry of Justice list' :
                    'Сертифіковані присяжні переклади, виконані досвідченим перекладачем, зареєстрованим у списку Міністерства юстиції'}
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
                      <Link href={service.href} legacyBehavior>
                        {locale === 'pl' ? 'Dowiedz się więcej' :
                          locale === 'en' ? 'Learn more' :
                            'Дізнатися більше'}
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
                  <CardTitle className="text-2xl">
                    {locale === 'pl' ? 'Dlaczego tłumaczenia przysięgłe?' :
                      locale === 'en' ? 'Why sworn translations?' :
                        'Навіщо потрібні присяжні переклади?'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600">
                  <p>
                    {locale === 'pl' ? 'Tłumaczenia przysięgłe są wymagane przez polskie i zagraniczne urzędy, sądy, uczelnie oraz inne instytucje do oficjalnego potwierdzenia treści dokumentów w innym języku.' :
                      locale === 'en' ? 'Sworn translations are required by Polish and foreign offices, courts, universities and other institutions to officially confirm the content of documents in another language.' :
                        'Присяжні переклади потрібні польським і закордонним установам, судам, університетам та іншим організаціям для офіційного підтвердження змісту документів іншою мовою.'}
                  </p>
                  <p>
                    {locale === 'pl' ? 'Każde tłumaczenie przysięgłe jest opatrzone podpisem i pieczęcią tłumacza przysięgłego, co nadaje mu moc prawną dokumentu urzędowego.' :
                      locale === 'en' ? 'Each sworn translation is signed and stamped by a sworn translator, which gives it the legal force of an official document.' :
                        'Кожен присяжний переклад підписується і завіряється печаткою присяжного перекладача, що надає йому юридичну силу офіційного документа.'}
                  </p>
                  <p className="font-medium">
                    {locale === 'pl' ? 'Jako certyfikowany tłumacz przysięgły (wpis na liście MS) gwarantuję:' :
                      locale === 'en' ? 'As a certified sworn translator (entry on the Ministry of Justice list) I guarantee:' :
                        'Як сертифікований присяжний перекладач (запис у списку Міністерства юстиції) я гарантую:'}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        {locale === 'pl' ? 'Zgodność z obowiązującymi przepisami prawa' :
                          locale === 'en' ? 'Compliance with applicable law' :
                            'Відповідність чинному законодавству'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        {locale === 'pl' ? 'Pełną poufność przetwarzanych dokumentów' :
                          locale === 'en' ? 'Full confidentiality of processed documents' :
                            'Повну конфіденційність оброблюваних документів'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        {locale === 'pl' ? 'Wysoką jakość merytoryczną i językową' :
                          locale === 'en' ? 'High substantive and linguistic quality' :
                            'Високу змістову та мовну якість'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        {locale === 'pl' ? 'Terminowość realizacji zamówień' :
                          locale === 'en' ? 'Timely completion of orders' :
                            'Своєчасне виконання замовлень'}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                {locale === 'pl' ? 'Potrzebujesz wyceny?' :
                  locale === 'en' ? 'Need a quote?' :
                    'Потрібна оцінка?'}
              </h2>
              <p className="text-slate-600 mb-6">
                {locale === 'pl' ? 'Wyślij dokumenty przez formularz online i otrzymaj bezpłatną wycenę w ciągu kilku godzin' :
                  locale === 'en' ? 'Send documents through the online form and receive a free quote within a few hours' :
                    'Надішліть документи через онлайн-форму і отримайте безкоштовну оцінку протягом кількох годин'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href={`/${locale === 'pl' ? '' : locale}#wycena`}>
                    {locale === 'pl' ? 'Wyślij dokument' :
                      locale === 'en' ? 'Send document' :
                        'Надіслати документ'} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href={`/${locale === 'pl' ? '' : locale}${locale === 'pl' ? 'cennik' : locale === 'en' ? 'pricing' : 'tsiny'}`}
                    legacyBehavior>
                    {locale === 'pl' ? 'Zobacz cennik' :
                      locale === 'en' ? 'View pricing' :
                        'Переглянути ціни'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} t={t} />
    </div>
  );
}
