import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface FAQProps {
  dict: {
    faq: {
      title: string;
      subtitle: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
}

export function FAQ({ dict }: FAQProps) {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white border-0 shadow-lg">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.faq.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {dict.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 mb-4 rounded-lg border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

