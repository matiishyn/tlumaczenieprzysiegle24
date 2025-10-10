import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Locale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { Award, BookOpen, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

interface AboutPageProps {
  locale: Locale;
  t: any;
}

export function AboutPage({ locale, t }: AboutPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} t={t} />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                {t.about.title}
              </h1>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <Image
                      src="/4.png"
                      alt={locale === 'pl' ? 'Tłumacz przysięgły przy biurku' : locale === 'en' ? 'Sworn translator at desk' : 'Присяжний перекладач за столом'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                      {siteConfig.business.ownerName}
                    </h2>
                    <p className="text-lg text-slate-600 mb-4">
                      {locale === 'pl' ?
                        'Jestem certyfikowanym tłumaczem przysięgłym języka ukraińskiego i angielskiego z wieloletnim doświadczeniem w tłumaczeniach specjalistycznych.' :
                        locale === 'en' ?
                          'I am a certified sworn translator of Ukrainian and English with many years of experience in specialized translations.' :
                          'Я сертифікований присяжний перекладач української та англійської мов з багаторічним досвідом у спеціалізованих перекладах.'
                      }
                    </p>
                    <p className="text-slate-600">
                      {locale === 'pl' ?
                        'Moja praca opiera się na dokładności, terminowości i wysokim standardzie usług. Każde tłumaczenie wykonuję z najwyższą starannością, dbając o zgodność z oryginałem oraz poprawność merytoryczną i językową.' :
                        locale === 'en' ?
                          'My work is based on accuracy, timeliness and high service standards. I perform each translation with the utmost care, ensuring compliance with the original and substantive and linguistic correctness.' :
                          'Моя робота базується на точності, своєчасності та високих стандартах обслуговування. Кожен переклад я виконую з максимальною ретельністю, дбаючи про відповідність оригіналу та змістову і мовну правильність.'
                      }
                    </p>
                  </div>

                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Award className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">
                            {t.about.mojEntry}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {locale === 'pl' ? 'Numer wpisu: ' :
                              locale === 'en' ? 'Entry number: ' :
                                'Номер запису: '}
                            <span className="font-semibold">{siteConfig.business.mojNumber}</span>
                          </p>
                          <p className="text-slate-600 text-sm mt-1">
                            {locale === 'pl' ? 'Lista tłumaczy przysięgłych Ministerstwa Sprawiedliwości' :
                              locale === 'en' ? 'Ministry of Justice list of sworn translators' :
                                'Список присяжних перекладачів Міністерства юстиції'}
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
                      <h3 className="text-xl font-semibold text-slate-900">
                        {locale === 'pl' ? 'Specjalizacja' :
                          locale === 'en' ? 'Specialization' :
                            'Спеціалізація'}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-slate-600">
                      <li>• {locale === 'pl' ? 'Język ukraiński (polski ↔ ukraiński)' :
                        locale === 'en' ? 'Ukrainian language (Polish ↔ Ukrainian)' :
                          'Українська мова (польська ↔ українська)'}</li>
                      <li>• {locale === 'pl' ? 'Język angielski (polski ↔ angielski)' :
                        locale === 'en' ? 'English language (Polish ↔ English)' :
                          'Англійська мова (польська ↔ англійська)'}</li>
                      <li>• {locale === 'pl' ? 'Dokumenty urzędowe i prawne' :
                        locale === 'en' ? 'Official and legal documents' :
                          'Урядові та правові документи'}</li>
                      <li>• {locale === 'pl' ? 'Dokumenty edukacyjne' :
                        locale === 'en' ? 'Educational documents' :
                          'Освітні документи'}</li>
                      <li>• {locale === 'pl' ? 'Dokumenty medyczne' :
                        locale === 'en' ? 'Medical documents' :
                          'Медичні документи'}</li>
                      <li>• {locale === 'pl' ? 'Umowy i kontrakty' :
                        locale === 'en' ? 'Agreements and contracts' :
                          'Договори та контракти'}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-slate-900">
                        {locale === 'pl' ? 'Gwarancje i bezpieczeństwo' :
                          locale === 'en' ? 'Guarantees and security' :
                            'Гарантії та безпека'}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-slate-600">
                      <li>• {locale === 'pl' ? 'Pełna poufność dokumentów' :
                        locale === 'en' ? 'Full confidentiality of documents' :
                          'Повна конфіденційність документів'}</li>
                      <li>• {locale === 'pl' ? 'Zgodność z obowiązującym prawem' :
                        locale === 'en' ? 'Compliance with applicable law' :
                          'Відповідність чинному законодавству'}</li>
                      <li>• {locale === 'pl' ? 'Ubezpieczenie OC tłumacza' :
                        locale === 'en' ? 'Translator liability insurance' :
                          'Страхування цивільної відповідальності перекладача'}</li>
                      <li>• {locale === 'pl' ? 'Archiwizacja zgodna z przepisami' :
                        locale === 'en' ? 'Archiving in accordance with regulations' :
                          'Архівування згідно з правилами'}</li>
                      <li>• {locale === 'pl' ? 'Bezpieczne przesyłanie plików' :
                        locale === 'en' ? 'Secure file transmission' :
                          'Безпечна передача файлів'}</li>
                      <li>• {locale === 'pl' ? 'Ochrona danych osobowych (RODO)' :
                        locale === 'en' ? 'Personal data protection (GDPR)' :
                          'Захист персональних даних (GDPR)'}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="mb-12 bg-slate-50">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Clock className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-slate-900">
                      {locale === 'pl' ? 'Jak wygląda współpraca?' :
                        locale === 'en' ? 'How does the cooperation work?' :
                          'Як виглядає співпраця?'}
                    </h3>
                  </div>
                  <div className="space-y-4 text-slate-600">
                    <p>
                      <strong>1. {locale === 'pl' ? 'Kontakt i wycena:' :
                        locale === 'en' ? 'Contact and quote:' :
                          'Контакт і оцінка:'}</strong> {
                        locale === 'pl' ? 'Wyślij dokumenty przez formularz online. Otrzymasz szczegółową wycenę w ciągu kilku godzin.' :
                          locale === 'en' ? 'Send documents through the online form. You will receive a detailed quote within a few hours.' :
                            'Надішліть документи через онлайн-форму. Ви отримаєте детальну оцінку протягом кількох годин.'
                      }
                    </p>
                    <p>
                      <strong>2. {locale === 'pl' ? 'Realizacja:' :
                        locale === 'en' ? 'Execution:' :
                          'Виконання:'}</strong> {
                        locale === 'pl' ? 'Po akceptacji wyceny przystępuję do pracy. Standardowy czas realizacji to 2-3 dni robocze. Dostępna jest również opcja ekspresowa (24-48h).' :
                          locale === 'en' ? 'After accepting the quote, I start working. Standard delivery time is 2-3 business days. Express option (24-48h) is also available.' :
                            'Після прийняття оцінки я починаю працювати. Стандартний час виконання 2-3 робочі дні. Також доступна експрес-послуга (24-48 год).'
                      }
                    </p>
                    <p>
                      <strong>3. {locale === 'pl' ? 'Odbiór:' :
                        locale === 'en' ? 'Pickup:' :
                          'Отримання:'}</strong> {
                        locale === 'pl' ? 'Gotowe tłumaczenie możesz odebrać osobiście w centrum Krakowa lub zamówić przesyłkę kurierską na dowolny adres w Polsce.' :
                          locale === 'en' ? 'You can pick up the finished translation in person in the center of Kraków or order courier delivery to any address in Poland.' :
                            'Готовий переклад ви можете забрати особисто в центрі Кракова або замовити доставку кур\'єром на будь-яку адресу в Польщі.'
                      }
                    </p>
                    <p>
                      <strong>4. {locale === 'pl' ? 'Pomoc dodatkowa:' :
                        locale === 'en' ? 'Additional help:' :
                          'Додаткова допомога:'}</strong> {
                        locale === 'pl' ? 'W razie potrzeby pomagam w załatwieniu apostille, legalizacji konsularnej czy innych formalności.' :
                          locale === 'en' ? 'If necessary, I help with obtaining apostille, consular legalization or other formalities.' :
                            'При необхідності допомагаю з отриманням апостиля, консульською легалізацією чи іншими формальностями.'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {locale === 'pl' ? 'Masz pytania? Skontaktuj się' :
                    locale === 'en' ? 'Have questions? Contact me' :
                      'Маєте питання? Зв\'яжіться зі мною'}
                </h3>
                <p className="text-slate-600 mb-6">
                  {locale === 'pl' ? 'Chętnie odpowiem na wszystkie pytania dotyczące tłumaczeń przysięgłych' :
                    locale === 'en' ? 'I will be happy to answer any questions about sworn translations' :
                      'Я з радістю відповім на всі питання щодо присяжних перекладів'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href={`/${locale === 'pl' ? '' : locale}#wycena`}>
                      {locale === 'pl' ? 'Wyślij dokument do wyceny' :
                        locale === 'en' ? 'Send document for quote' :
                          'Надіслати документ для оцінки'}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={`/${locale === 'pl' ? '' : locale}${locale === 'pl' ? 'kontakt' : locale === 'en' ? 'contact' : 'kontakt'}`}>
                      {locale === 'pl' ? 'Dane kontaktowe' :
                        locale === 'en' ? 'Contact details' :
                          'Контактні дані'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} t={t} />
    </div>
  );
}
