'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/config/locales';
import { getLocalePath } from '@/lib/i18n';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  locale: Locale;
  items?: BreadcrumbItem[];
}

export function Breadcrumb({ locale, items = [] }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Add home
    breadcrumbs.push({
      name: locale === 'pl' ? 'Strona główna' : locale === 'en' ? 'Home' : 'Головна',
      url: getLocalePath(locale, '/')
    });
    
    // Add other segments
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Skip if it's a locale segment
      if (segment === locale && index === 0) return;
      
      const name = getSegmentName(segment, locale);
      breadcrumbs.push({
        name,
        url: getLocalePath(locale, currentPath)
      });
    });
    
    return breadcrumbs;
  };
  
  const getSegmentName = (segment: string, locale: Locale): string => {
    const names: Record<string, Record<Locale, string>> = {
      'uslugi': {
        pl: 'Usługi',
        en: 'Services',
        uk: 'Послуги'
      },
      'services': {
        pl: 'Usługi',
        en: 'Services',
        uk: 'Послуги'
      },
      'posluhy': {
        pl: 'Usługi',
        en: 'Services',
        uk: 'Послуги'
      },
      'cennik': {
        pl: 'Cennik',
        en: 'Pricing',
        uk: 'Ціни'
      },
      'pricing': {
        pl: 'Cennik',
        en: 'Pricing',
        uk: 'Ціни'
      },
      'tsiny': {
        pl: 'Cennik',
        en: 'Pricing',
        uk: 'Ціни'
      },
      'kontakt': {
        pl: 'Kontakt',
        en: 'Contact',
        uk: 'Контакт'
      },
      'contact': {
        pl: 'Kontakt',
        en: 'Contact',
        uk: 'Контакт'
      },
      'tlumaczenia-na-angielski': {
        pl: 'Tłumaczenia na angielski',
        en: 'English Translations',
        uk: 'Переклад на англійську'
      },
      'pereklad-na-anhliysku': {
        pl: 'Tłumaczenia na angielski',
        en: 'English Translations',
        uk: 'Переклад на англійську'
      },
      'english-translations': {
        pl: 'Tłumaczenia na angielski',
        en: 'English Translations',
        uk: 'Переклад на англійську'
      }
    };
    
    return names[segment]?.[locale] || segment;
  };
  
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();
  
  return (
    <nav className="flex items-center space-x-1 text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <div key={item.url} className="flex items-center">
          {index === 0 ? (
            <Link href={item.url} className="flex items-center hover:text-slate-900">
              <Home className="h-4 w-4" />
            </Link>
          ) : (
            <>
              <ChevronRight className="h-4 w-4 mx-1" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-slate-900 font-medium">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-slate-900">
                  {item.name}
                </Link>
              )}
            </>
          )}
        </div>
      ))}
    </nav>
  );
}
