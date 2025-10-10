import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Locale } from '@/config/locales';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
  locale: Locale;
  t: any;
  serviceType: 'ukrainian' | 'english';
}

export function ServiceDetailPage({ locale, t, serviceType }: ServiceDetailPageProps) {
  const isUkrainian = serviceType === 'ukrainian';

  const documents = isUkrainian ? [
    locale === 'pl' ? 'Akty stanu cywilnego (urodzenia, małżeństwa, zgonu)' :
      locale === 'en' ? 'Civil status certificates (birth, marriage, death)' :
        'Свідоцтва про громадянський стан (про народження, шлюб, смерть)',
    locale === 'pl' ? 'Świadectwa i dyplomy szkolne' :
      locale === 'en' ? 'School certificates and diplomas' :
        'Шкільні свідоцтва та дипломи',
    locale === 'pl' ? 'Suplementy do dyplomów' :
      locale === 'en' ? 'Diploma supplements' :
        'Додатки до дипломів',
    locale === 'pl' ? 'Dokumenty pracownicze (teczki pracy)' :
      locale === 'en' ? 'Employment documents (work books)' :
        'Документи з працевлаштування (трудові книжки)',
    locale === 'pl' ? 'Zaświadczenia o niekaralności' :
      locale === 'en' ? 'Criminal record certificates' :
        'Довідки про несудимість',
    locale === 'pl' ? 'Prawa jazdy' :
      locale === 'en' ? 'Driver\'s licenses' :
        'Водійські посвідчення',
    locale === 'pl' ? 'Dokumenty medyczne (karty szczepień)' :
      locale === 'en' ? 'Medical documents (vaccination cards)' :
        'Медичні документи (картки щеплень)',
    locale === 'pl' ? 'Dokumenty sądowe i notarialne' :
      locale === 'en' ? 'Court and notarial documents' :
        'Судові та нотаріальні документи',
    locale === 'pl' ? 'Umowy i pełnomocnictwa' :
      locale === 'en' ? 'Agreements and powers of attorney' :
        'Договори та довіреності',
  ] : [
    locale === 'pl' ? 'Akty stanu cywilnego (birth, marriage, death certificates)' :
      locale === 'en' ? 'Civil status certificates (birth, marriage, death)' :
        'Свідоцтва про громадянський стан (про народження, шлюб, смерть)',
    locale === 'pl' ? 'Świadectwa i dyplomy (school certificates, diplomas)' :
      locale === 'en' ? 'School certificates and diplomas' :
        'Шкільні свідоцтва та дипломи',
    locale === 'pl' ? 'Suplementy do dyplomów (diploma supplements)' :
      locale === 'en' ? 'Diploma supplements' :
        'Додатки до дипломів',
    locale === 'pl' ? 'Dokumenty firmowe i umowy' :
      locale === 'en' ? 'Business documents and contracts' :
        'Бізнес-документи та контракти',
    locale === 'pl' ? 'Zaświadczenia o niekaralności' :
      locale === 'en' ? 'Criminal record certificates' :
        'Довідки про несудимість',
    locale === 'pl' ? 'Prawa jazdy (driver\'s licenses)' :
      locale === 'en' ? 'Driver\'s licenses' :
        'Водійські посвідчення',
    locale === 'pl' ? 'Dokumenty medyczne' :
      locale === 'en' ? 'Medical documents' :
        'Медичні документи',
    locale === 'pl' ? 'Dokumenty sądowe' :
      locale === 'en' ? 'Court documents' :
        'Судові документи',
    locale === 'pl' ? 'Apostille i legalizacja' :
      locale === 'en' ? 'Apostille and legalization' :
        'Апостиль та легалізація',
  ];

  const benefits = [
    locale === 'pl' ? 'Certyfikowany tłumacz z wpisu MS (lista tłumaczy przysięgłych)' :
      locale === 'en' ? 'Certified translator from Ministry of Justice list' :
        'Сертифікований перекладач зі списку Міністерства юстиції',
    locale === 'pl' ? 'Realizacja 24-48h (dostępna usługa ekspresowa)' :
      locale === 'en' ? 'Delivery 24-48h (express service available)' :
        'Виконання 24-48 год (доступна експрес-послуга)',
    locale === 'pl' ? 'Odbiór osobisty w centrum Krakowa' :
      locale === 'en' ? 'Personal pickup in central Kraków' :
        'Особистий самовивіз у центрі Кракова',
    locale === 'pl' ? 'Możliwość wysyłki kurierem' :
      locale === 'en' ? 'Courier delivery option' :
        'Можливість доставки кур\'єром',
    locale === 'pl' ? 'Bezpłatna wycena online' :
      locale === 'en' ? 'Free online quote' :
        'Безкоштовна онлайн-оцінка',
    locale === 'pl' ? 'Przejrzyste ceny brutto' :
      locale === 'en' ? 'Transparent gross prices' :
        'Прозорі ціни брутто',
  ];

  const useCases = !isUkrainian ? [
    locale === 'pl' ? 'Wyjazd na studia za granicę' :
      locale === 'en' ? 'Going abroad to study' :
        'Навчання за кордоном',
    locale === 'pl' ? 'Emigracja do krajów anglojęzycznych' :
      locale === 'en' ? 'Emigration to English-speaking countries' :
        'Еміграція до англомовних країн',
    locale === 'pl' ? 'Zatrudnienie w firmach międzynarodowych' :
      locale === 'en' ? 'Employment in international companies' :
        'Працевлаштування в міжнародних компаніях',
    locale === 'pl' ? 'Procedury wizowe i imigracyjne' :
      locale === 'en' ? 'Visa and immigration procedures' :
        'Візові та іміграційні процедури',
    locale === 'pl' ? 'Sprawy sądowe i notarialne' :
      locale === 'en' ? 'Court and notarial matters' :
        'Судові та нотаріальні справи',
    locale === 'pl' ? 'Transakcje biznesowe' :
      locale === 'en' ? 'Business transactions' :
        'Бізнес-транзакції',
  ] : null;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} t={t} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <span className="text-4xl mb-4 block">{isUkrainian ? '🇺🇦' : '🇬🇧'}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  {isUkrainian ? (
                    locale === 'pl' ? 'Tłumaczenia przysięgłe na ukraiński' :
                      locale === 'en' ? 'Sworn Ukrainian translations' :
                        'Присяжні переклади українською'
                  ) : (
                    locale === 'pl' ? 'Tłumaczenia przysięgłe na angielski' :
                      locale === 'en' ? 'Sworn English translations' :
                        'Присяжні переклади англійською'
                  )}
                </h1>
                <p className="text-xl text-slate-600">
                  {isUkrainian ? (
                    locale === 'pl' ? 'Profesjonalne tłumaczenia z polskiego na ukraiński i z ukraińskiego na polski przez certyfikowanego tłumacza przysięgłego w Krakowie' :
                      locale === 'en' ? 'Professional translations from Polish to Ukrainian and from Ukrainian to Polish by a certified sworn translator in Kraków' :
                        'Професійні переклади з польської на українську і з української на польську сертифікованим присяжним перекладачем у Кракові'
                  ) : (
                    locale === 'pl' ? 'Certyfikowane tłumaczenia z polskiego na angielski i z angielskiego na polski przez doświadczonego tłumacza przysięgłego w Krakowie' :
                      locale === 'en' ? 'Certified translations from Polish to English and from English to Polish by an experienced sworn translator in Kraków' :
                        'Сертифіковані переклади з польської на англійську і з англійської на польську досвідченим присяжним перекладачем у Кракові'
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild>
                  <a href={`/${locale === 'pl' ? '' : locale}#wycena`}>
                    {locale === 'pl' ? 'Bezpłatna wycena' :
                      locale === 'en' ? 'Free quote' :
                        'Безкоштовна оцінка'} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`/${locale === 'pl' ? '' : locale}${locale === 'pl' ? 'cennik' : locale === 'en' ? 'pricing' : 'tsiny'}`}>
                    {locale === 'pl' ? 'Zobacz cennik' :
                      locale === 'en' ? 'View pricing' :
                        'Переглянути ціни'}
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold text-slate-900 mb-4">
                      {isUkrainian ? (
                        locale === 'pl' ? 'Najczęściej tłumaczone dokumenty' :
                          locale === 'en' ? 'Most commonly translated documents' :
                            'Найчастіше перекладувані документи'
                      ) : (
                        locale === 'pl' ? 'Tłumaczymy m.in.' :
                          locale === 'en' ? 'We translate among others' :
                            'Ми перекладаємо, зокрема'
                      )}
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
                      {isUkrainian ? (
                        locale === 'pl' ? 'Dlaczego warto wybrać nasze usługi?' :
                          locale === 'en' ? 'Why choose our services?' :
                            'Чому варто обрати наші послуги?'
                      ) : (
                        locale === 'pl' ? 'Kiedy potrzebujesz tłumaczenia?' :
                          locale === 'en' ? 'When do you need a translation?' :
                            'Коли потрібен переклад?'
                      )}
                    </h2>
                    <ul className="space-y-2">
                      {(isUkrainian ? benefits : useCases)?.map((item, index) => (
                        <li key={index} className="flex items-start text-slate-600">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {!isUkrainian && (
                <Card className="mb-12 bg-gradient-to-br from-blue-50 to-white border-blue-200">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                      {locale === 'pl' ? 'Apostille i legalizacja dokumentów' :
                        locale === 'en' ? 'Apostille and document legalization' :
                          'Апостиль та легалізація документів'}
                    </h2>
                    <p className="text-slate-600 mb-4">
                      {locale === 'pl' ? 'Dla dokumentów wykorzystywanych za granicą często wymagane jest apostille lub legalizacja. Pomagamy w załatwieniu tych formalności:' :
                        locale === 'en' ? 'For documents used abroad, apostille or legalization is often required. We help with these formalities:' :
                          'Для документів, що використовуються за кордоном, часто потрібен апостиль або легалізація. Ми допоможемо з цими формальностями:'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Apostille dla krajów sygnatariuszy Konwencji Haskiej (USA, UK, Australia, Kanada i wiele innych)' :
                            locale === 'en' ? 'Apostille for countries signatories to the Hague Convention (USA, UK, Australia, Canada and many others)' :
                              'Апостиль для країн-підписантів Гаазької конвенції (США, Великобританія, Австралія, Канада та багато інших)'}
                        </span>
                      </li>
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Legalizacja konsularna dla pozostałych krajów' :
                            locale === 'en' ? 'Consular legalization for other countries' :
                              'Консульська легалізація для інших країн'}
                        </span>
                      </li>
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Pełna obsługa - od tłumaczenia po dostarczenie gotowego dokumentu' :
                            locale === 'en' ? 'Full service - from translation to delivery of the finished document' :
                              'Повне обслуговування - від перекладу до доставки готового документа'}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              )}

              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  {isUkrainian ? (
                    locale === 'pl' ? 'Proces realizacji tłumaczenia' :
                      locale === 'en' ? 'Translation process' :
                        'Процес виконання перекладу'
                  ) : (
                    locale === 'pl' ? 'Standardy i jakość' :
                      locale === 'en' ? 'Standards and quality' :
                        'Стандарти та якість'
                  )}
                </h2>
                {isUkrainian ? (
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                        1
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {locale === 'pl' ? 'Wyślij dokumenty' :
                            locale === 'en' ? 'Send documents' :
                              'Надішліть документи'}
                        </h3>
                        <p className="text-slate-600">
                          {locale === 'pl' ? 'Prześlij skany lub zdjęcia dokumentów przez formularz online' :
                            locale === 'en' ? 'Submit scans or photos of documents through the online form' :
                              'Надішліть скани або фотографії документів через онлайн-форму'}
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                        2
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {locale === 'pl' ? 'Otrzymaj wycenę' :
                            locale === 'en' ? 'Receive quote' :
                              'Отримайте оцінку'}
                        </h3>
                        <p className="text-slate-600">
                          {locale === 'pl' ? 'W ciągu kilku godzin otrzymasz szczegółową wycenę na email' :
                            locale === 'en' ? 'Within a few hours you will receive a detailed quote by email' :
                              'Протягом кількох годин ви отримаєте детальну оцінку на електронну пошту'}
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                        3
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {locale === 'pl' ? 'Potwierdź zamówienie' :
                            locale === 'en' ? 'Confirm order' :
                              'Підтвердіть замовлення'}
                        </h3>
                        <p className="text-slate-600">
                          {locale === 'pl' ? 'Zaakceptuj wycenę i dokonaj płatności online lub przy odbiorze' :
                            locale === 'en' ? 'Accept the quote and make payment online or upon pickup' :
                              'Прийміть оцінку та здійсніть оплату онлайн або при отриманні'}
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mr-4">
                        4
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {locale === 'pl' ? 'Odbierz tłumaczenie' :
                            locale === 'en' ? 'Pick up translation' :
                              'Заберіть переклад'}
                        </h3>
                        <p className="text-slate-600">
                          {locale === 'pl' ? 'Gotowe tłumaczenie odbierz osobiście w Krakowie lub zamów kuriera' :
                            locale === 'en' ? 'Pick up the finished translation in person in Kraków or order courier delivery' :
                              'Заберіть готовий переклад особисто в Кракові або замовте доставку кур\'єром'}
                        </p>
                      </div>
                    </li>
                  </ol>
                ) : (
                  <>
                    <p className="text-slate-600 mb-4">
                      {locale === 'pl' ? 'Wszystkie tłumaczenia wykonywane są zgodnie z najwyższymi standardami tłumaczeń przysięgłych:' :
                        locale === 'en' ? 'All translations are performed in accordance with the highest standards of sworn translations:' :
                          'Усі переклади виконуються відповідно до найвищих стандартів присяжних перекладів:'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Wpis na listę tłumaczy przysięgłych Ministerstwa Sprawiedliwości' :
                            locale === 'en' ? 'Entry on the Ministry of Justice list of sworn translators' :
                              'Запис у списку присяжних перекладачів Міністерства юстиції'}
                        </span>
                      </li>
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Oryginalne pieczęcie i podpis tłumacza' :
                            locale === 'en' ? 'Original seals and translator signature' :
                              'Оригінальні печатки та підпис перекладача'}
                        </span>
                      </li>
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Uznawane przez urzędy w Polsce i za granicą' :
                            locale === 'en' ? 'Recognized by offices in Poland and abroad' :
                              'Визнається установами в Польщі та за кордоном'}
                        </span>
                      </li>
                      <li className="flex items-start text-slate-600">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          {locale === 'pl' ? 'Gwarancja terminowości i poufności' :
                            locale === 'en' ? 'Guarantee of timeliness and confidentiality' :
                              'Гарантія своєчасності та конфіденційності'}
                        </span>
                      </li>
                    </ul>
                  </>
                )}
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" asChild>
                  <a href={`/${locale === 'pl' ? '' : locale}#wycena`}>
                    {locale === 'pl' ? 'Zamów bezpłatną wycenę' :
                      locale === 'en' ? 'Order free quote' :
                        'Замовити безкоштовну оцінку'} <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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
