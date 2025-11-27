import { Link } from 'wouter';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, CheckCircle, ArrowRight, GraduationCap, Stethoscope } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const programs = [
  {
    id: 'gnm',
    title: 'GNM',
    fullName: 'General Nursing & Midwifery',
    duration: '3 Years',
    seats: '50+',
    icon: Stethoscope,
    color: 'from-primary to-blue-700',
    features: [
      'Foundational Nursing Skills',
      'Midwifery & Obstetrics',
      'Community Health Practice',
      'Clinical Rotations',
    ],
    description: 'A comprehensive diploma program that prepares you for a rewarding career in nursing with hands-on clinical experience.',
  },
  {
    id: 'bsc',
    title: 'BSc Nursing',
    fullName: 'Bachelor of Science in Nursing',
    duration: '4 Years',
    seats: '40+',
    icon: GraduationCap,
    color: 'from-accent to-teal-700',
    features: [
      'Advanced Nursing Practice',
      'Research Methodology',
      'Specialization Options',
      'Leadership Training',
    ],
    description: 'An undergraduate degree program offering advanced nursing education with research focus and specialization opportunities.',
  },
];

export default function ProgramsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-16 md:py-24" id="programs" data-testid="section-programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-programs-label">Our Programs</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-programs-title">
            Choose Your Path to Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our INC-recognized nursing programs designed to prepare you for a successful career in healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.id}
                className={`group hover-elevate transition-all duration-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`card-program-${program.id}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${program.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" /> {program.duration}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Users className="h-3 w-3" /> {program.seats} Seats
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-foreground" data-testid={`text-program-title-${program.id}`}>{program.title}</h3>
                    <p className="text-muted-foreground">{program.fullName}</p>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="gap-3 flex-wrap">
                  <Link href={`/programs/${program.id}`}>
                    <Button className={`bg-gradient-to-r ${program.color}`} data-testid={`button-learn-more-${program.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/admissions">
                    <Button variant="outline" data-testid={`button-apply-${program.id}`}>Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
