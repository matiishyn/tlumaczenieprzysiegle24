'use client';

import { LanguageSwitcher } from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import { Locale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getLocalePath } from '@/lib/i18n';
import { Mail, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface SiteHeaderProps {
  locale: Locale;
  t: any;
}

export function SiteHeader({ locale, t }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: getLocalePath(locale, locale === 'pl' ? '/uslugi' : locale === 'en' ? '/services' : '/posluhy'), label: t.nav.services },
    { href: getLocalePath(locale, locale === 'pl' ? '/cennik' : locale === 'en' ? '/pricing' : '/tsiny'), label: t.nav.pricing },
    { href: getLocalePath(locale, locale === 'pl' ? '/o-mnie' : locale === 'en' ? '/about' : '/pro-mene'), label: t.nav.about },
    { href: getLocalePath(locale, locale === 'pl' ? '/kontakt' : locale === 'en' ? '/contact' : '/kontakt'), label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={getLocalePath(locale, '/')}
            className="flex items-center">
            <Image
              src="/logo.svg"
              alt={siteConfig.business.name}
              width={155}
              height={47}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-900 text-slate-600">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="flex items-center text-sm text-slate-600 hover:text-slate-900"
            >
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.business.phone}
            </a>
            <LanguageSwitcher />
            <Button asChild size="sm">
              <a href={`#${locale === 'pl' ? 'wycena' : locale === 'en' ? 'quote' : 'otsinka'}`}>
                {t.hero.cta}
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-slate-900 text-slate-600"
                  onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t space-y-2">
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="flex items-center text-sm text-slate-600"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.business.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-center text-sm text-slate-600"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {siteConfig.business.email}
                </a>
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
