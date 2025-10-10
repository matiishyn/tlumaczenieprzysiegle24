import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import type { Locale } from '@/i18n';
import { BUSINESS_INFO } from '@/lib/constants';
import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = {
    pl: 'Regulamin | Tłumaczenia24',
    en: 'Terms of Service | Tłumaczenia24',
    uk: 'Умови Обслуговування | Tłumaczenia24',
  };

  return {
    title: title[locale],
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const content = {
    pl: {
      title: 'Regulamin Świadczenia Usług',
      sections: [
        {
          title: '1. Postanowienia ogólne',
          content: `Niniejszy regulamin określa zasady świadczenia usług tłumaczenia przysięgłego przez ${BUSINESS_INFO.name}. Akceptując ofertę tłumaczenia, Klient akceptuje niniejszy regulamin.`,
        },
        {
          title: '2. Zakres usług',
          content: 'Tłumacz świadczy usługi tłumaczenia przysięgłego dokumentów z języka polskiego na angielski/ukraiński i odwrotnie. Tłumaczenia są opatrzone pieczęcią i podpisem tłumacza przysięgłego.',
        },
        {
          title: '3. Złożenie zamówienia',
          content: 'Zamówienie można złożyć poprzez: email, telefon, WhatsApp, Telegram. Klient otrzymuje wycenę w ciągu 24 godzin. Zamówienie zostaje potwierdzone po akceptacji wyceny.',
        },
        {
          title: '4. Termin realizacji',
          content: 'Standardowy termin realizacji wynosi 2-3 dni robocze. Możliwa jest realizacja ekspresowa (24h) za dodatkową opłatą. Termin liczony jest od momentu otrzymania dokumentów i potwierdzenia zamówienia.',
        },
        {
          title: '5. Płatność',
          content: 'Płatność następuje przed wydaniem tłumaczenia lub przy odbiorze osobistym. Akceptujemy: przelewy bankowe, BLIK, gotówkę.',
        },
        {
          title: '6. Prawo odstąpienia',
          content: 'Zgodnie z ustawą o prawach konsumenta, Klient ma prawo odstąpić od umowy w ciągu 14 dni. Prawo to wygasa, jeśli tłumaczenie zostało już wykonane za wyraźną zgodą Klienta.',
        },
        {
          title: '7. Reklamacje',
          content: `Reklamacje należy zgłaszać na adres email: ${BUSINESS_INFO.email}. Rozpatrzenie reklamacji następuje w ciągu 14 dni.`,
        },
      ],
    },
    en: {
      title: 'Terms of Service',
      sections: [
        {
          title: '1. General provisions',
          content: `These terms define the rules for providing sworn translation services by ${BUSINESS_INFO.name}. By accepting the translation offer, the Client accepts these terms.`,
        },
        {
          title: '2. Scope of services',
          content: 'The Translator provides sworn translation services for documents from Polish to English/Ukrainian and vice versa. Translations are stamped and signed by a sworn translator.',
        },
        {
          title: '3. Placing an order',
          content: 'Orders can be placed via: email, phone, WhatsApp, Telegram. The Client receives a quote within 24 hours. The order is confirmed after quote acceptance.',
        },
        {
          title: '4. Delivery time',
          content: 'Standard delivery time is 2-3 business days. Express service (24h) is available for an additional fee. The deadline is counted from receipt of documents and order confirmation.',
        },
        {
          title: '5. Payment',
          content: 'Payment is made before delivery or upon personal collection. We accept: bank transfers, BLIK, cash.',
        },
        {
          title: '6. Right of withdrawal',
          content: 'According to consumer rights law, the Client has the right to withdraw within 14 days. This right expires if the translation has been completed with the Client\'s express consent.',
        },
        {
          title: '7. Complaints',
          content: `Complaints should be submitted to: ${BUSINESS_INFO.email}. Complaints are processed within 14 days.`,
        },
      ],
    },
    uk: {
      title: 'Умови Надання Послуг',
      sections: [
        {
          title: '1. Загальні положення',
          content: `Ці умови визначають правила надання послуг присяжного перекладу від ${BUSINESS_INFO.name}. Приймаючи пропозицію перекладу, Клієнт приймає ці умови.`,
        },
        {
          title: '2. Обсяг послуг',
          content: 'Перекладач надає послуги присяжного перекладу документів з польської на англійську/українську та навпаки. Переклади завіряються печаткою та підписом присяжного перекладача.',
        },
        {
          title: '3. Розміщення замовлення',
          content: 'Замовлення можна зробити через: email, телефон, WhatsApp, Telegram. Клієнт отримує оцінку протягом 24 годин. Замовлення підтверджується після прийняття оцінки.',
        },
        {
          title: '4. Термін виконання',
          content: 'Стандартний термін виконання становить 2-3 робочі дні. Можливе експрес-виконання (24 год) за додаткову плату. Термін відраховується від моменту отримання документів і підтвердження замовлення.',
        },
        {
          title: '5. Оплата',
          content: 'Оплата здійснюється перед видачею перекладу або при особистому отриманні. Приймаємо: банківські перекази, BLIK, готівку.',
        },
        {
          title: '6. Право відмови',
          content: 'Згідно із законом про права споживачів, Клієнт має право відмовитися від договору протягом 14 днів. Це право втрачається, якщо переклад вже виконано за явною згодою Клієнта.',
        },
        {
          title: '7. Скарги',
          content: `Скарги слід надсилати на: ${BUSINESS_INFO.email}. Розгляд скарг відбувається протягом 14 днів.`,
        },
      ],
    },
  };

  const pageContent = content[locale];

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="min-h-screen py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">{pageContent.title}</h1>

            <div className="prose prose-lg max-w-none space-y-8">
              {pageContent.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                {locale === 'pl' && 'Ten regulamin jest dokumentem przykładowym i powinien zostać zweryfikowany przez prawnika.'}
                {locale === 'en' && 'These terms are a template and should be reviewed by a lawyer.'}
                {locale === 'uk' && 'Ці умови є зразком і повинні бути перевірені юристом.'}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}

