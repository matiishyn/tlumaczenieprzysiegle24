'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ReviewsSectionProps {
  t: any;
  locale: string;
}

export function ReviewsSection({ t, locale }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === t.reviews.items.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, t.reviews.items.length]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === t.reviews.items.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? t.reviews.items.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

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

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="relative">
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6 md:p-12">
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current mx-1" />
                  ))}
                </div>
                
                <blockquote className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed text-center mb-6 md:mb-8 italic">
                  "{t.reviews.items[currentIndex].text}"
                </blockquote>
                
                <div className="text-center">
                  <p className="font-semibold text-slate-900 text-base md:text-lg mb-1">
                    {t.reviews.items[currentIndex].name}
                  </p>
                  <p className="text-sm md:text-base text-slate-500">
                    {t.reviews.items[currentIndex].location}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows - Larger on mobile for better touch */}
            <button
              onClick={prevReview}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors z-10"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6 md:h-5 md:w-5 text-slate-600" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 active:bg-slate-100 transition-colors z-10"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6 md:h-5 md:w-5 text-slate-600" />
            </button>
          </div>

          {/* Dots Indicator - Larger on mobile for better touch */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-3 md:space-x-2">
            {t.reviews.items.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-500 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Review Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-slate-500">
              {currentIndex + 1} / {t.reviews.items.length}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
