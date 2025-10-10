import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogProps {
  dict: {
    blog: {
      title: string;
      subtitle: string;
      readMore: string;
      posts: Array<{
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        category: string;
      }>;
    };
  };
  locale: string;
}

export function Blog({ dict, locale }: BlogProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white border-0 shadow-lg">
            {dict.blog.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.blog.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dict.blog.posts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 bg-gradient-to-br from-white to-blue-50"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="border-primary/30">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80"
                  >
                    {dict.blog.readMore}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 hover:bg-primary hover:text-white transition-all"
          >
            {locale === 'pl' ? 'Zobacz wszystkie artykuły' :
              locale === 'uk' ? 'Переглянути всі статті' :
                'View all articles'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

