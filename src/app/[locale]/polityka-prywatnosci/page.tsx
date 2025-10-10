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
    pl: 'Polityka Prywatności | Tłumaczenia24',
    en: 'Privacy Policy | Tłumaczenia24',
    uk: 'Політика Конфіденційності | Tłumaczenia24',
  };

  return {
    title: title[locale],
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const content = {
    pl: {
      title: 'Polityka Prywatności',
      lastUpdated: 'Ostatnia aktualizacja',
      sections: [
        {
          title: '1. Administrator danych',
          content: `Administratorem Twoich danych osobowych jest ${BUSINESS_INFO.name}, tłumacz przysięgły, NIP: ${BUSINESS_INFO.nip}, z siedzibą: ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}.`,
        },
        {
          title: '2. Jakie dane zbieramy',
          content: 'Zbieramy następujące dane osobowe: imię i nazwisko, adres email, numer telefonu, adres korespondencyjny oraz dane zawarte w dokumentach do tłumaczenia.',
        },
        {
          title: '3. Cel przetwarzania danych',
          content: 'Twoje dane osobowe przetwarzamy w celu: realizacji usług tłumaczeniowych, kontaktu z Tobą, wystawienia faktury, archiwizacji dokumentów zgodnie z przepisami prawa.',
        },
        {
          title: '4. Podstawa prawna',
          content: 'Podstawą prawną przetwarzania danych jest: wykonanie umowy (art. 6 ust. 1 lit. b RODO), wypełnienie obowiązku prawnego (art. 6 ust. 1 lit. c RODO), prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO).',
        },
        {
          title: '5. Twoje prawa',
          content: 'Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania, cofnięcia zgody w dowolnym momencie.',
        },
        {
          title: '6. Kontakt',
          content: `W sprawach związanych z ochroną danych osobowych możesz skontaktować się: email: ${BUSINESS_INFO.email}, telefon: ${BUSINESS_INFO.phoneFormatted}.`,
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      sections: [
        {
          title: '1. Data Controller',
          content: `The controller of your personal data is ${BUSINESS_INFO.name}, sworn translator, Tax ID: ${BUSINESS_INFO.nip}, address: ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}.`,
        },
        {
          title: '2. Data We Collect',
          content: 'We collect the following personal data: name and surname, email address, phone number, mailing address, and data contained in documents for translation.',
        },
        {
          title: '3. Purpose of Processing',
          content: 'We process your personal data for: providing translation services, contacting you, issuing invoices, archiving documents in accordance with legal requirements.',
        },
        {
          title: '4. Legal Basis',
          content: 'The legal basis for processing is: contract performance (Art. 6(1)(b) GDPR), legal obligation (Art. 6(1)(c) GDPR), legitimate interest (Art. 6(1)(f) GDPR).',
        },
        {
          title: '5. Your Rights',
          content: 'You have the right to: access your data, rectify it, erase it, restrict processing, data portability, object to processing, withdraw consent at any time.',
        },
        {
          title: '6. Contact',
          content: `For data protection inquiries: email: ${BUSINESS_INFO.email}, phone: ${BUSINESS_INFO.phoneFormatted}.`,
        },
      ],
    },
    uk: {
      title: 'Політика Конфіденційності',
      lastUpdated: 'Останнє оновлення',
      sections: [
        {
          title: '1. Адміністратор даних',
          content: `Адміністратором ваших персональних даних є ${BUSINESS_INFO.name}, присяжний перекладач, ІПН: ${BUSINESS_INFO.nip}, адреса: ${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}.`,
        },
        {
          title: '2. Які дані ми збираємо',
          content: 'Ми збираємо наступні персональні дані: ім\'я та прізвище, адресу email, номер телефону, поштову адресу та дані, що містяться в документах для перекладу.',
        },
        {
          title: '3. Мета обробки даних',
          content: 'Ваші персональні дані обробляються для: надання послуг перекладу, зв\'язку з вами, виставлення рахунків, архівування документів відповідно до законодавства.',
        },
        {
          title: '4. Правова основа',
          content: 'Правовою основою обробки є: виконання договору (ст. 6 п. 1 літ. b GDPR), виконання юридичного зобов\'язання (ст. 6 п. 1 літ. c GDPR), законний інтерес адміністратора (ст. 6 п. 1 літ. f GDPR).',
        },
        {
          title: '5. Ваші права',
          content: 'Ви маєте право на: доступ до своїх даних, їх виправлення, видалення, обмеження обробки, переносимість даних, заперечення проти обробки, відкликання згоди в будь-який час.',
        },
        {
          title: '6. Контакт',
          content: `З питань захисту персональних даних: email: ${BUSINESS_INFO.email}, телефон: ${BUSINESS_INFO.phoneFormatted}.`,
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
            <p className="text-sm text-muted-foreground mb-12">
              {pageContent.lastUpdated}: {new Date().toLocaleDateString(locale === 'pl' ? 'pl-PL' : locale === 'en' ? 'en-US' : 'uk-UA')}
            </p>

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
                {locale === 'pl' && 'Ta polityka prywatności jest dokumentem przykładowym i powinna zostać zweryfikowana przez prawnika.'}
                {locale === 'en' && 'This privacy policy is a template and should be reviewed by a lawyer.'}
                {locale === 'uk' && 'Ця політика конфіденційності є зразком і повинна бути перевірена юристом.'}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}

