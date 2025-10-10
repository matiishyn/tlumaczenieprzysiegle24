import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  dict: {
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        text: string;
        rating: number;
        date: string;
      }>;
    };
  };
}

export function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 text-white border-0 shadow-lg">
            {dict.testimonials.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.testimonials.items.map((testimonial, index) => {
            const cardColors = [
              'bg-gradient-to-br from-blue-50 to-cyan-50 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-300/50 border-2 border-blue-200',
              'bg-gradient-to-br from-purple-50 to-pink-50 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-300/50 border-2 border-purple-200',
              'bg-gradient-to-br from-green-50 to-emerald-50 hover:border-green-400 hover:shadow-2xl hover:shadow-green-300/50 border-2 border-green-200',
              'bg-gradient-to-br from-amber-50 to-orange-50 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-300/50 border-2 border-amber-200',
            ];
            return (
              <Card key={index} className={`relative hover:scale-105 transition-all duration-300 ${cardColors[index % 4]}`}>
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            )
          }
          )}
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted rounded-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold">5.0</div>
              <div className="text-xs text-muted-foreground">Google {dict.testimonials.title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

