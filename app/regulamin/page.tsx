import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { getTranslations } from '@/lib/i18n';
import { defaultLocale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulamin',
  description: 'Regulamin świadczenia usług tłumaczeniowych drogą elektroniczną.',
};

export default function TermsPage() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={defaultLocale} t={t} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Regulamin świadczenia usług drogą elektroniczną
          </h1>

          <div className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Postanowienia ogólne
              </h2>
              <p className="text-slate-600">
                Niniejszy regulamin określa zasady korzystania ze strony internetowej{' '}
                {siteConfig.urls.domain} oraz świadczenia usług drogą elektroniczną przez{' '}
                {siteConfig.business.name}.
              </p>
              <p className="text-slate-600">
                Usługodawca: {siteConfig.business.name}, {siteConfig.business.address.street},{' '}
                {siteConfig.business.address.postalCode} {siteConfig.business.address.city},{' '}
                NIP: {siteConfig.business.nip}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. Usługi świadczone drogą elektroniczną
              </h2>
              <p className="text-slate-600">
                Strona internetowa umożliwia:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Przeglądanie oferty usług tłumaczeniowych</li>
                <li>Przesyłanie dokumentów do wyceny</li>
                <li>Kontakt za pomocą formularza kontaktowego</li>
                <li>Składanie zamówień na tłumaczenia przysięgłe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. Wymagania techniczne
              </h2>
              <p className="text-slate-600">
                Korzystanie z serwisu wymaga:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Urządzenia z dostępem do Internetu</li>
                <li>Przeglądarki internetowej</li>
                <li>Aktywnego konta e-mail</li>
                <li>Włączonej obsługi JavaScript i cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. Proces składania zamówienia
              </h2>
              <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                <li>Klient przesyła dokumenty za pomocą formularza online</li>
                <li>Usługodawca przygotowuje wycenę i przesyła ją na adres e-mail Klienta</li>
                <li>Klient potwierdza zamówienie i dokonuje płatności</li>
                <li>Usługodawca realizuje tłumaczenie</li>
                <li>Klient odbiera gotowe tłumaczenie osobiście lub kurierem</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Przesyłanie plików
              </h2>
              <p className="text-slate-600">
                Akceptowane formaty plików: PDF, JPG, PNG. Maksymalny rozmiar pliku: 20 MB.
              </p>
              <p className="text-slate-600">
                Przesłane pliki są przechowywane przez 48 godzin od otrzymania lub do momentu
                realizacji zamówienia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. Ceny i płatności
              </h2>
              <p className="text-slate-600">
                Wszystkie ceny podane na stronie są cenami brutto (zawierają VAT).
              </p>
              <p className="text-slate-600">
                Akceptowane formy płatności: {siteConfig.payments.methods.join(', ')}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Dostawa
              </h2>
              <p className="text-slate-600">
                Tłumaczenia przysięgłe wydawane są wyłącznie w formie papierowej z oryginalnym
                podpisem i pieczęcią tłumacza.
              </p>
              <p className="text-slate-600">
                Sposoby odbioru:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Odbiór osobisty w Krakowie (po wcześniejszym umówieniu)</li>
                <li>Przesyłka kurierska na terenie Polski</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Reklamacje
              </h2>
              <p className="text-slate-600">
                Reklamacje dotyczące świadczonych usług należy zgłaszać na adres e-mail:{' '}
                {siteConfig.business.email} lub pisemnie na adres siedziby.
              </p>
              <p className="text-slate-600">
                Reklamacje rozpatrywane są w terminie 14 dni od daty otrzymania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Dane osobowe
              </h2>
              <p className="text-slate-600">
                Zasady przetwarzania danych osobowych określa{' '}
                <a href="/polityka-prywatnosci" className="text-blue-600 hover:underline">
                  Polityka prywatności
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Postanowienia końcowe
              </h2>
              <p className="text-slate-600">
                Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach użytkownicy
                zostaną poinformowani na stronie internetowej.
              </p>
              <p className="text-slate-600">
                W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy prawa
                polskiego.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter locale={defaultLocale} t={t} />
    </div>
  );
}
