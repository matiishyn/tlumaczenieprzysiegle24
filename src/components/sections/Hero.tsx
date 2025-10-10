import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle2, Clock } from 'lucide-react';

interface HeroProps {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
      ctaSecondary: string;
      trusted: string;
      experience: string;
      certified: string;
    };
  };
  locale: string;
}

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#FEFAE0] via-[#F5F1E3] to-[#FEFAE0] py-20 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#606C38_1px,transparent_1px)] [background-size:20px_20px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-2 bg-primary text-white border-0">
                <Award className="h-3 w-3 mr-1" />
                {dict.hero.certified}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {dict.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                {dict.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                {dict.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`/${locale}#contact`}>
                <Button size="xl" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                  {dict.hero.cta}
                </Button>
              </a>
              <a href={`/${locale}#prices`}>
                <Button size="xl" variant="outline" className="w-full sm:w-auto border-2 hover:bg-slate-50">
                  {dict.hero.ctaSecondary}
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{dict.hero.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{dict.hero.trusted}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl bg-white p-8 shadow-2xl">
              {/* Placeholder for professional image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="mx-auto w-48 h-48 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-lg">
                    <div className="text-6xl">👩‍💼</div>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full border shadow-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">2-3 {locale === 'pl' ? 'dni' : locale === 'en' ? 'days' : 'дні'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-xs text-muted-foreground">
                  {locale === 'pl' ? 'Dokumentów' : locale === 'en' ? 'Documents' : 'Документів'}
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#DDA15E]">★</span>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-1">5.0 Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

