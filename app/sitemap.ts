import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.urls.domain;

  const routes = [
    '',
    '/cennik',
    '/o-mnie',
    '/kontakt',
    '/uslugi/tlumaczenia-na-ukrainski',
    '/uslugi/tlumaczenia-na-angielski',
    '/polityka-prywatnosci',
    '/regulamin',
    '/polityka-cookies',
  ];

  const plPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
    alternates: {
      languages: {
        pl: `${baseUrl}${route}`,
        en: `${baseUrl}/en${route === '' ? '' : route.replace(/^\//, '/')}`,
        uk: `${baseUrl}/uk${route === '' ? '' : route.replace(/^\//, '/')}`,
      },
    },
  }));

  return plPages;
}
