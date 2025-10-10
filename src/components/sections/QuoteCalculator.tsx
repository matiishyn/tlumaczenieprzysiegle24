'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BUSINESS_INFO } from '@/lib/constants';
import { Calculator, FileText, Languages, Zap } from 'lucide-react';
import { useState } from 'react';

interface QuoteCalculatorProps {
  dict: {
    quoteCalculator: {
      title: string;
      subtitle: string;
      documentType: string;
      languagePair: string;
      pageCount: string;
      urgency: string;
      estimatedPrice: string;
      from: string;
      pages: string;
      standard: string;
      express: string;
      getQuote: string;
      whatsappMessage: string;
      documentTypes: Record<string, string>;
      languages: Record<string, string>;
    };
  };
  locale: string;
}

export function QuoteCalculator({ dict, locale }: QuoteCalculatorProps) {
  const [documentType, setDocumentType] = useState('birth-certificate');
  const [languagePair, setLanguagePair] = useState('uk-pl');
  const [pageCount, setPageCount] = useState(1);
  const [isExpress, setIsExpress] = useState(false);

  const basePrices: Record<string, number> = {
    'birth-certificate': 90,
    'marriage-certificate': 90,
    'school-certificate': 80,
    'school-supplement': 120,
    'diploma-supplement': 180,
    'apostille': 80,
    'drivers-license': 80,
    'police-clearance': 80,
    'vaccination-card': 180,
    'insurance-policy': 80,
    'other': 100,
  };

  const calculatePrice = () => {
    const basePrice = basePrices[documentType] || 100;
    let total = basePrice;

    // Add pages if more than 1
    if (pageCount > 1) {
      total += (pageCount - 1) * 50; // 50 PLN per additional page
    }

    // Express service adds 50%
    if (isExpress) {
      total = total * 1.5;
    }

    return Math.round(total);
  };

  const estimatedPrice = calculatePrice();

  const handleGetQuote = () => {
    const message = `${dict.quoteCalculator.whatsappMessage}
${dict.quoteCalculator.documentType}: ${dict.quoteCalculator.documentTypes[documentType]}
${dict.quoteCalculator.languagePair}: ${dict.quoteCalculator.languages[languagePair]}
${dict.quoteCalculator.pageCount}: ${pageCount}
${dict.quoteCalculator.urgency}: ${isExpress ? dict.quoteCalculator.express : dict.quoteCalculator.standard}
${dict.quoteCalculator.estimatedPrice}: ${estimatedPrice} PLN`;

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#FEFAE0] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-0">
            <Calculator className="h-4 w-4 mr-2" />
            {dict.quoteCalculator.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.quoteCalculator.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.quoteCalculator.subtitle}</p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-primary" />
              {dict.quoteCalculator.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Document Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <FileText className="h-4 w-4" />
                {dict.quoteCalculator.documentType}
              </label>
              <select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="w-full p-3 rounded-lg bg-muted focus:ring-2 focus:ring-primary/20 transition-all"
              >
                {Object.entries(dict.quoteCalculator.documentTypes).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Pair */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Languages className="h-4 w-4" />
                {dict.quoteCalculator.languagePair}
              </label>
              <select
                value={languagePair}
                onChange={(e) => setLanguagePair(e.target.value)}
                className="w-full p-3 rounded-lg bg-muted focus:ring-2 focus:ring-primary/20 transition-all"
              >
                {Object.entries(dict.quoteCalculator.languages).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            {/* Page Count */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                {dict.quoteCalculator.pageCount}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {pageCount} {dict.quoteCalculator.pages}
                </Badge>
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="text-sm font-medium mb-2 block">
                {dict.quoteCalculator.urgency}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIsExpress(false)}
                  className={`p-4 border-2 rounded-lg transition-all ${!isExpress
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="text-center">
                    <div className="font-semibold">{dict.quoteCalculator.standard}</div>
                    <div className="text-sm text-muted-foreground">2-3 {dict.quoteCalculator.pages.toLowerCase()}</div>
                  </div>
                </button>
                <button
                  onClick={() => setIsExpress(true)}
                  className={`p-4 border-2 rounded-lg transition-all ${isExpress
                    ? 'border-orange-500 bg-orange-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 font-semibold text-orange-600">
                      <Zap className="h-4 w-4" />
                      {dict.quoteCalculator.express}
                    </div>
                    <div className="text-sm text-muted-foreground">24h (+50%)</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Estimated Price */}
            <div className="bg-primary/5 p-6 rounded-lg shadow-inner">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  {dict.quoteCalculator.estimatedPrice}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {dict.quoteCalculator.from} {estimatedPrice} PLN
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {locale === 'pl' ? 'Ostateczna cena może się różnić w zależności od dokumentu' :
                    locale === 'uk' ? 'Остаточна ціна може відрізнятися залежно від документа' :
                      'Final price may vary depending on the document'}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="w-full shadow-lg"
            >
              {dict.quoteCalculator.getQuote}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

