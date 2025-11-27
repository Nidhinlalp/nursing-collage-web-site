import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Target, Eye, Heart, Award, Building, Users, BookOpen, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import campusImage from '@assets/generated_images/college_campus_aerial_view.png';
import facultyFemale from '@assets/generated_images/female_nursing_faculty_portrait.png';
import facultyMale from '@assets/generated_images/male_doctor_faculty_portrait.png';

// todo: remove mock data
const leadership = [
  { id: 1, name: 'Dr. Thomas Mathew', role: 'Chairman', image: facultyMale, bio: 'Visionary leader with 30+ years in healthcare education' },
  { id: 2, name: 'Dr. Priya Sharma', role: 'Principal', image: facultyFemale, bio: 'PhD in Nursing, dedicated educator for 25+ years' },
  { id: 3, name: 'Dr. Rajesh Kumar', role: 'Vice Principal', image: facultyMale, bio: 'MD with expertise in medical education administration' },
];

const timeline = [
  { year: '1999', title: 'Foundation', description: 'IETNC established with vision for nursing excellence' },
  { year: '2003', title: 'INC Recognition', description: 'Received Indian Nursing Council recognition' },
  { year: '2008', title: 'BSc Program Launch', description: 'Introduced BSc Nursing program' },
  { year: '2012', title: 'Campus Expansion', description: 'New state-of-the-art facilities inaugurated' },
  { year: '2018', title: 'Simulation Lab', description: 'Advanced simulation center established' },
  { year: '2023', title: 'International Partnerships', description: 'Global collaboration for student exchange' },
];

const recognitions = [
  'Indian Nursing Council (INC)',
  'Kerala Health Sciences University (KHSU)',
  'State Nursing Council',
  'Medical Council of India',
  'National Assessment & Accreditation Council',
  'ISO 9001:2015 Certified',
];

export default function About() {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.1);
  const { ref: leadershipRef, isVisible: leadershipVisible } = useScrollAnimation(0.1);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.1);

  return (
    <main data-testid="page-about">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${campusImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-about-title">
            Our Story of Excellence
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            25+ years of shaping compassionate healthcare professionals
          </p>
        </div>
      </section>

      <section ref={missionRef} className="py-16 md:py-24" data-testid="section-mission-vision">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className={`hover-elevate ${missionVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-blue-700">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide quality nursing education that develops competent, compassionate healthcare 
                  professionals equipped with knowledge, skills, and ethical values to serve humanity 
                  and contribute to the advancement of healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className={`hover-elevate ${missionVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-teal-700">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a globally recognized center of excellence in nursing education, producing 
                  leaders who transform healthcare delivery through innovation, research, and 
                  compassionate patient care.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <h3 className="text-xl font-semibold">Our Core Values</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['Excellence', 'Compassion', 'Integrity', 'Innovation', 'Respect', 'Service'].map((value) => (
                <Badge key={value} variant="secondary" className="text-sm">{value}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={leadershipRef} className="py-16 md:py-24 bg-muted/30" data-testid="section-leadership">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals guiding our institution towards excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card
                key={leader.id}
                className={`text-center hover-elevate ${leadershipVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-leader-${leader.id}`}
              >
                <CardContent className="pt-6">
                  <Avatar className="h-28 w-28 mx-auto mb-4 ring-4 ring-primary/20">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{leader.role}</p>
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-recognition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Affiliations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognition & Accreditation</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {recognitions.map((item, index) => (
              <Card key={index} className="p-4 text-center hover-elevate" data-testid={`card-recognition-${index}`}>
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-16 md:py-24 bg-muted/30" data-testid="section-timeline">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex gap-4 mb-8 last:mb-0 ${timelineVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <Card className="flex-1 hover-elevate">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary font-semibold">{item.year}</span>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
