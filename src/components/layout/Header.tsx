'use client';

import { Button } from '@/components/ui/button';
import type { Locale } from '@/i18n';
import { BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Mail, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
  locale: Locale;
  dict: {
    nav: {
      home: string;
      services: string;
      about: string;
      prices: string;
      contact: string;
      faq: string;
    };
  };
}

export function Header({ locale, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#prices`, label: dict.nav.prices },
    { href: `/${locale}#faq`, label: dict.nav.faq },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-primary/5'
          : 'bg-background/80 backdrop-blur-md'
      )}
    >
      {/* Top bar with contact info */}
      <div className="hidden lg:block border-b bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary">
                Tłumaczenia24
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                {locale === 'pl' && 'Tłumacz przysięgły'}
                {locale === 'en' && 'Sworn Translator'}
                {locale === 'uk' && 'Присяжний перекладач'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button, Theme & Language Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitcher />
            <div className="lg:hidden">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t mt-4">
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 px-4 py-2 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 px-4 py-2 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

