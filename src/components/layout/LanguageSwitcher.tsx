'use client';

import { Button } from '@/components/ui/button';
import { localeFlags, localeNames, locales, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  // Remove the current locale from pathname to get the base path
  const getLocalizedPath = (locale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    const currentLocaleIndex = locales.findIndex((l) => l === segments[0]);

    if (currentLocaleIndex !== -1) {
      // Replace current locale with new locale
      segments[0] = locale;
      return `/${segments.join('/')}`;
    }

    // If no locale in path, add it
    return `/${locale}${pathname}`;
  };

  return (
    <div className="flex items-center gap-1 md:gap-2">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link key={locale} href={getLocalizedPath(locale)}>
            <Button
              variant={isActive ? 'default' : 'ghost'}
              size="sm"
              className={cn(
                'text-sm font-medium transition-all',
                isActive && 'pointer-events-none'
              )}
              aria-label={`Switch to ${localeNames[locale]}`}
            >
              <span className="mr-1">{localeFlags[locale]}</span>
              <span className="hidden sm:inline">{localeNames[locale]}</span>
              <span className="sm:hidden">{locale.toUpperCase()}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

