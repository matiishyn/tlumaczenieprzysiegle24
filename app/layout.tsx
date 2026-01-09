import { Analytics } from '@/components/analytics';
import { OrganizationSchema, PersonSchema } from '@/components/structured-data';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.domain),
  title: {
    default: `${siteConfig.seo.mainKeyword} | ${siteConfig.business.name}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description:
    'Profesjonalne tłumaczenia przysięgłe z ukraińskiego na polski w Krakowie. Certyfikowany tłumacz z wpisu MS. Szybka realizacja 24-48h. Odbiór osobisty lub kurier.',
  keywords: [
    'tłumaczenie przysięgłe Kraków',
    'tłumacz przysięgły Kraków',
    'tłumaczenia ukraińskie',
    'tłumaczenia z ukraińskiego na polski',
    'tłumaczenia dokumentów Kraków',
    'apostille Kraków',
  ],
  authors: [{ name: siteConfig.business.name }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: siteConfig.business.name,
    statusBarStyle: 'default',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteConfig.urls.domain,
    siteName: siteConfig.business.name,
    title: siteConfig.seo.mainKeyword,
    description:
      'Profesjonalne tłumaczenia przysięgłe z ukraińskiego na polski w Krakowie. Certyfikowany tłumacz z wpisu MS. Szybka realizacja 24-48h.',
    images: [
      {
        url: `${siteConfig.urls.domain}/og?title=${encodeURIComponent(siteConfig.seo.mainKeyword)}&description=${encodeURIComponent('Profesjonalne tłumaczenia przysięgłe w Krakowie')}`,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.mainKeyword,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MFGNGZDJ');`
        }} />
        {/* End Google Tag Manager */}
        <link rel="canonical" href={siteConfig.urls.domain} />
        <link rel="alternate" hrefLang="pl" href={siteConfig.urls.domain} />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.urls.domain}/en`} />
        <link rel="alternate" hrefLang="uk" href={`${siteConfig.urls.domain}/uk`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.urls.domain} />
        <meta name="google-site-verification" content="0GJj9wcGBBmGOT96kDPwFZEf8jIOtfUR42cd6_5-xIU" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.business.name} />
        <OrganizationSchema />
        <PersonSchema />
        <Analytics />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFGNGZDJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
