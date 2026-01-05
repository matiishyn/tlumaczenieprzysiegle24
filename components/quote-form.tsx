'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Locale } from '@/config/locales';
import { getLocalePath } from '@/lib/i18n';
import { FileText, Upload } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface QuoteFormProps {
  locale: Locale;
  t: any;
}

export function QuoteForm({ locale, t }: QuoteFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        });
        setFiles([]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
    <section
      id={locale === 'pl' ? 'wycena' : locale === 'en' ? 'quote' : 'otsinka'}
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                {locale === 'pl'
                  ? 'Bezpłatna wycena online'
                  : locale === 'en'
                    ? 'Free online quote'
                    : 'Безкоштовна оцінка онлайн'}
              </CardTitle>
              <CardDescription>
                {locale === 'pl'
                  ? 'Wyślij dokument i otrzymaj wycenę w ciągu kilku godzin'
                  : locale === 'en'
                    ? 'Send your document and receive a quote within hours'
                    : 'Надішліть документ і отримайте оцінку протягом кількох годин'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    {locale === 'pl'
                      ? '✅ Zapytanie wysłane pomyślnie! Skontaktujemy się wkrótce.'
                      : locale === 'en'
                        ? '✅ Request sent successfully! We will contact you soon.'
                        : '✅ Запит надіслано успішно! Ми зв\'яжемося з вами найближчим часом.'}
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    {locale === 'pl'
                      ? '❌ Wystąpił błąd. Spróbuj ponownie lub zadzwoń: +48 731 534 730'
                      : locale === 'en'
                        ? '❌ An error occurred. Please try again or call: +48 731 534 730'
                        : '❌ Сталася помилка. Спробуйте ще раз або зателефонуйте: +48 731 534 730'}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={
                        locale === 'pl'
                          ? 'Imię i nazwisko'
                          : locale === 'en'
                            ? 'Full name'
                            : "Ім'я та прізвище"
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
                      placeholder="email@example.com"
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
                      placeholder="+48 123 456 789"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {locale === 'pl'
                        ? 'Wiadomość'
                        : locale === 'en'
                          ? 'Message'
                          : 'Повідомлення'}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={
                        locale === 'pl'
                          ? 'Opisz rodzaj dokumentu i dodatkowe informacje...'
                          : locale === 'en'
                            ? 'Describe the document type and additional information...'
                            : 'Опишіть тип документа та додаткову інформацію...'
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="files">
                      {locale === 'pl'
                        ? 'Dokumenty do przetłumaczenia (opcjonalne)'
                        : locale === 'en'
                          ? 'Documents to translate (optional)'
                          : 'Документи для перекладу (необов\'язково)'}
                    </Label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        id="files"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="files"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="h-8 w-8 text-slate-400 mb-2" />
                        <span className="text-sm text-slate-600">
                          {locale === 'pl'
                            ? 'Kliknij lub przeciągnij pliki'
                            : locale === 'en'
                              ? 'Click or drag files'
                              : 'Клацніть або перетягніть файли'}
                        </span>
                        <span className="text-xs text-slate-500 mt-1">
                          PDF, JPG, PNG {locale === 'pl' ? 'do' : locale === 'en' ? 'up to' : 'до'}{' '}
                          20MB
                        </span>
                      </label>
                    </div>
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center p-2 bg-slate-50 rounded"
                          >
                            <FileText className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="text-sm text-slate-700 truncate">
                              {file.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
                        className="text-blue-600 hover:underline">
                        {t.contact.form.privacyPolicy}
                      </Link>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting || !formData.consent}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">⏳</span>
                        {locale === 'pl'
                          ? 'Wysyłanie...'
                          : locale === 'en'
                            ? 'Sending...'
                            : 'Надсилання...'}
                      </>
                    ) : (
                      <>
                        {locale === 'pl'
                          ? 'Wyślij zapytanie'
                          : locale === 'en'
                            ? 'Send request'
                            : 'Надіслати запит'}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
