import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka cookies',
  description: 'Informacje dotyczące plików cookies i ich wykorzystania na stronie.',
};

export default function CookiesPage() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Polityka cookies
          </h1>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Co to są pliki cookies?
              </h2>
              <p className="text-slate-600">
                Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika
                podczas przeglądania strony internetowej. Pozwalają one na zapamiętanie
                preferencji użytkownika i poprawę funkcjonalności serwisu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Jakie pliki cookies używamy?
              </h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">
                Niezbędne cookies
              </h3>
              <p className="text-slate-600">
                Te pliki są konieczne do prawidłowego działania strony. Bez nich serwis nie
                będzie działał poprawnie. Obejmują one:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Cookies zarządzające zgodą na cookies</li>
                <li>Cookies sesji</li>
                <li>Cookies bezpieczeństwa</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">
                Analityczne cookies
              </h3>
              <p className="text-slate-600">
                Pomagają zrozumieć, jak użytkownicy korzystają ze strony. Zbierają
                anonimowe informacje statystyczne. Wykorzystujemy:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Google Analytics 4 z trybem zgody (Consent Mode v2)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">
                Marketingowe cookies
              </h3>
              <p className="text-slate-600">
                Służą do dostarczania spersonalizowanych treści reklamowych. Wykorzystywane
                tylko po wyrażeniu zgody.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Zarządzanie cookies
              </h2>
              <p className="text-slate-600">
                Możesz zarządzać swoimi preferencjami dotyczącymi cookies w każdej chwili:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Za pomocą banera zgody wyświetlanego przy pierwszej wizycie</li>
                <li>W ustawieniach swojej przeglądarki</li>
                <li>Poprzez panel zarządzania zgodami dostępny w stopce strony</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Google Analytics 4
              </h2>
              <p className="text-slate-600">
                Używamy Google Analytics 4 z włączonym Consent Mode v2, co oznacza, że:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Cookies analityczne są aktywowane tylko po Twojej zgodzie</li>
                <li>Dane są zbierane w sposób anonimowy</li>
                <li>
                  Możesz wycofać zgodę w dowolnym momencie, co zaprzestanie zbierania
                  danych
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Wycofanie zgody
              </h2>
              <p className="text-slate-600">
                Zgodę na cookies możesz wycofać w każdej chwili poprzez:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Kliknięcie w link "Zarządzaj cookies" w stopce strony</li>
                <li>Usunięcie cookies w ustawieniach przeglądarki</li>
                <li>
                  Wyłączenie cookies w ustawieniach przeglądarki (może wpłynąć na
                  funkcjonalność strony)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Jak wyłączyć cookies w przeglądarce?
              </h2>
              <p className="text-slate-600">
                W większości przeglądarek możesz:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Wyświetlić i usunąć cookies</li>
                <li>Blokować cookies z określonych stron</li>
                <li>Blokować wszystkie cookies</li>
                <li>Usuwać cookies po zamknięciu przeglądarki</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Szczegółowe instrukcje znajdziesz w opcjach lub sekcji pomocy swojej
                przeglądarki.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Kontakt
              </h2>
              <p className="text-slate-600">
                W razie pytań dotyczących polityki cookies, skontaktuj się z nami:
              </p>
              <p className="text-slate-600">
                Email: {siteConfig.business.email}
                <br />
                Telefon: {siteConfig.business.phone}
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
