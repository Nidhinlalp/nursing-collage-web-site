import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, Trophy, BookOpen } from 'lucide-react';

// todo: remove mock data
const newsItems = [
  { id: 1, icon: Bell, text: 'IMPORTANT: Management Quota Application Deadline: 26/11/2025 at 4:00 PM', type: 'CRITICAL' },
  { id: 2, icon: Bell, text: 'Admissions Open for 2025-26 Academic Year', type: 'Announcement' },
  { id: 3, icon: Trophy, text: 'Our Students Win State-Level Nursing Competition', type: 'Achievement' },
  { id: 4, icon: Calendar, text: 'Free Health Camp on December 15th', type: 'Event' },
];

export default function NewsTicker() {
  return (
    <div className="bg-card border-y border-border py-3 overflow-hidden" data-testid="section-news-ticker">
      <div className="flex animate-ticker">
        {[...newsItems, ...newsItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-3 px-8 shrink-0"
              data-testid={`news-item-${index}`}
            >
              <Badge variant="secondary" className="gap-1 shrink-0">
                <Icon className="h-3 w-3" />
                {item.type}
              </Badge>
              <span className="text-foreground whitespace-nowrap">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
