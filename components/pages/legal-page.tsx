import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Locale } from '@/config/locales';
import { siteConfig } from '@/config/site';

interface LegalPageProps {
  locale: Locale;
  t: any;
  type: 'privacy' | 'cookies' | 'terms';
}

export function LegalPage({ locale, t, type }: LegalPageProps) {
  const getContent = () => {
    if (type === 'privacy') {
      return (
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '1. Administrator danych osobowych' :
                locale === 'en' ? '1. Personal data controller' :
                  '1. Адміністратор персональних даних'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Administratorem danych osobowych jest' :
                locale === 'en' ? 'The personal data controller is' :
                  'Адміністратором персональних даних є'} {siteConfig.business.name},{' '}
              {siteConfig.business.address.street},{' '}
              {siteConfig.business.address.postalCode}{' '}
              {siteConfig.business.address.city}.
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Kontakt:' : locale === 'en' ? 'Contact:' : 'Контакт:'} {siteConfig.business.email}, {locale === 'pl' ? 'tel.' : locale === 'en' ? 'tel.' : 'тел.'} {siteConfig.business.phone}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '2. Zakres przetwarzanych danych' :
                locale === 'en' ? '2. Scope of processed data' :
                  '2. Обсяг оброблюваних даних'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Przetwarzamy następujące dane osobowe:' :
                locale === 'en' ? 'We process the following personal data:' :
                  'Ми обробляємо такі персональні дані:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Imię i nazwisko' : locale === 'en' ? 'Name and surname' : 'Ім\'я та прізвище'}</li>
              <li>{locale === 'pl' ? 'Adres e-mail' : locale === 'en' ? 'Email address' : 'Адреса електронної пошти'}</li>
              <li>{locale === 'pl' ? 'Numer telefonu' : locale === 'en' ? 'Phone number' : 'Номер телефону'}</li>
              <li>{locale === 'pl' ? 'Dokumenty przesłane do tłumaczenia' : locale === 'en' ? 'Documents submitted for translation' : 'Документи, надіслані для перекладу'}</li>
              <li>{locale === 'pl' ? 'Dane zawarte w dokumentach do tłumaczenia' : locale === 'en' ? 'Data contained in documents for translation' : 'Дані, що містяться в документах для перекладу'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '3. Cel i podstawa prawna przetwarzania' :
                locale === 'en' ? '3. Purpose and legal basis for processing' :
                  '3. Мета та правова основа обробки'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Dane osobowe przetwarzane są w celu:' :
                locale === 'en' ? 'Personal data is processed for:' :
                  'Персональні дані обробляються з метою:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>
                {locale === 'pl' ? 'Realizacji zamówienia tłumaczenia (podstawa: art. 6 ust. 1 lit. b RODO - wykonanie umowy)' :
                  locale === 'en' ? 'Execution of translation order (basis: Art. 6(1)(b) GDPR - performance of a contract)' :
                    'Виконання замовлення на переклад (основа: ст. 6 п. 1 літ. b GDPR - виконання договору)'}
              </li>
              <li>
                {locale === 'pl' ? 'Kontaktu z klientem (podstawa: art. 6 ust. 1 lit. f RODO - prawnie uzasadniony interes)' :
                  locale === 'en' ? 'Contact with the client (basis: Art. 6(1)(f) GDPR - legitimate interest)' :
                    'Контакту з клієнтом (основа: ст. 6 п. 1 літ. f GDPR - законний інтерес)'}
              </li>
              <li>
                {locale === 'pl' ? 'Przesyłania wyceny (podstawa: art. 6 ust. 1 lit. a RODO - zgoda)' :
                  locale === 'en' ? 'Sending quotes (basis: Art. 6(1)(a) GDPR - consent)' :
                    'Надсилання оцінки (основа: ст. 6 п. 1 літ. a GDPR - згода)'}
              </li>
              <li>
                {locale === 'pl' ? 'Archiwizacji dokumentacji (podstawa: art. 6 ust. 1 lit. c RODO - obowiązek prawny)' :
                  locale === 'en' ? 'Documentation archiving (basis: Art. 6(1)(c) GDPR - legal obligation)' :
                    'Архівування документації (основа: ст. 6 п. 1 літ. c GDPR - юридичний обов\'язок)'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '4. Okres przechowywania danych' :
                locale === 'en' ? '4. Data retention period' :
                  '4. Період зберігання даних'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Dane osobowe przechowywane są przez okres:' :
                locale === 'en' ? 'Personal data is stored for:' :
                  'Персональні дані зберігаються протягом:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>
                {locale === 'pl' ? 'Dokumenty tłumaczeniowe - 10 lat zgodnie z przepisami prawa' :
                  locale === 'en' ? 'Translation documents - 10 years in accordance with legal provisions' :
                    'Перекладацькі документи - 10 років відповідно до законодавства'}
              </li>
              <li>
                {locale === 'pl' ? 'Dane kontaktowe - do czasu wycofania zgody lub zgłoszenia sprzeciwu' :
                  locale === 'en' ? 'Contact details - until consent is withdrawn or objection is raised' :
                    'Контактні дані - до відкликання згоди або подання заперечення'}
              </li>
              <li>
                {locale === 'pl' ? 'Przesłane pliki do wyceny - 48 godzin od otrzymania lub do momentu realizacji zamówienia' :
                  locale === 'en' ? 'Files submitted for quote - 48 hours from receipt or until order completion' :
                    'Надіслані файли для оцінки - 48 годин з моменту отримання або до виконання замовлення'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '5. Odbiorcy danych' :
                locale === 'en' ? '5. Data recipients' :
                  '5. Одержувачі даних'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Dane osobowe mogą być przekazywane:' :
                locale === 'en' ? 'Personal data may be transferred to:' :
                  'Персональні дані можуть передаватися:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Firmom kurierskim (w przypadku wysyłki)' : locale === 'en' ? 'Courier companies (in case of shipment)' : 'Кур\'єрським компаніям (у разі відправки)'}</li>
              <li>{locale === 'pl' ? 'Dostawcom usług IT (hosting, poczta elektroniczna)' : locale === 'en' ? 'IT service providers (hosting, email)' : 'Постачальникам IT-послуг (хостинг, електронна пошта)'}</li>
              <li>{locale === 'pl' ? 'Organom państwowym na podstawie przepisów prawa' : locale === 'en' ? 'State authorities based on legal provisions' : 'Державним органам на підставі законодавства'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '6. Prawa osób, których dane dotyczą' :
                locale === 'en' ? '6. Rights of data subjects' :
                  '6. Права суб\'єктів даних'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Przysługuje Państwu prawo do:' :
                locale === 'en' ? 'You have the right to:' :
                  'Ви маєте право на:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Dostępu do swoich danych osobowych' : locale === 'en' ? 'Access your personal data' : 'Доступ до своїх персональних даних'}</li>
              <li>{locale === 'pl' ? 'Sprostowania danych' : locale === 'en' ? 'Rectify data' : 'Виправлення даних'}</li>
              <li>{locale === 'pl' ? 'Usunięcia danych' : locale === 'en' ? 'Delete data' : 'Видалення даних'}</li>
              <li>{locale === 'pl' ? 'Ograniczenia przetwarzania' : locale === 'en' ? 'Restrict processing' : 'Обмеження обробки'}</li>
              <li>{locale === 'pl' ? 'Przenoszenia danych' : locale === 'en' ? 'Data portability' : 'Перенесення даних'}</li>
              <li>{locale === 'pl' ? 'Wniesienia sprzeciwu wobec przetwarzania' : locale === 'en' ? 'Object to processing' : 'Заперечення проти обробки'}</li>
              <li>{locale === 'pl' ? 'Wycofania zgody w dowolnym momencie' : locale === 'en' ? 'Withdraw consent at any time' : 'Відкликання згоди в будь-який момент'}</li>
              <li>
                {locale === 'pl' ? 'Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych' :
                  locale === 'en' ? 'Lodge a complaint with the President of the Personal Data Protection Office' :
                    'Подання скарги до Президента Управління захисту персональних даних'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '7. Zabezpieczenie danych' :
                locale === 'en' ? '7. Data security' :
                  '7. Захист даних'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych osobowych, w tym szyfrowanie połączeń, bezpieczne przechowywanie dokumentów oraz ograniczenie dostępu do danych.' :
                locale === 'en' ? 'We use appropriate technical and organizational measures to ensure the security of processed personal data, including connection encryption, secure document storage, and restricted access to data.' :
                  'Ми застосовуємо відповідні технічні та організаційні заходи для забезпечення безпеки оброблюваних персональних даних, включаючи шифрування з\'єднань, безпечне зберігання документів та обмеження доступу до даних.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '8. Pliki cookies' :
                locale === 'en' ? '8. Cookies' :
                  '8. Файли cookies'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Szczegółowe informacje dotyczące plików cookies znajdują się w' :
                locale === 'en' ? 'Detailed information about cookies can be found in the' :
                  'Детальна інформація про файли cookies міститься в'}{' '}
              <a href={`/${locale === 'pl' ? '' : locale}${locale === 'pl' ? 'polityka-cookies' : locale === 'en' ? 'cookie-policy' : 'polityka-cookies'}`} className="text-blue-600 hover:underline">
                {locale === 'pl' ? 'Polityce cookies' :
                  locale === 'en' ? 'Cookie Policy' :
                    'Політиці cookies'}
              </a>
              .
            </p>
          </section>
        </div>
      );
    }

    if (type === 'cookies') {
      return (
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '1. Co to są pliki cookies?' :
                locale === 'en' ? '1. What are cookies?' :
                  '1. Що таке файли cookies?'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas przeglądania strony internetowej. Pozwalają one na zapamiętanie preferencji użytkownika i poprawę funkcjonalności serwisu.' :
                locale === 'en' ? 'Cookies are small text files saved on the user\'s device while browsing a website. They allow remembering user preferences and improve site functionality.' :
                  'Файли cookies - це невеликі текстові файли, що зберігаються на пристрої користувача під час перегляду веб-сайту. Вони дозволяють запам\'ятовувати уподобання користувача та покращувати функціональність сайту.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '2. Jakie pliki cookies używamy?' :
                locale === 'en' ? '2. What cookies do we use?' :
                  '2. Які файли cookies ми використовуємо?'}
            </h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">
              {locale === 'pl' ? 'Niezbędne cookies' :
                locale === 'en' ? 'Necessary cookies' :
                  'Необхідні cookies'}
            </h3>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Te pliki są konieczne do prawidłowego działania strony. Bez nich serwis nie będzie działał poprawnie. Obejmują one:' :
                locale === 'en' ? 'These files are necessary for the proper functioning of the website. Without them, the service will not work correctly. They include:' :
                  'Ці файли необхідні для правильної роботи сайту. Без них сервіс не працюватиме правильно. До них належать:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Cookies zarządzające zgodą na cookies' : locale === 'en' ? 'Cookies managing cookie consent' : 'Cookies, що керують згодою на cookies'}</li>
              <li>{locale === 'pl' ? 'Cookies sesji' : locale === 'en' ? 'Session cookies' : 'Сесійні cookies'}</li>
              <li>{locale === 'pl' ? 'Cookies bezpieczeństwa' : locale === 'en' ? 'Security cookies' : 'Cookies безпеки'}</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">
              {locale === 'pl' ? 'Analityczne cookies' :
                locale === 'en' ? 'Analytical cookies' :
                  'Аналітичні cookies'}
            </h3>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Pomagają zrozumieć, jak użytkownicy korzystają ze strony. Zbierają anonimowe informacje statystyczne. Wykorzystujemy:' :
                locale === 'en' ? 'Help understand how users use the website. Collect anonymous statistical information. We use:' :
                  'Допомагають зрозуміти, як користувачі використовують сайт. Збирають анонімну статистичну інформацію. Ми використовуємо:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Google Analytics 4 z trybem zgody (Consent Mode v2)' : locale === 'en' ? 'Google Analytics 4 with Consent Mode v2' : 'Google Analytics 4 з режимом згоди (Consent Mode v2)'}</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-4">
              {locale === 'pl' ? 'Marketingowe cookies' :
                locale === 'en' ? 'Marketing cookies' :
                  'Маркетингові cookies'}
            </h3>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Służą do dostarczania spersonalizowanych treści reklamowych. Wykorzystywane tylko po wyrażeniu zgody.' :
                locale === 'en' ? 'Used to deliver personalized advertising content. Used only after consent.' :
                  'Використовуються для доставки персоналізованого рекламного контенту. Використовуються тільки після надання згоди.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '3. Zarządzanie cookies' :
                locale === 'en' ? '3. Cookie management' :
                  '3. Управління cookies'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Możesz zarządzać swoimi preferencjami dotyczącymi cookies w każdej chwili:' :
                locale === 'en' ? 'You can manage your cookie preferences at any time:' :
                  'Ви можете керувати своїми налаштуваннями cookies в будь-який час:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Za pomocą banera zgody wyświetlanego przy pierwszej wizycie' : locale === 'en' ? 'Using the consent banner displayed on first visit' : 'За допомогою банера згоди, що відображається при першому відвідуванні'}</li>
              <li>{locale === 'pl' ? 'W ustawieniach swojej przeglądarki' : locale === 'en' ? 'In your browser settings' : 'В налаштуваннях свого браузера'}</li>
              <li>{locale === 'pl' ? 'Poprzez panel zarządzania zgodami dostępny w stopce strony' : locale === 'en' ? 'Through the consent management panel available in the page footer' : 'Через панель управління згодами, доступну в підвалі сторінки'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '4. Google Analytics 4' :
                locale === 'en' ? '4. Google Analytics 4' :
                  '4. Google Analytics 4'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Używamy Google Analytics 4 z włączonym Consent Mode v2, co oznacza, że:' :
                locale === 'en' ? 'We use Google Analytics 4 with Consent Mode v2 enabled, which means:' :
                  'Ми використовуємо Google Analytics 4 з увімкненим Consent Mode v2, що означає:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Cookies analityczne są aktywowane tylko po Twojej zgodzie' : locale === 'en' ? 'Analytical cookies are activated only after your consent' : 'Аналітичні cookies активуються тільки після вашої згоди'}</li>
              <li>{locale === 'pl' ? 'Dane są zbierane w sposób anonimowy' : locale === 'en' ? 'Data is collected anonymously' : 'Дані збираються анонімно'}</li>
              <li>
                {locale === 'pl' ? 'Możesz wycofać zgodę w dowolnym momencie, co zaprzestanie zbierania danych' :
                  locale === 'en' ? 'You can withdraw consent at any time, which will stop data collection' :
                    'Ви можете відкликати згоду в будь-який момент, що припинить збір даних'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '5. Wycofanie zgody' :
                locale === 'en' ? '5. Withdrawing consent' :
                  '5. Відкликання згоди'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Zgodę na cookies możesz wycofać w każdej chwili poprzez:' :
                locale === 'en' ? 'You can withdraw cookie consent at any time by:' :
                  'Ви можете відкликати згоду на cookies в будь-який час:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Kliknięcie w link "Zarządzaj cookies" w stopce strony' : locale === 'en' ? 'Clicking the "Manage cookies" link in the page footer' : 'Натиснувши посилання "Керувати cookies" в підвалі сторінки'}</li>
              <li>{locale === 'pl' ? 'Usunięcie cookies w ustawieniach przeglądarki' : locale === 'en' ? 'Deleting cookies in browser settings' : 'Видаливши cookies в налаштуваннях браузера'}</li>
              <li>
                {locale === 'pl' ? 'Wyłączenie cookies w ustawieniach przeglądarki (może wpłynąć na funkcjonalność strony)' :
                  locale === 'en' ? 'Disabling cookies in browser settings (may affect site functionality)' :
                    'Вимкнувши cookies в налаштуваннях браузера (може вплинути на функціональність сайту)'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '6. Jak wyłączyć cookies w przeglądarce?' :
                locale === 'en' ? '6. How to disable cookies in browser?' :
                  '6. Як вимкнути cookies в браузері?'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'W większości przeglądarek możesz:' :
                locale === 'en' ? 'In most browsers you can:' :
                  'У більшості браузерів ви можете:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Wyświetlić i usunąć cookies' : locale === 'en' ? 'View and delete cookies' : 'Переглянути та видалити cookies'}</li>
              <li>{locale === 'pl' ? 'Blokować cookies z określonych stron' : locale === 'en' ? 'Block cookies from specific sites' : 'Блокувати cookies з певних сайтів'}</li>
              <li>{locale === 'pl' ? 'Blokować wszystkie cookies' : locale === 'en' ? 'Block all cookies' : 'Блокувати всі cookies'}</li>
              <li>{locale === 'pl' ? 'Usuwać cookies po zamknięciu przeglądarki' : locale === 'en' ? 'Delete cookies after closing browser' : 'Видаляти cookies після закриття браузера'}</li>
            </ul>
            <p className="text-slate-600 mt-4">
              {locale === 'pl' ? 'Szczegółowe instrukcje znajdziesz w opcjach lub sekcji pomocy swojej przeglądarki.' :
                locale === 'en' ? 'Detailed instructions can be found in your browser\'s options or help section.' :
                  'Детальні інструкції можна знайти в опціях або розділі допомоги вашого браузера.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '7. Kontakt' :
                locale === 'en' ? '7. Contact' :
                  '7. Контакт'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'W razie pytań dotyczących polityki cookies, skontaktuj się z nami:' :
                locale === 'en' ? 'For questions about the cookie policy, contact us:' :
                  'У разі питань щодо політики cookies, зв\'яжіться з нами:'}
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Email:' : locale === 'en' ? 'Email:' : 'Email:'} {siteConfig.business.email}
              <br />
              {locale === 'pl' ? 'Telefon:' : locale === 'en' ? 'Phone:' : 'Телефон:'} {siteConfig.business.phone}
            </p>
          </section>
        </div>
      );
    }

    if (type === 'terms') {
      return (
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '1. Postanowienia ogólne' :
                locale === 'en' ? '1. General provisions' :
                  '1. Загальні положення'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Niniejszy regulamin określa zasady korzystania ze strony internetowej' :
                locale === 'en' ? 'These Terms and Conditions define the rules for using the website' :
                  'Цей регламент визначає правила використання веб-сайту'} {siteConfig.urls.domain}{' '}
              {locale === 'pl' ? 'oraz świadczenia usług drogą elektroniczną przez' :
                locale === 'en' ? 'and providing services electronically by' :
                  'та надання послуг електронним шляхом'} {siteConfig.business.name}.
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Usługodawca:' : locale === 'en' ? 'Service provider:' : 'Постачальник послуг:'} {siteConfig.business.name}, {siteConfig.business.address.street},{' '}
              {siteConfig.business.address.postalCode} {siteConfig.business.address.city},{' '}
              {locale === 'pl' ? 'NIP:' : locale === 'en' ? 'Tax ID:' : 'NIP:'} {siteConfig.business.nip}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '2. Usługi świadczone drogą elektroniczną' :
                locale === 'en' ? '2. Services provided electronically' :
                  '2. Послуги, що надаються електронним шляхом'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Strona internetowa umożliwia:' :
                locale === 'en' ? 'The website enables:' :
                  'Веб-сайт дозволяє:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Przeglądanie oferty usług tłumaczeniowych' : locale === 'en' ? 'Browsing translation services offer' : 'Перегляд пропозиції перекладацьких послуг'}</li>
              <li>{locale === 'pl' ? 'Przesyłanie dokumentów do wyceny' : locale === 'en' ? 'Sending documents for quote' : 'Надсилання документів для оцінки'}</li>
              <li>{locale === 'pl' ? 'Kontakt za pomocą formularza kontaktowego' : locale === 'en' ? 'Contact via contact form' : 'Контакт за допомогою контактної форми'}</li>
              <li>{locale === 'pl' ? 'Składanie zamówień na tłumaczenia przysięgłe' : locale === 'en' ? 'Placing orders for sworn translations' : 'Розміщення замовлень на присяжні переклади'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '3. Wymagania techniczne' :
                locale === 'en' ? '3. Technical requirements' :
                  '3. Технічні вимоги'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Korzystanie z serwisu wymaga:' :
                locale === 'en' ? 'Using the service requires:' :
                  'Використання сервісу вимагає:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Urządzenia z dostępem do Internetu' : locale === 'en' ? 'Device with Internet access' : 'Пристрій з доступом до Інтернету'}</li>
              <li>{locale === 'pl' ? 'Przeglądarki internetowej' : locale === 'en' ? 'Web browser' : 'Веб-браузер'}</li>
              <li>{locale === 'pl' ? 'Aktywnego konta e-mail' : locale === 'en' ? 'Active email account' : 'Активний обліковий запис електронної пошти'}</li>
              <li>{locale === 'pl' ? 'Włączonej obsługi JavaScript i cookies' : locale === 'en' ? 'Enabled JavaScript and cookies support' : 'Увімкнена підтримка JavaScript та cookies'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '4. Proces składania zamówienia' :
                locale === 'en' ? '4. Order placement process' :
                  '4. Процес розміщення замовлення'}
            </h2>
            <ol className="list-decimal pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Klient przesyła dokumenty za pomocą formularza online' : locale === 'en' ? 'Client submits documents via online form' : 'Клієнт надсилає документи через онлайн-форму'}</li>
              <li>{locale === 'pl' ? 'Usługodawca przygotowuje wycenę i przesyła ją na adres e-mail Klienta' : locale === 'en' ? 'Service provider prepares quote and sends it to Client\'s email' : 'Постачальник послуг готує оцінку та надсилає її на email клієнта'}</li>
              <li>{locale === 'pl' ? 'Klient potwierdza zamówienie i dokonuje płatności' : locale === 'en' ? 'Client confirms order and makes payment' : 'Клієнт підтверджує замовлення та здійснює оплату'}</li>
              <li>{locale === 'pl' ? 'Usługodawca realizuje tłumaczenie' : locale === 'en' ? 'Service provider executes translation' : 'Постачальник послуг виконує переклад'}</li>
              <li>{locale === 'pl' ? 'Klient odbiera gotowe tłumaczenie osobiście lub kurierem' : locale === 'en' ? 'Client picks up finished translation in person or by courier' : 'Клієнт отримує готовий переклад особисто або кур\'єром'}</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '5. Przesyłanie plików' :
                locale === 'en' ? '5. File submission' :
                  '5. Надсилання файлів'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Akceptowane formaty plików: PDF, JPG, PNG. Maksymalny rozmiar pliku: 20 MB.' :
                locale === 'en' ? 'Accepted file formats: PDF, JPG, PNG. Maximum file size: 20 MB.' :
                  'Прийнятні формати файлів: PDF, JPG, PNG. Максимальний розмір файлу: 20 МБ.'}
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Przesłane pliki są przechowywane przez 48 godzin od otrzymania lub do momentu realizacji zamówienia.' :
                locale === 'en' ? 'Submitted files are stored for 48 hours from receipt or until order completion.' :
                  'Надіслані файли зберігаються протягом 48 годин з моменту отримання або до виконання замовлення.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '6. Ceny i płatności' :
                locale === 'en' ? '6. Prices and payments' :
                  '6. Ціни та оплата'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Wszystkie ceny podane na stronie są cenami brutto (zawierają VAT).' :
                locale === 'en' ? 'All prices shown on the website are gross prices (include VAT).' :
                  'Всі ціни, вказані на сайті, є цінами брутто (включають ПДВ).'}
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Akceptowane formy płatności:' : locale === 'en' ? 'Accepted payment methods:' : 'Прийнятні способи оплати:'} {siteConfig.payments.methods.join(', ')}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '7. Dostawa' :
                locale === 'en' ? '7. Delivery' :
                  '7. Доставка'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Tłumaczenia przysięgłe wydawane są wyłącznie w formie papierowej z oryginalnym podpisem i pieczęcią tłumacza.' :
                locale === 'en' ? 'Sworn translations are issued only in paper form with original translator\'s signature and stamp.' :
                  'Присяжні переклади видаються виключно в паперовій формі з оригінальним підписом та печаткою перекладача.'}
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Sposoby odbioru:' : locale === 'en' ? 'Pickup methods:' : 'Способи отримання:'}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>{locale === 'pl' ? 'Odbiór osobisty w Krakowie (po wcześniejszym umówieniu)' : locale === 'en' ? 'Personal pickup in Kraków (by prior arrangement)' : 'Особистий самовивіз у Кракові (за попередньою домовленістю)'}</li>
              <li>{locale === 'pl' ? 'Przesyłka kurierska na terenie Polski' : locale === 'en' ? 'Courier shipment within Poland' : 'Кур\'єрська доставка на території Польщі'}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '8. Reklamacje' :
                locale === 'en' ? '8. Complaints' :
                  '8. Рекламації'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Reklamacje dotyczące świadczonych usług należy zgłaszać na adres e-mail:' :
                locale === 'en' ? 'Complaints regarding services should be submitted to email:' :
                  'Рекламації щодо наданих послуг слід подавати на адресу email:'} {siteConfig.business.email}{' '}
              {locale === 'pl' ? 'lub pisemnie na adres siedziby.' :
                locale === 'en' ? 'or in writing to the registered address.' :
                  'або письмово на адресу реєстрації.'}
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Reklamacje rozpatrywane są w terminie 14 dni od daty otrzymania.' :
                locale === 'en' ? 'Complaints are processed within 14 days from receipt date.' :
                  'Рекламації розглядаються протягом 14 днів з дати отримання.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '9. Dane osobowe' :
                locale === 'en' ? '9. Personal data' :
                  '9. Персональні дані'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Zasady przetwarzania danych osobowych określa' :
                locale === 'en' ? 'The rules for processing personal data are defined in the' :
                  'Правила обробки персональних даних визначаються в'}{' '}
              <a href={`/${locale === 'pl' ? '' : locale}${locale === 'pl' ? 'polityka-prywatnosci' : locale === 'en' ? 'privacy-policy' : 'polityka-pryvatnosti'}`} className="text-blue-600 hover:underline">
                {locale === 'pl' ? 'Polityka prywatności' :
                  locale === 'en' ? 'Privacy Policy' :
                    'Політиці конфіденційності'}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              {locale === 'pl' ? '10. Postanowienia końcowe' :
                locale === 'en' ? '10. Final provisions' :
                  '10. Заключні положення'}
            </h2>
            <p className="text-slate-600">
              {locale === 'pl' ? 'Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach użytkownicy zostaną poinformowani na stronie internetowej.' :
                locale === 'en' ? 'The Service Provider reserves the right to change these Terms. Users will be informed of changes on the website.' :
                  'Постачальник послуг залишає за собою право змінювати Регламент. Користувачі будуть поінформовані про зміни на веб-сайті.'}
            </p>
            <p className="text-slate-600">
              {locale === 'pl' ? 'W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy prawa polskiego.' :
                locale === 'en' ? 'Matters not covered by these Terms shall be governed by Polish law.' :
                  'У питаннях, не врегульованих цим Регламентом, застосовується польське законодавство.'}
            </p>
          </section>
        </div>
      );
    }

    return null;
  };

  const getTitle = () => {
    if (type === 'privacy') {
      return locale === 'pl' ? 'Polityka prywatności' :
        locale === 'en' ? 'Privacy Policy' :
          'Політика конфіденційності';
    }
    if (type === 'cookies') {
      return locale === 'pl' ? 'Polityka cookies' :
        locale === 'en' ? 'Cookie Policy' :
          'Політика cookies';
    }
    if (type === 'terms') {
      return locale === 'pl' ? 'Regulamin świadczenia usług drogą elektroniczną' :
        locale === 'en' ? 'Terms of Service' :
          'Регламент надання послуг електронним шляхом';
    }
    return '';
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={locale} t={t} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            {getTitle()}
          </h1>
          {getContent()}
        </div>
      </main>
      <SiteFooter locale={locale} t={t} />
    </div>
  );
}
