import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
  t: any;
  locale: string;
}

export function ReviewsSection({ t, locale }: ReviewsSectionProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.reviews.subtitle}
          </p>
          <p className="text-lg text-slate-500 mt-4 max-w-4xl mx-auto">
            {t.reviews.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.reviews.items.map((review: any, index: number) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
