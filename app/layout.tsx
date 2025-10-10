import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { OrganizationSchema, PersonSchema } from '@/components/structured-data';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.urls.domain),
  title: {
    default: `${siteConfig.seo.mainKeyword} | ${siteConfig.business.name}`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description:
    'Profesjonalne tłumaczenia przysięgłe w Krakowie. Certyfikowany tłumacz z wpisu MS. Szybka realizacja 24-48h. Odbiór osobisty lub kurier.',
  keywords: [
    'tłumaczenie przysięgłe Kraków',
    'tłumacz przysięgły Kraków',
    'tłumaczenia ukraińskie',
    'tłumaczenia angielskie',
    'tłumaczenia dokumentów Kraków',
    'apostille Kraków',
  ],
  authors: [{ name: siteConfig.business.name }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteConfig.urls.domain,
    siteName: siteConfig.business.name,
    title: siteConfig.seo.mainKeyword,
    description:
      'Profesjonalne tłumaczenia przysięgłe w Krakowie. Certyfikowany tłumacz z wpisu MS. Szybka realizacja 24-48h.',
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
        <link rel="canonical" href={siteConfig.urls.domain} />
        <link rel="alternate" hrefLang="pl" href={siteConfig.urls.domain} />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.urls.domain}/en`} />
        <link rel="alternate" hrefLang="uk" href={`${siteConfig.urls.domain}/uk`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.urls.domain} />
        <OrganizationSchema />
        <PersonSchema />
        <Analytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
