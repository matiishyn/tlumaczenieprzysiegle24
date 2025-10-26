'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Locale, localeNames, locales } from '@/config/locales';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const localeFlags: Record<Locale, string> = {
  pl: '🇵🇱',
  en: '🇬🇧',
  uk: '🇺🇦',
};

// Only show Polish and Ukrainian in the dropdown
const visibleLocales: Locale[] = ['pl', 'en', 'uk'];

export function LanguageSwitcher() {
  const pathname = usePathname();

  const getLocalizedPath = (locale: Locale): string => {
    if (pathname.startsWith('/en')) {
      const path = pathname.replace(/^\/en/, '');
      if (locale === 'pl') return path || '/';
      if (locale === 'uk') return `/uk${path}`;
      return `/en${path}`;
    }

    if (pathname.startsWith('/uk')) {
      const path = pathname.replace(/^\/uk/, '');
      if (locale === 'pl') return path || '/';
      if (locale === 'en') return `/en${path}`;
      return `/uk${path}`;
    }

    if (locale === 'pl') return pathname;
    if (locale === 'en') return `/en${pathname}`;
    if (locale === 'uk') return `/uk${pathname}`;

    return pathname;
  };

  const currentLocale: Locale = pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/uk')
      ? 'uk'
      : 'pl';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <span className="text-lg">{localeFlags[currentLocale]}</span>
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {visibleLocales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={getLocalizedPath(locale)}
              className={`flex items-center gap-2 ${currentLocale === locale ? 'font-semibold' : ''}`}>
              <span className="text-lg">{localeFlags[locale]}</span>
              {localeNames[locale]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
