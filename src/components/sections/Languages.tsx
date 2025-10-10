import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeftRight } from 'lucide-react';

interface LanguagesProps {
  dict: {
    languages: {
      title: string;
      subtitle: string;
      polish: string;
      english: string;
      ukrainian: string;
      combinations: string;
    };
  };
}

export function Languages({ dict }: LanguagesProps) {
  const languages = [
    { name: dict.languages.polish, flag: '🇵🇱', code: 'PL' },
    { name: dict.languages.english, flag: '🇬🇧', code: 'EN' },
    { name: dict.languages.ukrainian, flag: '🇺🇦', code: 'UK' },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F5F1E3]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-0">
            {dict.languages.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.languages.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.languages.subtitle}</p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {languages.map((lang) => (
            <Card
              key={lang.code}
              className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white shadow-md"
            >
              <CardContent className="pt-8 pb-8">
                <div className="text-6xl mb-4">{lang.flag}</div>
                <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
                <Badge variant="outline">{lang.code}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Combinations */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-background rounded-xl border shadow-sm">
            <ArrowLeftRight className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">{dict.languages.combinations}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

