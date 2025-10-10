import { ThemeProvider } from '@/components/theme-provider';
import { locales, type Locale } from '@/i18n';
import { BUSINESS_INFO, WEBSITE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Generate static params for all locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata per locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params as { locale: Locale };

  const title = {
    pl: 'Tłumaczenia Przysięgłe | Angielski & Ukraiński | Warszawa',
    en: 'Sworn Translation Services | English & Ukrainian | Warsaw',
    uk: 'Присяжні Переклади | Англійська & Українська | Варшава',
  };

  const description = {
    pl: 'Profesjonalne tłumaczenia przysięgłe języka angielskiego i ukraińskiego. Certyfikowany tłumacz przysięgły. Szybko, profesjonalnie, zgodnie z prawem. Od 80 zł.',
    en: 'Professional sworn translation services for English and Ukrainian. Certified sworn translator. Fast, professional, legally compliant. From 80 PLN.',
    uk: 'Професійні присяжні переклади англійською та українською мовами. Сертифікований присяжний перекладач. Швидко, професійно, згідно закону. Від 80 зл.',
  };

  return {
    title: title[locale],
    description: description[locale],
    keywords: [
      'tłumaczenia przysięgłe',
      'sworn translation',
      'присяжний переклад',
      'tłumacz ukraiński',
      'tłumacz angielski',
      'Ukrainian translator',
      'English translator',
      'Warszawa',
      'Warsaw',
      'Варшава',
    ],
    authors: [{ name: BUSINESS_INFO.name }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(WEBSITE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        pl: '/pl',
        en: '/en',
        uk: '/uk',
      },
    },
    openGraph: {
      title: title[locale],
      description: description[locale],
      url: `${WEBSITE_URL}/${locale}`,
      siteName: 'tlumaczenieprzysiegle24.pl',
      locale: locale === 'pl' ? 'pl_PL' : locale === 'en' ? 'en_US' : 'uk_UA',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title[locale],
      description: description[locale],
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // To be added later
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params as { locale: Locale };

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: BUSINESS_INFO.name,
              description:
                locale === 'pl'
                  ? 'Profesjonalne tłumaczenia przysięgłe języka angielskiego i ukraińskiego'
                  : locale === 'en'
                    ? 'Professional sworn translation services for English and Ukrainian'
                    : 'Професійні присяжні переклади англійською та українською мовами',
              url: WEBSITE_URL,
              telephone: BUSINESS_INFO.phone,
              email: BUSINESS_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS_INFO.address.street,
                addressLocality: BUSINESS_INFO.address.city,
                postalCode: BUSINESS_INFO.address.postalCode,
                addressCountry: 'PL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: BUSINESS_INFO.coordinates.lat,
                longitude: BUSINESS_INFO.coordinates.lng,
              },
              priceRange: 'od 80 PLN',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '100',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

