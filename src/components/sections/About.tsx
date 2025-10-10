import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckCircle2, GraduationCap, Shield } from 'lucide-react';

interface AboutProps {
  dict: {
    about: {
      title: string;
      subtitle: string;
      description: string;
      credentials: string;
      registration: string;
      ministry: string;
      insurance: string;
      languages_certified: string;
    };
    certifications?: {
      title: string;
      items: string[];
    };
  };
}

export function About({ dict }: AboutProps) {
  const credentials = [
    {
      icon: Award,
      title: dict.about.ministry,
      description: dict.about.registration,
    },
    {
      icon: Shield,
      title: dict.about.insurance,
      description: dict.about.languages_certified,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Credentials */}
          <div className="space-y-6">
            {/* Placeholder for professional photo */}
            <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 border-2 border-primary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-4 border-background shadow-xl">
                    <div className="text-7xl">👩‍⚖️</div>
                  </div>
                  <div className="space-y-2 px-6">
                    <Badge variant="default" className="text-sm">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {dict.about.subtitle}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <cred.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-1 text-sm">{cred.title}</h4>
                    <p className="text-xs text-muted-foreground">{cred.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white border-0 shadow-lg">
                {dict.about.title}
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {dict.about.title}
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              {dict.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  {dict.about.description.includes('10') ? '10+' : '10'}{' '}
                  {dict.about.description.includes('years') ? 'years' : dict.about.description.includes('років') ? 'років' : 'lat'}{' '}
                  {dict.about.description.includes('experience') ? 'of experience' : dict.about.description.includes('досвіду') ? 'досвіду' : 'doświadczenia'}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">{dict.about.credentials}: {dict.about.registration}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">{dict.about.insurance}</p>
              </div>
            </div>

            {/* Certifications */}
            {dict.certifications && (
              <div className="pt-6 mt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {dict.certifications.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dict.certifications.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border border-primary/20"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

