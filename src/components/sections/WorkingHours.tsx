'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WorkingHoursProps {
  dict: {
    workingHours: {
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

export function WorkingHoursWidget({ dict }: WorkingHoursProps) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hour = now.getHours();

      // Monday (1) to Friday (5), 9:00-17:00
      const isWorkingDay = day >= 1 && day <= 5;
      const isWorkingHour = hour >= 9 && hour < 17;

      setIsOnline(isWorkingDay && isWorkingHour);
    };

    checkWorkingHours();
    const interval = setInterval(checkWorkingHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Clock className="h-8 w-8 text-primary" />
              {isOnline && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-sm">{dict.workingHours.title}</h3>
              <p className="text-xs text-muted-foreground">{dict.workingHours.schedule}</p>
            </div>
          </div>
          <Badge
            className={`${isOnline
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gray-400 hover:bg-gray-500 text-white'
              } border-0`}
          >
            {isOnline ? dict.workingHours.status.online : dict.workingHours.status.offline}
          </Badge>
        </div>
        <div className="mt-4 pt-4">
          <p className="text-xs text-muted-foreground">
            {dict.workingHours.response}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

