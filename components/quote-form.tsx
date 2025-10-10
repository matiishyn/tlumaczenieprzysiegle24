'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    languagePair: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="languagePair">
                        {locale === 'pl'
                          ? 'Para językowa'
                          : locale === 'en'
                            ? 'Language pair'
                            : 'Мовна пара'}
                      </Label>
                      <Select
                        value={formData.languagePair}
                        onValueChange={(value) =>
                          setFormData({ ...formData, languagePair: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              locale === 'pl'
                                ? 'Wybierz parę językową'
                                : locale === 'en'
                                  ? 'Select language pair'
                                  : 'Виберіть мовну пару'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pl-uk">
                            {locale === 'pl'
                              ? 'Polski → Ukraiński'
                              : locale === 'en'
                                ? 'Polish → Ukrainian'
                                : 'Польська → Українська'}
                          </SelectItem>
                          <SelectItem value="uk-pl">
                            {locale === 'pl'
                              ? 'Ukraiński → Polski'
                              : locale === 'en'
                                ? 'Ukrainian → Polish'
                                : 'Українська → Польська'}
                          </SelectItem>
                          <SelectItem value="pl-en">
                            {locale === 'pl'
                              ? 'Polski → Angielski'
                              : locale === 'en'
                                ? 'Polish → English'
                                : 'Польська → Англійська'}
                          </SelectItem>
                          <SelectItem value="en-pl">
                            {locale === 'pl'
                              ? 'Angielski → Polski'
                              : locale === 'en'
                                ? 'English → Polish'
                                : 'Англійська → Польська'}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="files">
                        {locale === 'pl'
                          ? 'Dokumenty do przetłumaczenia'
                          : locale === 'en'
                            ? 'Documents to translate'
                            : 'Документи для перекладу'}
                      </Label>
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
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
                          <Upload className="h-10 w-10 text-slate-400 mb-2" />
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
                        <div className="mt-4 space-y-2">
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

                    <Button
                      type="button"
                      className="w-full"
                      onClick={() => setStep(2)}
                      disabled={!formData.languagePair || files.length === 0}
                    >
                      {locale === 'pl'
                        ? 'Dalej'
                        : locale === 'en'
                          ? 'Next'
                          : 'Далі'}
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
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
                          className="text-blue-600 hover:underline">
                          {t.contact.form.privacyPolicy}
                        </Link>
                      </label>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setStep(1)}
                      >
                        {locale === 'pl' ? 'Wstecz' : locale === 'en' ? 'Back' : 'Назад'}
                      </Button>
                      <Button type="submit" className="w-full">
                        {locale === 'pl'
                          ? 'Wyślij zapytanie'
                          : locale === 'en'
                            ? 'Send request'
                            : 'Надіслати запит'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
