import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Facebook, MessageCircle, Send } from 'lucide-react';

interface SocialProps {
  dict: {
    social: {
      title: string;
      subtitle: string;
      facebook: string;
      whatsapp: string;
      telegram: string;
      viber: string;
    };
  };
}

export function Social({ dict }: SocialProps) {
  const socialPlatforms = [
    {
      name: dict.social.whatsapp,
      icon: MessageCircle,
      href: SOCIAL_LINKS.whatsapp,
      color: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
    },
    {
      name: dict.social.telegram,
      icon: Send,
      href: SOCIAL_LINKS.telegram,
      color: 'hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc]',
    },
    {
      name: dict.social.viber,
      icon: MessageCircle,
      href: SOCIAL_LINKS.viber,
      color: 'hover:bg-[#7360f2] hover:text-white hover:border-[#7360f2]',
    },
    {
      name: dict.social.facebook,
      icon: Facebook,
      href: SOCIAL_LINKS.facebook,
      color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-600 text-white border-0 shadow-lg">
            {dict.social.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.social.title}</h2>
          <p className="text-lg text-muted-foreground">{dict.social.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className={`transition-all duration-300 ${platform.color}`}
              >
                <platform.icon className="mr-2 h-5 w-5" />
                {platform.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

