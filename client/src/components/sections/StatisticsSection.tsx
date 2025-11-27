import { Card } from '@/components/ui/card';
import { Users, Award, TrendingUp, Building2 } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

const stats = [
  { number: 30, unit: '+', label: 'Annual Intake', icon: Users, color: 'from-blue-500 to-blue-600' },
  { number: 5, unit: '+', label: 'Hospital Partners', icon: Building2, color: 'from-purple-500 to-purple-600' },
  { number: 100, unit: '%', label: 'Clinical Training', icon: TrendingUp, color: 'from-green-500 to-green-600' },
  { number: 50, unit: '+', label: 'Qualified Faculty', icon: Award, color: 'from-teal-500 to-teal-600' },
];

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.number, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <Card
      className="p-6 text-center hover-elevate transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`card-stat-${stat.label.toLowerCase().replace(' ', '-')}`}
    >
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 animate-bounce-in`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid={`text-stat-number-${index}`}>
        {count}{stat.unit}
      </div>
      <div className="text-muted-foreground font-medium">{stat.label}</div>
    </Card>
  );
}

export default function StatisticsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30" data-testid="section-statistics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-stats-title">
            Why Choose IETNC
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Decades of excellence in nursing education, producing healthcare professionals who make a difference.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
