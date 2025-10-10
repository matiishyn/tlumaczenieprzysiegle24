import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './i18n';

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  
  // Check for existing locale in pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameLocale) return pathnameLocale;
  
  // Try to get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Simple language matching
    for (const locale of locales) {
      if (acceptLanguage.toLowerCase().includes(locale.toLowerCase())) {
        return locale;
      }
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // has file extension
  ) {
    return NextResponse.next();
  }
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Redirect to locale-prefixed URL
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|.*\\.).*)',
  ],
};

