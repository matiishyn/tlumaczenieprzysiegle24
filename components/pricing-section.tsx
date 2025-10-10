import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Info } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface PricingSectionProps {
  t: any;
  locale: string;
}

export function PricingSection({ t, locale }: PricingSectionProps) {
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
          <p className="text-lg text-slate-600">{t.pricing.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start">
            <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-700">{t.pricing.pageInfo}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {siteConfig.pricing.services.map((service) => (
              <Card key={service.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base leading-snug">
                    {t.pricing[service.nameKey]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-slate-900">
                    {service.priceFrom ? (
                      <>
                        {t.pricing.priceFrom} {service.priceFrom} zł
                      </>
                    ) : (
                      t.pricing.individual
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

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
