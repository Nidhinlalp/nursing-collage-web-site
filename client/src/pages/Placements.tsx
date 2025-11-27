import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  TrendingUp,
  Building2,
  IndianRupee,
  Users,
  Award,
  MapPin,
  Briefcase,
  Star,
} from 'lucide-react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import graduateImage from '@assets/generated_images/nursing_graduate_testimonial_photo.png';
import alumniImage from '@assets/generated_images/male_nursing_alumni_photo.png';


const placementStats = [
  { number: 100, unit: '%', label: 'Placement Assistance', icon: TrendingUp },
  { number: 50, unit: '+', label: 'Hospital Partners', icon: Building2 },
  { number: 1000, unit: '+', label: 'Alumni Placed', icon: Users },
  { number: 25, unit: '+', label: 'Years of Excellence', icon: Award },
];

const recruiters = [
  'Apollo Hospitals',
  'Fortis Healthcare',
  'Aster Medcity',
  'KIMS Health',
  'Meitra Hospital',
  'Moulana Hospital',
  'Almas Hospital',
  'Baby Memorial Hospital',
  'MIMS',
  'Lakeshore Hospital',
];

const successStories = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'Staff Nurse, Apollo Hospitals',
    batch: 'BSc Nursing 2022',
    package: '₹4.5 LPA',
    location: 'Chennai',
    image: graduateImage,
    quote: 'The placement cell at IETNC provided excellent guidance. I received multiple offers and chose Apollo for the growth opportunities.',
  },
  {
    id: 2,
    name: 'Arun Kumar',
    role: 'ICU Specialist, Fortis',
    batch: 'GNM 2021',
    package: '₹5.2 LPA',
    location: 'Bangalore',
    image: alumniImage,
    quote: 'The clinical training I received prepared me well for the ICU environment. I was confident from day one.',
  },
  {
    id: 3,
    name: 'Meera Krishnan',
    role: 'Nurse Educator, CMC Vellore',
    batch: 'BSc Nursing 2019',
    package: '₹6 LPA',
    location: 'Vellore',
    image: graduateImage,
    quote: 'My research experience at IETNC helped me secure a position in one of India\'s premier medical institutions.',
  },
  {
    id: 4,
    name: 'Ravi Shankar',
    role: 'Emergency Nurse, KIMS',
    batch: 'GNM 2022',
    package: '₹4 LPA',
    location: 'Kerala',
    image: alumniImage,
    quote: 'The hands-on training in emergency care was invaluable. I handle critical situations with confidence now.',
  },
];

const placementProcess = [
  { step: 1, title: 'Resume Building', description: 'Professional resume preparation with faculty guidance' },
  { step: 2, title: 'Interview Training', description: 'Mock interviews and personality development sessions' },
  { step: 3, title: 'Company Interactions', description: 'Pre-placement talks and hospital visits' },
  { step: 4, title: 'Campus Drives', description: 'On-campus recruitment by partner hospitals' },
  { step: 5, title: 'Offer & Onboarding', description: 'Placement assistance until successful joining' },
];

function StatCard({ stat, index, isVisible }: { stat: typeof placementStats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.number, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <Card className="text-center hover-elevate" data-testid={`card-placement-stat-${index}`}>
      <CardContent className="pt-6">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-accent mb-3">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="text-3xl font-bold text-foreground">
          {stat.number % 1 === 0 ? count : stat.number}{stat.unit}
        </div>
        <div className="text-muted-foreground text-sm">{stat.label}</div>
      </CardContent>
    </Card>
  );
}

export default function Placements() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  return (
    <main data-testid="page-placements">
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-accent">
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Career Support</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-placements-title">
            Placements & Careers
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            100% placement assistance with top healthcare institutions across India
          </p>
        </div>
      </section>

      <section ref={statsRef} className="py-12 md:py-16" data-testid="section-placement-stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {placementStats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} isVisible={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" data-testid="section-recruiters">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Our Recruiters</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Top Recruiting Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {recruiters.map((recruiter, idx) => (
              <Card key={idx} className="p-4 text-center hover-elevate" data-testid={`card-recruiter-${idx}`}>
                <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">{recruiter}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-success-stories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Alumni Success</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Success Stories</h2>
          </div>

          <Carousel
            opts={{ align: 'start', loop: true }}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {successStories.map((story) => (
                <CarouselItem key={story.id} className="pl-4 md:basis-1/2">
                  <Card className="h-full" data-testid={`card-success-story-${story.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="h-16 w-16 ring-2 ring-primary/20">
                          <AvatarImage src={story.image} alt={story.name} />
                          <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{story.name}</h4>
                          <p className="text-sm text-primary">{story.role}</p>
                          <p className="text-xs text-muted-foreground">{story.batch}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 italic">"{story.quote}"</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="gap-1 text-xs">
                          <IndianRupee className="h-3 w-3" /> {story.package}
                        </Badge>
                        <Badge variant="outline" className="gap-1 text-xs">
                          <MapPin className="h-3 w-3" /> {story.location}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" data-testid="section-placement-process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Placement Process</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {placementProcess.map((step, idx) => (
                <div key={step.step} className="text-center" data-testid={`placement-step-${idx}`}>
                  <div className="relative mb-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    {idx < placementProcess.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-border -translate-y-1/2" />
                    )}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-career-support">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Support</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Career Development Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Briefcase, title: 'Career Counseling', desc: 'One-on-one guidance for career planning' },
              { icon: Users, title: 'Alumni Network', desc: 'Connect with 5000+ successful alumni' },
              { icon: Award, title: 'Certification Support', desc: 'Preparation for additional certifications' },
              { icon: Star, title: 'Skill Development', desc: 'Soft skills and communication training' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="hover-elevate" data-testid={`card-career-service-${idx}`}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
