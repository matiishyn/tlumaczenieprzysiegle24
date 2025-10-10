import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/config/site';

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
