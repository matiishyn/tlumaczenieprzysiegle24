import { locales } from '@/i18n';
import { WEBSITE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/tlumaczenie-ukrainski',
    '/tlumaczenie-angielski',
    '/polityka-prywatnosci',
    '/polityka-cookies',
    '/regulamin',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${WEBSITE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
