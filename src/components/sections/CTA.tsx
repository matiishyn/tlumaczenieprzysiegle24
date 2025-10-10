import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  dict: {
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  locale: string;
}

export function CTA({ dict, locale }: CTAProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-violet-200 via-purple-200 to-fuchsia-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {dict.cta.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {dict.cta.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/${locale}#contact`}>
              <Button size="xl" className="group">
                {dict.cta.button}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

