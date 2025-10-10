import { siteConfig } from '@/config/site';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
    name: siteConfig.business.name,
    image: `${siteConfig.urls.domain}/og-image.jpg`,
    '@id': siteConfig.urls.domain,
    url: siteConfig.urls.domain,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.0647,
      longitude: 19.9368,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: 'zł 80 - zł 300',
    paymentAccepted: siteConfig.payments.methods.join(', '),
    currenciesAccepted: 'PLN',
    areaServed: {
      '@type': 'City',
      name: 'Kraków',
    },
    serviceType: 'Tłumaczenia przysięgłe',
    description:
      'Profesjonalne tłumaczenia przysięgłe w Krakowie. Certyfikowany tłumacz z wpisu MS. Języki: ukraiński, angielski. Szybka realizacja 24-48h.',
    sameAs: [
      // Add social media profiles when available
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi tłumaczeniowe',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tłumaczenia na język ukraiński',
            description: 'Profesjonalne tłumaczenia przysięgłe z języka polskiego na ukraiński',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tłumaczenia na język angielski',
            description: 'Profesjonalne tłumaczenia przysięgłe z języka polskiego na angielski',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.business.name,
    jobTitle: 'Tłumacz przysięgły',
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.business.name,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: 'PL',
    },
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    knowsLanguage: ['Polish', 'Ukrainian', 'English'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Wpis na liście tłumaczy przysięgłych Ministerstwa Sprawiedliwości',
      credentialCategory: 'Professional Certification',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ 
  name, 
  description, 
  price, 
  url 
}: { 
  name: string; 
  description: string; 
  price?: string; 
  url: string; 
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.business.name,
      url: siteConfig.urls.domain,
    },
    areaServed: {
      '@type': 'City',
      name: 'Kraków',
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'PLN',
        availability: 'https://schema.org/InStock',
      },
    }),
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
