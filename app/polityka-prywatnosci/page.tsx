import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności i ochrony danych osobowych zgodnie z RODO.',
};

export default function PrivacyPage() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Polityka prywatności
          </h1>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Administrator danych osobowych
              </h2>
              <p className="text-slate-600">
                Administratorem danych osobowych jest {siteConfig.business.name},{' '}
                {siteConfig.business.address.street},{' '}
                {siteConfig.business.address.postalCode}{' '}
                {siteConfig.business.address.city}, NIP: {siteConfig.business.nip}.
              </p>
              <p className="text-slate-600">
                Kontakt: {siteConfig.business.email}, tel. {siteConfig.business.phone}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Zakres przetwarzanych danych
              </h2>
              <p className="text-slate-600">Przetwarzamy następujące dane osobowe:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Dokumenty przesłane do tłumaczenia</li>
                <li>Dane zawarte w dokumentach do tłumaczenia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Cel i podstawa prawna przetwarzania
              </h2>
              <p className="text-slate-600">Dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  Realizacji zamówienia tłumaczenia (podstawa: art. 6 ust. 1 lit. b RODO -
                  wykonanie umowy)
                </li>
                <li>
                  Kontaktu z klientem (podstawa: art. 6 ust. 1 lit. f RODO - prawnie
                  uzasadniony interes)
                </li>
                <li>
                  Przesyłania wyceny (podstawa: art. 6 ust. 1 lit. a RODO - zgoda)
                </li>
                <li>
                  Archiwizacji dokumentacji (podstawa: art. 6 ust. 1 lit. c RODO -
                  obowiązek prawny)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Okres przechowywania danych
              </h2>
              <p className="text-slate-600">
                Dane osobowe przechowywane są przez okres:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Dokumenty tłumaczeniowe - 10 lat zgodnie z przepisami prawa</li>
                <li>Dane kontaktowe - do czasu wycofania zgody lub zgłoszenia sprzeciwu</li>
                <li>
                  Przesłane pliki do wyceny - 48 godzin od otrzymania lub do momentu
                  realizacji zamówienia
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Odbiorcy danych
              </h2>
              <p className="text-slate-600">Dane osobowe mogą być przekazywane:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Firmom kurierskim (w przypadku wysyłki)</li>
                <li>Dostawcom usług IT (hosting, poczta elektroniczna)</li>
                <li>Organom państwowym na podstawie przepisów prawa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Prawa osób, których dane dotyczą
              </h2>
              <p className="text-slate-600">Przysługuje Państwu prawo do:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Wycofania zgody w dowolnym momencie</li>
                <li>
                  Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Zabezpieczenie danych
              </h2>
              <p className="text-slate-600">
                Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające
                bezpieczeństwo przetwarzanych danych osobowych, w tym szyfrowanie
                połączeń, bezpieczne przechowywanie dokumentów oraz ograniczenie dostępu
                do danych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Pliki cookies
              </h2>
              <p className="text-slate-600">
                Szczegółowe informacje dotyczące plików cookies znajdują się w{' '}
                <a href="/polityka-cookies" className="text-blue-600 hover:underline">
                  Polityce cookies
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
