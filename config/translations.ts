import { Locale } from './locales';

export const translations: Record<Locale, any> = {
  pl: {
    nav: {
      home: 'Strona główna',
      services: 'Usługi',
      pricing: 'Cennik',
      about: 'O mnie',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Tłumaczenie przysięgłe Kraków',
      subtitle: 'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i z ukraińskiego na polski • Oficjalna pieczęć tłumacza przysięgłego TP/127/24 • Tłumaczenia uznawane przez wszystkie polskie organy władzy, ZUS, Urząd Wojewódzki oraz konsulaty • Ceny od 40 zł/strona',
      cta: 'Wyślij dokument',
      ctaSecondary: 'Zobacz cennik',
      features: {
        deliveryTime: 'do 24 godzin',
        deliveryLabel: 'Realizacja',
        certification: 'Certyfikat',
        certificationLabel: 'TP/127/24',
        location: 'Kraków',
        locationLabel: 'Odbiór osobisty / Kurier',
      },
      imageAlt: 'Profesjonalne spotkanie w biurze',
    },
    services: {
      title: 'Specjalizacja językowa',
      ukrainian: {
        title: 'Tłumaczenia polsko-ukraińskie',
        description: 'Profesjonalne tłumaczenia przysięgłe z polskiego na ukraiński i z ukraińskiego na polski',
      },
    },
    pricing: {
      title: 'Cennik tłumaczeń przysięgłych dokumentów w Krakowie',
      subtitle: 'Tłumacz przysięgły języka ukraińskiego w Krakowie wykonuje oficjalne tłumaczenia dokumentów z ukraińskiego na polski i odwrotnie według przejrzystych stawek. Koszt zależy od typu dokumentu i pilności, bez ukrytych opłat. Wszystkie tłumaczenia są uznawane przez polskie instytucje. Wyślij dokument online i otrzymaj bezpłatną wycenę w ciągu 15–30 minut.',
      priceFrom: 'od',
      tableHeaders: {
        documentType: 'Rodzaj dokumentu',
        priceFrom: 'Cena od (zł)',
        description: 'Krótki opis',
      },
      documents: {
        birthCertificate: {
          name: 'Akt urodzenia',
          price: '90 zł',
          description: 'Oficjalne tłumaczenie do ZUS, Urząd Wojewódzki lub konsulatu',
        },
        marriageCertificate: {
          name: 'Akt małżeństwa',
          price: '90 zł',
          description: 'Tłumaczenie do rejestracji małżeństwa lub składania dokumentów rodzinnych',
        },
        divorceCertificate: {
          name: 'Akt rozwodu',
          price: '90 zł',
          description: 'Tłumaczenie orzeczenia sądowego lub wyciągu z USC',
        },
        deathCertificate: {
          name: 'Akt zgonu',
          price: '90 zł',
          description: 'Do składania w notariacie, ubezpieczeniach lub organach sądowych',
        },
        driversLicense: {
          name: 'Prawo jazdy',
          price: '90 zł',
          description: 'Do wymiany lub potwierdzenia uprawnień w Polsce',
        },
        criminalRecord: {
          name: 'Zaświadczenie o niekaralności',
          price: '90 zł',
          description: 'Tłumaczenie do zatrudnienia lub legalizacji',
        },
        medicalCertificate: {
          name: 'Zaświadczenie medyczne / wypis',
          price: '100 zł',
          description: 'Dla ubezpieczeń, lecznictwa i instytucji oficjalnych',
        },
        diploma: {
          name: 'Dyplom ukończenia studiów',
          price: '90 zł',
          description: 'Do nostryfikacji lub wstępu na polskie uczelnie',
        },
        diplomaSupplement: {
          name: 'Suplement do dyplomu',
          price: '100 zł',
          description: 'Szczegółowe oceny i przedmioty do uznania wykształcenia',
        },
        schoolCertificate: {
          name: 'Świadectwo ukończenia szkoły',
          price: '90 zł',
          description: 'Do wstępu do szkoły, liceum lub uniwersytetu',
        },
        contract: {
          name: 'Umowa (kupna, najmu, pracy)',
          price: '120 zł',
          description: 'Dokument prawny dla notariusza lub sądu',
        },
        courtDecision: {
          name: 'Orzeczenie sądowe',
          price: '130 zł',
          description: 'Tłumaczenie aktów i wyroków instancji sądowych',
        },
        powerOfAttorney: {
          name: 'Pełnomocnictwo',
          price: '120 zł',
          description: 'Forma poświadczona notarialnie do składania w organach oficjalnych',
        },
        taxDeclaration: {
          name: 'Deklaracja podatkowa / zaświadczenie',
          price: '100 zł',
          description: 'PIT, CIT, ZUS — tłumaczenia dla księgowości lub podatkowej',
        },
        bankStatement: {
          name: 'Wyciąg bankowy',
          price: '90 zł',
          description: 'Do kredytu, wizy lub potwierdzenia dochodów',
        },
        companyDocuments: {
          name: 'Dokumenty firmy (statut, KRS)',
          price: '150 zł',
          description: 'Do rejestracji prawnej, sądu lub audytu',
        },
        businessRegistration: {
          name: 'Dokumenty do rejestracji firmy',
          price: '150 zł',
          description: 'Pakiet tłumaczeń do rejestracji biznesu w Polsce',
        },
        resume: {
          name: 'CV lub list motywacyjny',
          price: '80 zł',
          description: 'Do składania w firmach, uniwersytetach lub ambasadach',
        },
        technicalManual: {
          name: 'Instrukcja lub opis techniczny',
          price: '140 zł',
          description: 'Tłumaczenie techniczne sprzętu, programów lub procesów',
        },
        businessPlan: {
          name: 'Biznesplan',
          price: '160 zł',
          description: 'Tłumaczenie dla banków, grantów i inwestorów',
        },
      },
      extras: 'Dodatkowe usługi',
      expressService: 'Tłumaczenie ekspresowe w dniu zamówienia +30%.',
      express24: 'Ekspres 24h',
      express48: 'Ekspres 48h',
      extraCopy: 'Dodatkowy egzemplarz',
      notarizedCopy: 'Kopia poświadczona notarialnie',
      courier: 'Kurier po Krakowie / Polsce',
    },
    about: {
      title: 'O tłumaczu',
      mojEntry: 'Wpis na listę tłumaczy przysięgłych Ministerstwa Sprawiedliwości TP/127/24',
      experience: 'Specjalizacja w tłumaczeniach polsko-ukraińskich',
      languages: 'Języki: polski ↔ ukraiński',
    },
    contact: {
      title: 'Kontakt',
      address: 'Adres',
      hours: 'Godziny pracy',
      phone: 'Telefon',
      email: 'Email',
      form: {
        title: 'Formularz kontaktowy',
        name: 'Imię i nazwisko',
        email: 'Email',
        phone: 'Telefon',
        message: 'Wiadomość',
        consent: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z',
        privacyPolicy: 'polityką prywatności',
        send: 'Wyślij wiadomość',
      },
    },
    faq: {
      title: 'Najczęściej zadawane pytania',
      items: [
        {
          q: 'Jakie języki obsługuje tłumacz?',
          a: 'Specjalizuję się w tłumaczeniach przysięgłych z polskiego na ukraiński i z ukraińskiego na polski. To są jedyne języki, które obsługuję.',
        },
        {
          q: 'Ile kosztuje tłumaczenie przysięgłe?',
          a: 'Cena zależy od rodzaju dokumentu i liczby stron. Sprawdź nasz cennik lub wyślij dokument do bezpłatnej wyceny.',
        },
        {
          q: 'Jak długo trwa tłumaczenie?',
          a: 'Standardowy czas realizacji to 2-3 dni robocze. Oferujemy również usługę ekspresową do 24 godzin.',
        },
        {
          q: 'Czy mogę odebrać tłumaczenie osobiście?',
          a: 'Tak, odbiór osobisty w Krakowie jest możliwy po wcześniejszym umówieniu. Oferujemy również wysyłkę kurierem.',
        },
        {
          q: 'Czy tłumaczenie jest ważne za granicą?',
          a: 'Tłumaczenie przysięgłe jest uznawane w Polsce. Dla celów międzynarodowych może być wymagane apostille lub legalizacja.',
        },
        {
          q: 'Jakie dokumenty mogę przesłać do wyceny?',
          a: 'Akceptujemy pliki PDF, JPG i PNG do 20 MB. Możesz wysłać skany lub zdjęcia dokumentów.',
        },
      ],
    },
    reviews: {
      title: 'Opinie klientów',
      subtitle: 'Prawdziwe opinie o tłumaczeniach przysięgłych w Krakowie',
      description: 'Dumni jesteśmy z zaufania klientów, którzy wybierają nas do oficjalnych tłumaczeń w Polsce. Poniżej kilka prawdziwych historii naszych klientów, którzy już skorzystali z usług tłumacza przysięgłego języka polskiego i ukraińskiego.',
      items: [
        {
          name: 'Olena M., Kraków',
          location: 'Kraków',
          text: 'Zamawiałam tłumaczenie świadectwa ślubu i dyplomu. Wszystko otrzymałam w ciągu doby, z podpisem tłumacza przysięgłego. Bardzo uprzejmie i profesjonalnie, polecam!',
        },
        {
          name: 'Igor S., Nowa Huta',
          location: 'Nowa Huta',
          text: 'Potrzebny był tłumacz przysięgły zaświadczenia do Urzędu Wojewódzkiego. Pani Anna wszystko zrobiła szybko, bez błędów, nawet pomogła z sformułowaniami po polsku.',
        },
        {
          name: 'Maria K., studentka AGH',
          location: 'AGH',
          text: 'Zamówiłam tłumaczenie świadectwa i indeksu. Ceny dostępne, tłumaczenie przyjęto na uniwersytecie bez żadnych uwag.',
        },
        {
          name: 'Aleksander T., Kraków Centrum',
          location: 'Kraków Centrum',
          text: 'Robiłem tłumaczenie umowy o pracę dla urzędu skarbowego. Otrzymałem gotowy dokument następnego dnia z pieczęcią. Serwis na poziomie.',
        },
        {
          name: 'Światłana D., Lwów / Kraków',
          location: 'Lwów / Kraków',
          text: 'Bardzo wygodnie, że można wysłać dokumenty online. Odpowiedzieli w ciągu 15 minut, wszystko oficjalnie i bez problemów.',
        },
      ],
    },
    footer: {
      businessInfo: 'Informacje o firmie',
      quickLinks: 'Szybkie linki',
      legal: 'Informacje prawne',
      followUs: 'Znajdź nas',
      allRightsReserved: 'Wszelkie prawa zastrzeżone',
    },
    common: {
      readMore: 'Czytaj więcej',
      backToHome: 'Powrót do strony głównej',
      loading: 'Ładowanie...',
      error: 'Wystąpił błąd',
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Sworn Translation Kraków',
      subtitle: 'Professional sworn translations from Polish to Ukrainian and from Ukrainian to Polish • Official sworn translator seal TP/127/24 • Translations recognized by all Polish authorities, ZUS, Voivodeship Office and consulates • Prices from 40 zł/page',
      cta: 'Send document',
      ctaSecondary: 'View pricing',
      features: {
        deliveryTime: 'up to 24 hours',
        deliveryLabel: 'Delivery',
        certification: 'Certified',
        certificationLabel: 'TP/127/24',
        location: 'Kraków',
        locationLabel: 'Personal pickup / Courier',
      },
      imageAlt: 'Professional office meeting',
    },
    services: {
      title: 'Language specialization',
      ukrainian: {
        title: 'Polish-Ukrainian translations',
        description: 'Professional sworn translations from Polish to Ukrainian and from Ukrainian to Polish',
      },
    },
    pricing: {
      title: 'Sworn translation pricing for documents in Kraków',
      subtitle: 'Sworn translator of Ukrainian language in Kraków performs official document translations from Ukrainian to Polish and vice versa at transparent rates. Cost depends on document type and urgency, with no hidden fees. All translations are recognized by Polish institutions. Send document online and receive free cost estimate within 15–30 minutes.',
      priceFrom: 'from',
      tableHeaders: {
        documentType: 'Document type',
        priceFrom: 'Price from (zł)',
        description: 'Brief description',
      },
      documents: {
        birthCertificate: {
          name: 'Birth certificate',
          price: '90 zł',
          description: 'Official translation for submission to ZUS, Voivodeship Office or consulate',
        },
        marriageCertificate: {
          name: 'Marriage certificate',
          price: '90 zł',
          description: 'Translation for marriage registration or family document submission',
        },
        divorceCertificate: {
          name: 'Divorce certificate',
          price: '90 zł',
          description: 'Translation of court decision or civil registry extract',
        },
        deathCertificate: {
          name: 'Death certificate',
          price: '90 zł',
          description: 'For submission to notary, insurance or court authorities',
        },
        driversLicense: {
          name: 'Driver\'s license',
          price: '90 zł',
          description: 'For exchange or confirmation of rights in Poland',
        },
        criminalRecord: {
          name: 'Criminal record certificate',
          price: '90 zł',
          description: 'Translation for employment or legalization',
        },
        medicalCertificate: {
          name: 'Medical certificate / discharge',
          price: '100 zł',
          description: 'For insurance, medical and official institutions',
        },
        diploma: {
          name: 'Education diploma',
          price: '90 zł',
          description: 'For nostrification or admission to Polish universities',
        },
        diplomaSupplement: {
          name: 'Diploma supplement',
          price: '100 zł',
          description: 'Detailed grades and subjects for education recognition',
        },
        schoolCertificate: {
          name: 'School completion certificate',
          price: '90 zł',
          description: 'For admission to school, high school or university',
        },
        contract: {
          name: 'Contract (purchase, rental, employment)',
          price: '120 zł',
          description: 'Legal document for notary or court',
        },
        courtDecision: {
          name: 'Court decision',
          price: '130 zł',
          description: 'Translation of court acts and verdicts',
        },
        powerOfAttorney: {
          name: 'Power of attorney',
          price: '120 zł',
          description: 'Notarized form for submission to official authorities',
        },
        taxDeclaration: {
          name: 'Tax declaration / certificate',
          price: '100 zł',
          description: 'PIT, CIT, ZUS — translations for accounting or tax purposes',
        },
        bankStatement: {
          name: 'Bank statement',
          price: '90 zł',
          description: 'For loan, visa or income confirmation',
        },
        companyDocuments: {
          name: 'Company documents (statute, KRS)',
          price: '150 zł',
          description: 'For legal registration, court or audit',
        },
        businessRegistration: {
          name: 'Business registration documents',
          price: '150 zł',
          description: 'Translation package for business registration in Poland',
        },
        resume: {
          name: 'Resume or cover letter',
          price: '80 zł',
          description: 'For submission to companies, universities or embassies',
        },
        technicalManual: {
          name: 'Instruction or technical description',
          price: '140 zł',
          description: 'Technical translation of equipment, software or processes',
        },
        businessPlan: {
          name: 'Business plan',
          price: '160 zł',
          description: 'Translation for banks, grants and investors',
        },
      },
      extras: 'Additional services',
      expressService: 'Express translation on order day +30%.',
      express24: 'Express 24h',
      express48: 'Express 48h',
      extraCopy: 'Extra copy',
      notarizedCopy: 'Notarized copy',
      courier: 'Courier in Kraków / Poland',
    },
    about: {
      title: 'About the translator',
      mojEntry: 'Entry on the Ministry of Justice list of sworn translators TP/127/24',
      experience: 'Specialization in Polish-Ukrainian translations',
      languages: 'Languages: Polish ↔ Ukrainian',
    },
    contact: {
      title: 'Contact',
      address: 'Address',
      hours: 'Business hours',
      phone: 'Phone',
      email: 'Email',
      form: {
        title: 'Contact form',
        name: 'Full name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        consent: 'I consent to the processing of my personal data in accordance with',
        privacyPolicy: 'privacy policy',
        send: 'Send message',
      },
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'What languages does the translator work with?',
          a: 'I specialize in sworn translations from Polish to Ukrainian and from Ukrainian to Polish. These are the only languages I work with.',
        },
        {
          q: 'How much does a sworn translation cost?',
          a: 'The price depends on the document type and number of pages. Check our pricing or send a document for a free quote.',
        },
        {
          q: 'How long does translation take?',
          a: 'Standard turnaround time is 2-3 business days. We also offer express service up to 24 hours.',
        },
        {
          q: 'Can I pick up the translation in person?',
          a: 'Yes, personal pickup in Kraków is possible by appointment. We also offer courier delivery.',
        },
        {
          q: 'Is the translation valid abroad?',
          a: 'Sworn translation is recognized in Poland. For international purposes, apostille or legalization may be required.',
        },
        {
          q: 'What documents can I send for a quote?',
          a: 'We accept PDF, JPG and PNG files up to 20 MB. You can send scans or photos of documents.',
        },
      ],
    },
    reviews: {
      title: 'Client Reviews',
      subtitle: 'Real reviews about sworn translations in Kraków',
      description: 'We are proud of the trust of clients who choose us for official translations in Poland. Below are several real stories from our clients who have already used sworn translation services in Polish and Ukrainian languages.',
      items: [
        {
          name: 'Olena M., Kraków',
          location: 'Kraków',
          text: 'I ordered translation of marriage certificate and diploma. Everything was delivered within a day, with sworn translator signature. Very polite and professional, I recommend!',
        },
        {
          name: 'Igor S., Nowa Huta',
          location: 'Nowa Huta',
          text: 'I needed sworn translation of a certificate for submission to Voivodeship Office. Ms. Anna did everything quickly, without errors, even helped with Polish formulations.',
        },
        {
          name: 'Maria K., AGH student',
          location: 'AGH',
          text: 'I ordered translation of certificate and grade book. Prices are affordable, the translation was accepted at the university without any remarks.',
        },
        {
          name: 'Aleksander T., Kraków Centrum',
          location: 'Kraków Centrum',
          text: 'I had employment contract translated for tax office. Received ready document the next day with seal. Service at high level.',
        },
        {
          name: 'Svitlana D., Lviv / Kraków',
          location: 'Lviv / Kraków',
          text: 'Very convenient that documents can be sent online. Responded within 15 minutes, everything official and without problems.',
        },
      ],
    },
    footer: {
      businessInfo: 'Business information',
      quickLinks: 'Quick links',
      legal: 'Legal information',
      followUs: 'Follow us',
      allRightsReserved: 'All rights reserved',
    },
    common: {
      readMore: 'Read more',
      backToHome: 'Back to home',
      loading: 'Loading...',
      error: 'An error occurred',
    },
  },

  uk: {
    nav: {
      home: 'Головна',
      services: 'Послуги',
      pricing: 'Ціни',
      about: 'Про мене',
      contact: 'Контакт',
    },
    hero: {
      title: 'Присяжний переклад Краків',
      subtitle: 'Професійні присяжні переклади документів з української на польську та з польської на українську • Офіційна печатка присяжного перекладача • Переклади визнаються усіма польськими органами влади, ZUS, Urząd Wojewódzki, а також консульствами • Ціни від 40 zł/сторінка',
      cta: 'Надіслати документ',
      ctaSecondary: 'Переглянути ціни',
      features: {
        deliveryTime: 'до 24 годин',
        deliveryLabel: 'Виконання',
        certification: 'Сертифікат',
        certificationLabel: 'TP/127/24',
        location: 'Краків',
        locationLabel: 'Самовивіз / Кур\'єр',
      },
      imageAlt: 'Професійна зустріч в офісі',
    },
    services: {
      title: 'Мовна спеціалізація',
      ukrainian: {
        title: 'Польсько-українські переклади',
        description: 'Професійні присяжні переклади з польської на українську і з української на польську',
      },
    },
    pricing: {
      title: 'Ціни на присяжні переклади документів у Кракові',
      subtitle: 'Присяжний перекладач української мови у Кракові виконує офіційні переклади документів з української на польську та навпаки за прозорими тарифами. Вартість залежить від типу документа і терміновості, без прихованих платежів. Усі переклади визнаються польськими установами. Надішліть документ онлайн та отримайте безкоштовну оцінку вартості протягом 15–30 хвилин.',
      priceFrom: 'від',
      tableHeaders: {
        documentType: 'Вид документа',
        priceFrom: 'Ціна від (zł)',
        description: 'Короткий опис',
      },
      documents: {
        birthCertificate: {
          name: 'Свідоцтво про народження',
          price: '90 zł',
          description: 'Офіційний переклад для подачі в ZUS, Urząd Wojewódzki або консульство',
        },
        marriageCertificate: {
          name: 'Свідоцтво про шлюб',
          price: '90 zł',
          description: 'Переклад для реєстрації шлюбу чи подання сімейних документів',
        },
        divorceCertificate: {
          name: 'Свідоцтво про розлучення',
          price: '90 zł',
          description: 'Переклад судового рішення або витягу з USC',
        },
        deathCertificate: {
          name: 'Свідоцтво про смерть',
          price: '90 zł',
          description: 'Для подачі в нотаріат, страхові чи судові органи',
        },
        driversLicense: {
          name: 'Водійське посвідчення',
          price: '90 zł',
          description: 'Для обміну або підтвердження прав у Польщі',
        },
        criminalRecord: {
          name: 'Довідка про несудимість',
          price: '90 zł',
          description: 'Переклад для працевлаштування або легалізації',
        },
        medicalCertificate: {
          name: 'Медична довідка / виписка',
          price: '100 zł',
          description: 'Для страхових, лікувальних та офіційних установ',
        },
        diploma: {
          name: 'Диплом про освіту',
          price: '90 zł',
          description: 'Для нострифікації чи вступу до польських ВНЗ',
        },
        diplomaSupplement: {
          name: 'Додаток до диплому',
          price: '100 zł',
          description: 'Деталізація оцінок і предметів для визнання освіти',
        },
        schoolCertificate: {
          name: 'Атестат / свідоцтво про закінчення школи',
          price: '90 zł',
          description: 'Для вступу до школи, ліцею або університету',
        },
        contract: {
          name: 'Договір (купівлі, оренди, роботи)',
          price: '120 zł',
          description: 'Юридичний документ для нотаріуса чи суду',
        },
        courtDecision: {
          name: 'Судове рішення',
          price: '130 zł',
          description: 'Переклад актів і вироків судових інстанцій',
        },
        powerOfAttorney: {
          name: 'Довіреність',
          price: '120 zł',
          description: 'Нотаріально засвідчена форма для подання офіційним органам',
        },
        taxDeclaration: {
          name: 'Податкова декларація / довідка',
          price: '100 zł',
          description: 'PIT, CIT, ZUS — переклади для бухгалтерії або податкової',
        },
        bankStatement: {
          name: 'Виписка з банку',
          price: '90 zł',
          description: 'Для кредиту, візи або підтвердження доходів',
        },
        companyDocuments: {
          name: 'Документи компанії (статут, KRS)',
          price: '150 zł',
          description: 'Для юридичної реєстрації, суду або аудиту',
        },
        businessRegistration: {
          name: 'Документи для реєстрації фірми',
          price: '150 zł',
          description: 'Пакет перекладів для реєстрації бізнесу у Польщі',
        },
        resume: {
          name: 'Резюме або мотиваційний лист',
          price: '80 zł',
          description: 'Для подачі в компанії, університети або посольства',
        },
        technicalManual: {
          name: 'Інструкція чи технічний опис',
          price: '140 zł',
          description: 'Технічний переклад обладнання, програм або процесів',
        },
        businessPlan: {
          name: 'Бізнес-план',
          price: '160 zł',
          description: 'Переклад для банків, грантів і інвесторів',
        },
      },
      extras: 'Додаткові послуги',
      expressService: 'Експрес-переклад у день замовлення +30%.',
      express24: 'Експрес 24 год',
      express48: 'Експрес 48 год',
      extraCopy: 'Додатковий примірник',
      notarizedCopy: 'Нотаріально завірена копія',
      courier: "Кур'єр по Кракову / Польщі",
    },
    about: {
      title: 'Про перекладача',
      mojEntry: 'Запис у списку присяжних перекладачів Міністерства юстиції TP/127/24',
      experience: 'Спеціалізація в польсько-українських перекладах',
      languages: 'Мови: польська ↔ українська',
    },
    contact: {
      title: 'Контакт',
      address: 'Адреса',
      hours: 'Години роботи',
      phone: 'Телефон',
      email: 'Email',
      form: {
        title: 'Контактна форма',
        name: "Ім'я та прізвище",
        email: 'Email',
        phone: 'Телефон',
        message: 'Повідомлення',
        consent: 'Я даю згоду на обробку моїх персональних даних відповідно до',
        privacyPolicy: 'політики конфіденційності',
        send: 'Надіслати повідомлення',
      },
    },
    faq: {
      title: 'Часті запитання',
      items: [
        {
          q: 'Які мови обслуговує перекладач?',
          a: 'Я спеціалізуюся на присяжних перекладах з польської на українську і з української на польську. Це єдині мови, які я обслуговую.',
        },
        {
          q: 'Скільки коштує присяжний переклад?',
          a: 'Ціна залежить від типу документа та кількості сторінок. Перегляньте наш прайс або надішліть документ для безкоштовної оцінки.',
        },
        {
          q: 'Скільки часу займає переклад?',
          a: 'Стандартний час виконання 2-3 робочі дні. Ми також пропонуємо експрес-послугу до 24 годин.',
        },
        {
          q: 'Чи можу я забрати переклад особисто?',
          a: 'Так, особистий самовивіз у Кракові можливий за попередньою домовленістю. Ми також пропонуємо доставку кур\'єром.',
        },
        {
          q: 'Чи дійсний переклад за кордоном?',
          a: 'Присяжний переклад визнається в Польщі. Для міжнародних цілей може знадобитися апостиль або легалізація.',
        },
        {
          q: 'Які документи я можу надіслати для оцінки?',
          a: 'Ми приймаємо файли PDF, JPG і PNG до 20 МБ. Ви можете надіслати скани або фотографії документів.',
        },
      ],
    },
    reviews: {
      title: 'Відгуки клієнтів',
      subtitle: 'Реальні відгуки про присяжні переклади у Кракові',
      description: 'Ми пишаємося довірою клієнтів, які обирають нас для офіційних перекладів у Польщі. Нижче кілька справжніх історій наших клієнтів, які вже скористалися послугами присяжного перекладу польською та українською мовами.',
      items: [
        {
          name: 'Олена М., Краків',
          location: 'Краків',
          text: 'Замовляла переклад свідоцтва про шлюб та диплом. Все отримала за добу, з підписом присяжного перекладача. Дуже ввічливо і професійно, рекомендую!',
        },
        {
          name: 'Ігор С., Nowa Huta',
          location: 'Nowa Huta',
          text: 'Потрібен був присяжний переклад довідки для подачі до Urząd Wojewódzki. Пані Анна все зробила швидко, без помилок, навіть допомогла з формулюваннями польською.',
        },
        {
          name: 'Марія К., студентка AGH',
          location: 'AGH',
          text: 'Замовила переклад атестату та залікової книжки. Ціни доступні, переклад прийняли в університеті без жодних зауважень.',
        },
        {
          name: 'Олександр Т., Kraków Centrum',
          location: 'Kraków Centrum',
          text: 'Робив переклад трудового договору для податкової. Отримав готовий документ наступного дня з печаткою. Сервіс на рівні.',
        },
        {
          name: 'Світлана Д., Львів / Краків',
          location: 'Львів / Краків',
          text: 'Дуже зручно, що можна надіслати документи онлайн. Відповіли за 15 хвилин, все офіційно і без проблем.',
        },
      ],
    },
    footer: {
      businessInfo: 'Інформація про компанію',
      quickLinks: 'Швидкі посилання',
      legal: 'Правова інформація',
      followUs: 'Слідкуйте за нами',
      allRightsReserved: 'Всі права захищені',
    },
    common: {
      readMore: 'Читати далі',
      backToHome: 'Повернутися на головну',
      loading: 'Завантаження...',
      error: 'Сталася помилка',
    },
  },
};
