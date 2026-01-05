export const siteConfig = {
  business: {
    name: "tlumaczenieprzysiegle24",
    legalForm: "JDG",
    ownerName: "Jan Kowalski",
    nip: "1234567890",
    address: {
      street: "Rydlówka 42B/28",
      postalCode: "30-363",
      city: "Kraków",
      country: "Polska",
    },
    phone: "+48 731 534 730",
    email: "tlumaczenieprzysiegle24@gmail.com",
    hours: "pon-pt 9:00–18:00",
    mojNumber: "TP/97/25",
    languagePairs: ["ukraiński-polski"],
  },

  urls: {
    domain: "https://tlumaczenieprzysiegle24.pl",
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=Rydlówka+42B%2F28%2C+30-363+Kraków",
    ceidg: "https://www.ceidg.gov.pl",
  },

  social: {
    facebook: "https://facebook.com/tlumaczenieprzysiegle24",
    whatsapp: "+48731534730",
    telegram: "+48731534730",
    viber: "+48731534730",
  },

  payments: {
    methods: [
      "Przelewy24",
      "BLIK",
      "Apple Pay",
      "Google Pay",
      "Karta płatnicza",
      "Przelew tradycyjny",
    ],
  },

  pricing: {
    swornCharRate: 25,
    swornPageSize: 1125,
    ordinaryPageSize: 1500,
    services: [
      { id: "birth-cert", nameKey: "birthCertificate", priceFrom: 90 },
      { id: "marriage-cert", nameKey: "marriageCertificate", priceFrom: 90 },
      { id: "death-cert", nameKey: "deathCertificate", priceFrom: 90 },
      { id: "divorce-cert", nameKey: "divorceCertificate", priceFrom: 90 },
      { id: "school-cert", nameKey: "schoolCertificate", priceFrom: 80 },
      { id: "school-annex", nameKey: "schoolAnnex", priceFrom: 120 },
      { id: "diploma-supplement", nameKey: "diplomaSupplement", priceFrom: 180 },
      { id: "apostille", nameKey: "apostille", priceFrom: 80 },
      { id: "study-continuation", nameKey: "studyContinuation", priceFrom: 100 },
      { id: "drivers-license", nameKey: "driversLicense", priceFrom: 80 },
      { id: "criminal-record", nameKey: "criminalRecord", priceFrom: 80 },
      { id: "vaccination-card", nameKey: "vaccinationCard", priceFrom: 180 },
      { id: "insurance-policy", nameKey: "insurancePolicy", priceFrom: 80 },
      { id: "work-book", nameKey: "workBook", priceFrom: null },
    ],
    extras: {
      express24h: { type: "percentage", value: 50 },
      express48h: { type: "percentage", value: 30 },
      extraCopy: { type: "fixed", value: 20 },
      notarizedCopy: { type: "fixed", value: 30 },
      courierKrakow: { type: "fixed", value: 20 },
      courierPoland: { type: "fixed", value: 25 },
    },
  },

  delivery: {
    methods: ["Odbiór osobisty w Krakowie", "Kurier"],
    paperOnly: true,
  },

  seo: {
    mainKeyword: "Tłumaczenie przysięgłe Kraków",
    alternativeKeywords: [
      "tłumacz przysięgły Kraków",
      "tłumaczenia przysięgłe Kraków",
      "tłumaczenia Kraków",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
