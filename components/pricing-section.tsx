import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Info } from 'lucide-react';

interface PricingSectionProps {
  t: any;
  locale: string;
}

export function PricingSection({ t, locale }: PricingSectionProps) {
  // Convert documents object to array for mapping
  const documentsArray = Object.entries(t.pricing.documents).map(([key, doc]: [string, any]) => ({
    id: key,
    name: doc.name,
    price: doc.price,
    description: doc.description,
  }));

  return (
    <section id={locale === 'pl' ? 'cennik' : locale === 'en' ? 'pricing' : 'tsiny'} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Document Types Table */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-8">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 text-center">
                {t.pricing.tableHeaders.documentType} • {t.pricing.tableHeaders.priceFrom} • {t.pricing.tableHeaders.description}
              </h3>
            </div>
            <div className="divide-y divide-slate-200">
              {documentsArray.map((doc) => (
                <div key={doc.id} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="font-medium text-slate-900">{doc.name}</div>
                    <div className="text-lg font-bold text-green-600 text-center md:text-left">{doc.price}</div>
                    <div className="text-sm text-slate-600">{doc.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Express Service Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start">
            <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-700 font-medium">{t.pricing.expressService}</p>
          </div>

          {/* Additional Services */}
          <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-200">
            <CardHeader>
              <CardTitle>{t.pricing.extras}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">{t.pricing.express24}</span>
                <span className="font-semibold text-slate-900">+50%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">{t.pricing.express48}</span>
                <span className="font-semibold text-slate-900">+30%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">{t.pricing.extraCopy}</span>
                <span className="font-semibold text-slate-900">+20 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">{t.pricing.notarizedCopy}</span>
                <span className="font-semibold text-slate-900">+30 zł</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-700">{t.pricing.courier}</span>
                <span className="font-semibold text-slate-900">20-25 zł</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
