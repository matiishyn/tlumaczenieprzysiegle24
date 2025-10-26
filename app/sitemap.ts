import { siteConfig } from '@/config/site';
import { localeRoutes, locales } from '@/config/locales';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.urls.domain;

  // Define all route keys that should be included in sitemap
  const routeKeys = [
    'home',
    'services',
    'services-ukrainian',
    'services-english',
    'pricing',
    'about',
    'contact',
    'privacy',
    'terms',
    'cookies',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each language
  locales.forEach((locale) => {
    routeKeys.forEach((routeKey) => {
      const route = localeRoutes[routeKey][locale];
      const url = `${baseUrl}${route}`;
      
      // Create alternate language links
      const alternates: Record<string, string> = {};
      locales.forEach((altLocale) => {
        alternates[altLocale] = `${baseUrl}${localeRoutes[routeKey][altLocale]}`;
      });

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: routeKey === 'home' ? 1 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    });
  });

  return sitemapEntries;
}
