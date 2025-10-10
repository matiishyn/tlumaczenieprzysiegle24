import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { Briefcase, Car, CheckCircle, FileText, GraduationCap, Heart, Shield } from 'lucide-react';

interface ServicesProps {
  dict: {
    services: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        description: string;
        price: string;
      }>;
    };
  };
}

const iconMap: { [key: number]: LucideIcon } = {
  0: Heart,
  1: GraduationCap,
  2: GraduationCap,
  3: GraduationCap,
  4: CheckCircle,
  5: FileText,
  6: Car,
  7: Shield,
  8: Heart,
  9: Shield,
  10: Briefcase,
};

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-[#FEFAE0] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
            {dict.services.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="prices">
          {dict.services.items.map((service, index) => {
            const Icon = iconMap[index] || FileText;
            return (
              <Card
                key={index}
                className="transition-all hover:shadow-xl hover:scale-105 duration-300 bg-white shadow-md"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary mb-2">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge className="font-bold bg-primary/10 text-primary">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-lg">
            <CheckCircle className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">
              {dict.services.items[0]?.price.includes('from') || dict.services.items[0]?.price.includes('od') || dict.services.items[0]?.price.includes('від')
                ? (dict.services.items[0]?.price.includes('від') ? 'Всі ціни вказані за стандартну сторінку (1800 символів)' : dict.services.items[0]?.price.includes('from') ? 'All prices are per standard page (1800 characters)' : 'Wszystkie ceny podane za stronę standardową (1800 znaków)')
                : 'Standard pricing applies'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

