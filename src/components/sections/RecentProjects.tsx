import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Languages } from 'lucide-react';

interface RecentProjectsProps {
  dict: {
    recentProjects: {
      title: string;
      subtitle: string;
      projects: Array<{
        title: string;
        description: string;
        language: string;
        time: string;
        type: string;
      }>;
    };
  };
}

export function RecentProjects({ dict }: RecentProjectsProps) {
  const typeColors: Record<string, string> = {
    'Edukacja': 'bg-blue-100 text-blue-700 border-blue-300',
    'Education': 'bg-blue-100 text-blue-700 border-blue-300',
    'Освіта': 'bg-blue-100 text-blue-700 border-blue-300',
    'Dokumenty cywilne': 'bg-green-100 text-green-700 border-green-300',
    'Civil documents': 'bg-green-100 text-green-700 border-green-300',
    'Цивільні документи': 'bg-green-100 text-green-700 border-green-300',
    'Biznes': 'bg-purple-100 text-purple-700 border-purple-300',
    'Business': 'bg-purple-100 text-purple-700 border-purple-300',
    'Бізнес': 'bg-purple-100 text-purple-700 border-purple-300',
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0 shadow-lg">
            {dict.recentProjects.title}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.recentProjects.title}
          </h2>
          <p className="text-lg text-muted-foreground">{dict.recentProjects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dict.recentProjects.projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white shadow-md"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={typeColors[project.type]}>
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {project.time}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Languages className="h-4 w-4" />
                  {project.language}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            {dict.recentProjects.subtitle.includes('Recent') ? 'Updated daily with new projects' :
              dict.recentProjects.subtitle.includes('Нещодавно') ? 'Оновлюється щодня новими проектами' :
                'Aktualizowane codziennie nowymi projektami'}
          </p>
        </div>
      </div>
    </section>
  );
}

