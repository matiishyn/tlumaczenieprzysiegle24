'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Locale } from '@/config/locales';
import { getLocalePath } from '@/lib/i18n';
import Link from 'next/link';

interface ContactSectionProps {
  t: any;
  locale: Locale;
}

export function ContactSection({ t, locale }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const privacyLink = getLocalePath(
    locale,
    locale === 'pl'
      ? '/polityka-prywatnosci'
      : locale === 'en'
      ? '/privacy-policy'
      : '/polityka-pryvatnosti'
  );

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.787!2d19.9368!3d50.0647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAzJzUzLjAiTiAxOcKwNTYnMTIuNSJF!5e0!3m2!1sen!2spl!4v1234567890"
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

          <Card>
            <CardHeader>
              <CardTitle>{t.contact.form.title}</CardTitle>
              <CardDescription>
                {locale === 'pl'
                  ? 'Skontaktuj się z nami, odpowiemy najszybciej jak to możliwe'
                  : locale === 'en'
                  ? 'Contact us, we will respond as soon as possible'
                  : "Зв'яжіться з нами, ми відповімо якнайшвидше"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contact.form.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-slate-600 leading-tight"
                  >
                    {t.contact.form.consent}{' '}
                    <Link
                      href={privacyLink}
                      className="text-blue-600 hover:underline"
                      legacyBehavior>
                      {t.contact.form.privacyPolicy}
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  {t.contact.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
