import type { Locale } from '@/i18n';
import { BUSINESS_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Facebook, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  locale: Locale;
  dict: {
    nav: {
      home: string;
      services: string;
      about: string;
      prices: string;
      contact: string;
      faq: string;
      ukrainianTranslation: string;
      englishTranslation: string;
    };
    footer: {
      description: string;
      quickLinks: string;
      legal: string;
      contact: string;
      followUs: string;
      privacy: string;
      cookies: string;
      terms: string;
      allRightsReserved: string;
      nip: string;
      regon: string;
    };
    payments?: {
      title: string;
      methods: string[];
    };
  };
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#prices`, label: dict.nav.prices },
    { href: `/${locale}#faq`, label: dict.nav.faq },
  ];

  const serviceLinks = [
    {
      href: `/${locale}/tlumaczenie-ukrainski`,
      label: dict.nav.ukrainianTranslation,
    },
    {
      href: `/${locale}/tlumaczenie-angielski`,
      label: dict.nav.englishTranslation,
    },
  ];

  const legalLinks = [
    {
      href: `/${locale}/polityka-prywatnosci`,
      label: dict.footer.privacy,
    },
    {
      href: `/${locale}/polityka-cookies`,
      label: dict.footer.cookies,
    },
    {
      href: `/${locale}/regulamin`,
      label: dict.footer.terms,
    },
  ];

  const socialLinks = [
    {
      href: SOCIAL_LINKS.facebook,
      icon: Facebook,
      label: 'Facebook',
      color: 'hover:text-[#1877F2]',
    },
    {
      href: SOCIAL_LINKS.whatsapp,
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'hover:text-[#25D366]',
    },
    {
      href: SOCIAL_LINKS.telegram,
      icon: Send,
      label: 'Telegram',
      color: 'hover:text-[#0088cc]',
    },
  ];

  return (
    <footer className="bg-[#283618] mt-auto text-[#FEFAE0] shadow-2xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-[#DDA15E] mb-2">Tłumaczenia24</h3>
              <p className="text-sm text-[#FEFAE0]/80">{dict.footer.description}</p>
            </div>
            <div className="text-sm space-y-1">
              <p className="font-semibold text-[#FEFAE0]">{BUSINESS_INFO.name}</p>
              <p className="text-[#FEFAE0]/70">
                {locale === 'pl' && 'Tłumacz przysięgły'}
                {locale === 'en' && 'Sworn Translator'}
                {locale === 'uk' && 'Присяжний перекладач'}
              </p>
              <p className="text-xs text-[#FEFAE0]/60 mt-2">
                {dict.footer.nip}
                <br />
                {dict.footer.regon}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#DDA15E]">{dict.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#FEFAE0]/70 hover:text-[#DDA15E] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-[#DDA15E]">{dict.footer.legal}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-[#DDA15E]">{dict.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-[#FEFAE0]/70 mb-6">
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#DDA15E] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-[#DDA15E] transition-colors"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="pt-2">
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
              </li>
            </ul>

            <div>
              <h4 className="font-semibold mb-3 text-sm text-[#DDA15E]">{dict.footer.followUs}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FEFAE0]/70 hover:text-[#DDA15E] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        {dict.payments && (
          <div className="mt-8 pt-8">
            <div className="text-center">
              <h4 className="font-semibold mb-4 text-sm text-[#DDA15E]">{dict.payments.title}</h4>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {dict.payments.methods.map((method, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-[#606C38] text-[#FEFAE0] rounded-lg text-xs font-medium hover:bg-[#4F5A2E] transition-colors shadow-md"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 text-center text-sm text-[#FEFAE0]/60">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. {dict.footer.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
}

