'use client';

import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/config/locales';
import { siteConfig } from '@/config/site';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  t: any;
  locale: Locale;
}

export function ContactSection({ t, locale }: ContactSectionProps) {

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  {t.contact.address}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  {siteConfig.business.address.street}
                  <br />
                  {siteConfig.business.address.postalCode}{' '}
                  {siteConfig.business.address.city}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-green-600" />
                  {t.contact.phone}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="text-slate-600 hover:text-slate-900"
                >
                  {siteConfig.business.phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-orange-600" />
                  {t.contact.email}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="text-slate-600 hover:text-slate-900"
                >
                  {siteConfig.business.email}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-purple-600" />
                  {t.contact.hours}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{siteConfig.business.hours}</p>
              </CardContent>
            </Card>

            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.3682925584146!2d19.9306384675399!3d50.03503152538988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165c9fcbafc82f%3A0xcc1b23106e4e818c!2zUnlkbMOzd2thIDQyQi8yOCwgMzAtMzYzIEtyYWvDs3c!5e0!3m2!1sen!2spl!4v1767635637373!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Kraków"
              ></iframe>
               
              
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>{t.contact.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <QuoteForm locale={locale} t={t} compact />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
