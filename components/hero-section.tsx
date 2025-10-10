import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Award, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  t: any;
  locale: string;
}

export function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <a href={`#${locale === 'pl' ? 'wycena' : locale === 'en' ? 'quote' : 'otsinka'}`}>
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href={`#${locale === 'pl' ? 'cennik' : locale === 'en' ? 'pricing' : 'tsiny'}`}>
                  {t.hero.ctaSecondary}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">24-48h</p>
                  <p className="text-sm text-slate-600">
                    {locale === 'pl' ? 'Realizacja' : locale === 'en' ? 'Delivery' : 'Виконання'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    {locale === 'pl' ? 'Certyfikat' : locale === 'en' ? 'Certified' : 'Сертифікат'}
                  </p>
                  <p className="text-sm text-slate-600">
                    {locale === 'pl' ? 'Lista MS' : locale === 'en' ? 'MoJ list' : 'Список МС'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    {locale === 'pl' ? 'Kraków' : locale === 'en' ? 'Kraków' : 'Краків'}
                  </p>
                  <p className="text-sm text-slate-600">
                    {locale === 'pl' ? 'Odbiór osobisty' : locale === 'en' ? 'Personal pickup' : 'Особистий самовивіз'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-slate-500 text-sm">
                  {locale === 'pl' ? 'Zdjęcie w przygotowaniu' : locale === 'en' ? 'Photo placeholder' : 'Фото у розробці'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
