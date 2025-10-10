import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BUSINESS_INFO } from '@/lib/constants';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { WorkingHoursWidget } from './WorkingHours';

interface ContactProps {
  dict: {
    contact: {
      title: string;
      subtitle: string;
      name: string;
      position: string;
      email: string;
      phone: string;
      address: string;
      hours: string;
      hoursValue: string;
      sendMessage: string;
      getQuote: string;
      callNow: string;
      sendWhatsApp: string;
      description: string;
    };
    workingHours?: {
      title: string;
      status: {
        online: string;
        offline: string;
        available: string;
      };
      schedule: string;
      response: string;
    };
  };
}

export function Contact({ dict }: ContactProps) {
  const contactMethods = [
    {
      icon: Phone,
      label: dict.contact.phone,
      value: BUSINESS_INFO.phoneFormatted,
      href: `tel:${BUSINESS_INFO.phone}`,
      action: dict.contact.callNow,
    },
    {
      icon: Mail,
      label: 'Email',
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      action: dict.contact.sendMessage,
    },
    {
      icon: MapPin,
      label: dict.contact.address,
      value: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}`,
      href: `https://maps.google.com/?q=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}`,
      action: null,
    },
    {
      icon: Clock,
      label: dict.contact.hours,
      value: dict.contact.hoursValue,
      href: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white border-0 shadow-lg">
            {dict.contact.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-2">{dict.contact.name}</h3>
              <p className="text-muted-foreground mb-6">{dict.contact.position}</p>
              <p className="text-sm text-muted-foreground mb-6">{dict.contact.description}</p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.icon === MapPin ? '_blank' : undefined}
                          rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            {/* Working Hours Widget */}
            {dict.workingHours && <WorkingHoursWidget dict={{ workingHours: dict.workingHours }} />}

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{dict.contact.getQuote}</h3>
                  <p className="text-sm text-muted-foreground">
                    {dict.contact.description}
                  </p>
                </div>

                <a href={`tel:${BUSINESS_INFO.phone}`} className="block">
                  <Button size="lg" className="w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    {dict.contact.callNow}
                  </Button>
                </a>

                <a href={`https://wa.me/${BUSINESS_INFO.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" variant="outline" className="w-full">
                    <MessageCircleIcon className="mr-2 h-5 w-5" />
                    {dict.contact.sendWhatsApp}
                  </Button>
                </a>

                <a href={`mailto:${BUSINESS_INFO.email}`} className="block">
                  <Button size="lg" variant="outline" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    {dict.contact.sendMessage}
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <a
                  href={`https://maps.google.com/?q=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative hover:opacity-90 transition-opacity"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 text-primary mx-auto" />
                      <p className="text-sm font-medium">
                        {BUSINESS_INFO.address.city}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {dict.contact.address.includes('Click') || dict.contact.address.includes('Натисніть') || dict.contact.address.includes('Kliknij') ? dict.contact.address : 'Click to open in Google Maps'}
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Message Circle Icon component
function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

