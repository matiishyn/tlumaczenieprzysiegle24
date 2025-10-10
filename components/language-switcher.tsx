'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Locale, locales, localeNames, defaultLocale } from '@/config/locales';

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
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={getLocalizedPath(locale)}
              className={currentLocale === locale ? 'font-semibold' : ''}
            >
              {localeNames[locale]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
