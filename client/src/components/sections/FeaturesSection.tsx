import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Users,
  Building2,
  TrendingUp,
  Award,
  Book,
  Heart,
  Briefcase,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    title: 'INC Recognition',
    description: 'Approved by Indian Nursing Council',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    title: 'KHSU Affiliation',
    description: 'Affiliated to Kerala University of Health Sciences',
    icon: Award,
    color: 'text-blue-500',
  },
  {
    title: 'Expert Faculty',
    description: 'Highly qualified and experienced professionals',
    icon: Users,
    color: 'text-purple-500',
  },
  {
    title: 'Modern Infrastructure',
    description: 'Advanced teaching and learning facilities',
    icon: Building2,
    color: 'text-orange-500',
  },
  {
    title: 'Clinical Excellence',
    description: 'Diverse hospital partnerships and clinical exposure',
    icon: TrendingUp,
    color: 'text-emerald-500',
  },
  {
    title: 'Holistic Education',
    description: 'Integrated classroom learning with hands-on practice',
    icon: Book,
    color: 'text-amber-500',
  },
  {
    title: 'Student-Centric',
    description: 'Personal mentorship and leadership development',
    icon: Heart,
    color: 'text-rose-500',
  },
  {
    title: 'Career-Ready',
    description: 'Preparation for various healthcare roles',
    icon: Briefcase,
    color: 'text-cyan-500',
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30" data-testid="section-features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-features-label">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Excellence in Every Aspect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what makes IETNC the preferred choice for aspiring nursing professionals across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`p-5 hover-elevate transition-all duration-300 group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`card-feature-${index}`}
              >
                <div className={`${feature.color} mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-1" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
