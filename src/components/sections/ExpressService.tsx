import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Zap } from 'lucide-react';

interface ExpressServiceProps {
  dict: {
    express: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      cta: string;
      hours: string;
    };
  };
  locale: string;
}

export function ExpressService({ dict, locale }: ExpressServiceProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#BC6C25]/10 to-[#DDA15E]/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-[#BC6C25] flex items-center justify-center shadow-lg animate-pulse">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-[#BC6C25] text-white border-0 shadow-lg">
                    24H
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                  <Badge className="bg-[#BC6C25] text-white border-0 text-lg px-4 py-1">
                    <Zap className="h-4 w-4 mr-1" />
                    {dict.express.title}
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {dict.express.subtitle}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {dict.express.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                  {dict.express.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="border-orange-300">
                      <Clock className="h-3 w-3 mr-1" />
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a href={`/${locale}#contact`}>
                  <Button size="lg" className="bg-[#BC6C25] hover:bg-[#A05A1F] text-white shadow-lg">
                    <Zap className="mr-2 h-5 w-5" />
                    {dict.express.cta}
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

