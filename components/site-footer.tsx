import { Locale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { getLocalePath } from '@/lib/i18n';
import { Facebook, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';

interface SiteFooterProps {
  locale: Locale;
  t: any;
}

export function SiteFooter({ locale, t }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: getLocalePath(locale, '/'), label: t.nav.home },
    { href: getLocalePath(locale, locale === 'pl' ? '/uslugi' : locale === 'en' ? '/services' : '/posluhy'), label: t.nav.services },
    { href: getLocalePath(locale, locale === 'pl' ? '/cennik' : locale === 'en' ? '/pricing' : '/tsiny'), label: t.nav.pricing },
    { href: getLocalePath(locale, locale === 'pl' ? '/o-mnie' : locale === 'en' ? '/about' : '/pro-mene'), label: t.nav.about },
    { href: getLocalePath(locale, locale === 'pl' ? '/kontakt' : '/contact'), label: t.nav.contact },
  ];

  const legalLinks = [
    { href: getLocalePath(locale, locale === 'pl' ? '/polityka-prywatnosci' : locale === 'en' ? '/privacy-policy' : '/polityka-pryvatnosti'), label: locale === 'pl' ? 'Polityka prywatności' : locale === 'en' ? 'Privacy Policy' : 'Політика конфіденційності' },
    { href: getLocalePath(locale, locale === 'pl' ? '/regulamin' : locale === 'en' ? '/terms' : '/rehulyamin'), label: locale === 'pl' ? 'Regulamin' : locale === 'en' ? 'Terms of Service' : 'Регламент' },
    { href: getLocalePath(locale, locale === 'pl' ? '/polityka-cookies' : locale === 'en' ? '/cookie-policy' : '/polityka-cookies'), label: locale === 'pl' ? 'Polityka cookies' : locale === 'en' ? 'Cookie Policy' : 'Політика cookies' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.businessInfo}</h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-white">{siteConfig.business.name}</p>
              <p>{siteConfig.business.legalForm}</p>
              <p>{siteConfig.business.address.street}</p>
              <p>
                {siteConfig.business.address.postalCode} {siteConfig.business.address.city}
              </p>
              <p>
                {locale === 'pl' ? 'Lista tłumaczy przysięgłych MS' : locale === 'en' ? 'MoJ sworn translators list' : 'Список присяжних перекладачів МС'}:{' '}
                <span className="text-white">{siteConfig.business.mojNumber}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact.title}</h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.business.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.business.email}
                </a>
              </p>
              <p className="pt-2">{siteConfig.business.hours}</p>
              <div className="flex space-x-4 pt-4">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={`https://wa.me/${siteConfig.social.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={`https://t.me/${siteConfig.social.telegram.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {currentYear} {siteConfig.business.name}. {t.footer.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
}
