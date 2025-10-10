import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, FileText, Package, Search } from 'lucide-react';

interface HowItWorksProps {
  dict: {
    howItWorks: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export function HowItWorks({ dict }: HowItWorksProps) {
  const icons = [FileText, Package, Search, CheckCircle2];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
            {dict.howItWorks.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {dict.howItWorks.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.howItWorks.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {dict.howItWorks.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={index}
                className="relative transition-all duration-300 hover:shadow-xl group bg-white shadow-md"
              >
                <CardContent className="pt-12 pb-8 px-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Connecting Line (desktop only) */}
        <div className="hidden lg:block relative -mt-72 mb-72 max-w-7xl mx-auto px-4">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ top: '2rem' }}></div>
        </div>
      </div>
    </section>
  );
}

