import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import principalImage from '/dr-vilasini.png';
import facultyMale from '@assets/generated_images/male_doctor_faculty_portrait.png';
import facultyNurse from '@assets/generated_images/young_female_nurse_portrait.png';

// todo: remove mock data
const faculty = [
  {
    id: 1,
    name: 'Dr. Vilasini. C',
    role: 'Principal',
    qualification: 'PhD in Nursing',
    experience: '25+ years',
    image: principalImage,
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    role: 'Vice Principal',
    qualification: 'MD, MBBS',
    experience: '20+ years',
    image: facultyMale,
  },
  {
    id: 3,
    name: 'Ms. Anitha Menon',
    role: 'HOD - Nursing',
    qualification: 'MSc Nursing, BSc',
    experience: '15+ years',
    image: facultyNurse,
  },
  {
    id: 4,
    name: 'Dr. Suresh Nair',
    role: 'Medical Director',
    qualification: 'MD, MBBS',
    experience: '22+ years',
    image: facultyMale,
  },
  {
    id: 5,
    name: 'Ms. Lakshmi Devi',
    role: 'Clinical Instructor',
    qualification: 'MSc Nursing',
    experience: '12+ years',
    image: facultyNurse,
  },
];

export default function FacultySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-16 md:py-24" data-testid="section-faculty">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-faculty-label">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-faculty-title">
            Meet Our Expert Faculty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced healthcare professionals dedicated to shaping the next generation of nurses.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {faculty.map((member, index) => (
              <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className={`hover-elevate transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`card-faculty-${member.id}`}
                >
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-primary/20">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg text-foreground" data-testid={`text-faculty-name-${member.id}`}>
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-1">{member.qualification}</p>
                    <Badge variant="outline" className="text-xs">{member.experience}</Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" data-testid="button-faculty-prev" />
          <CarouselNext className="hidden md:flex -right-12" data-testid="button-faculty-next" />
        </Carousel>
      </div>
    </section>
  );
}
