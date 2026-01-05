import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/config/locales';
import { getLocalePath } from '@/lib/i18n';
import { ArrowRight, Languages } from 'lucide-react';
import Link from 'next/link';

interface ServicesSectionProps {
  t: any;
  locale: Locale;
}

export function ServicesSection({ t, locale }: ServicesSectionProps) {
  const services = [
    {
      title: t.services.ukrainian.title,
      description: t.services.ukrainian.description,
      href: getLocalePath(
        locale,
        locale === 'pl'
          ? '/uslugi'
          : locale === 'en'
            ? '/services'
            : '/posluhy'
      ),
      flag: '🇺🇦 → 🇵🇱',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Languages className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {services.map((service) => (
            <Card key={service.href} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{service.flag}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.href}>
                    {t.common.readMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
