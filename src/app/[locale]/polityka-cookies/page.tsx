import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import type { Locale } from '@/i18n';
import type { Metadata } from 'next';
import { getDictionary } from '../dictionaries';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = {
    pl: 'Polityka Cookies | Tłumaczenia24',
    en: 'Cookie Policy | Tłumaczenia24',
    uk: 'Політика Cookies | Tłumaczenia24',
  };

  return {
    title: title[locale],
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const content = {
    pl: {
      title: 'Polityka Cookies',
      intro: 'Ta strona używa plików cookies (ciasteczek) w celu zapewnienia prawidłowego działania serwisu oraz poprawy jakości świadczonych usług.',
      sections: [
        {
          title: '1. Czym są cookies',
          content: 'Cookies to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas przeglądania strony internetowej. Służą do zapamiętywania Twoich preferencji i ustawień.',
        },
        {
          title: '2. Jakie cookies używamy',
          content: 'Niezbędne cookies: wymagane do prawidłowego działania strony. Cookies funkcjonalne: zapamiętują Twoje preferencje (np. wybór języka). Cookies analityczne: pomagają nam zrozumieć, jak użytkownicy korzystają ze strony.',
        },
        {
          title: '3. Zarządzanie cookies',
          content: 'Możesz kontrolować i zarządzać cookies w ustawieniach swojej przeglądarki. Pamiętaj, że wyłączenie cookies może wpłynąć na funkcjonalność strony.',
        },
      ],
    },
    en: {
      title: 'Cookie Policy',
      intro: 'This website uses cookies to ensure proper functioning and improve the quality of services provided.',
      sections: [
        {
          title: '1. What are cookies',
          content: 'Cookies are small text files saved on your device while browsing a website. They serve to remember your preferences and settings.',
        },
        {
          title: '2. What cookies we use',
          content: 'Essential cookies: required for the website to function properly. Functional cookies: remember your preferences (e.g., language selection). Analytics cookies: help us understand how users interact with the site.',
        },
        {
          title: '3. Managing cookies',
          content: 'You can control and manage cookies in your browser settings. Note that disabling cookies may affect website functionality.',
        },
      ],
    },
    uk: {
      title: 'Політика Cookies',
      intro: 'Цей сайт використовує файли cookies для забезпечення належного функціонування та покращення якості послуг.',
      sections: [
        {
          title: '1. Що таке cookies',
          content: 'Cookies - це невеликі текстові файли, що зберігаються на вашому пристрої під час перегляду веб-сайту. Вони слугують для запам\'ятовування ваших налаштувань.',
        },
        {
          title: '2. Які cookies ми використовуємо',
          content: 'Необхідні cookies: потрібні для правильної роботи сайту. Функціональні cookies: запам\'ятовують ваші налаштування (наприклад, вибір мови). Аналітичні cookies: допомагають зрозуміти, як користувачі взаємодіють з сайтом.',
        },
        {
          title: '3. Управління cookies',
          content: 'Ви можете контролювати cookies в налаштуваннях свого браузера. Зверніть увагу, що вимкнення cookies може вплинути на функціональність сайту.',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageContent.title}</h1>
            <p className="text-lg text-muted-foreground mb-12">{pageContent.intro}</p>

            <div className="prose prose-lg max-w-none space-y-8">
              {pageContent.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}

