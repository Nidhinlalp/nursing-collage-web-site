import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Clock,
  Users,
  CheckCircle,
  BookOpen,
  Stethoscope,
  GraduationCap,
  ArrowRight,
  Building2,
  Award,
} from 'lucide-react';
import labImage from '@assets/generated_images/nursing_simulation_lab_facility.png';
import facultyFemale from '@assets/generated_images/female_nursing_faculty_portrait.png';
import facultyNurse from '@assets/generated_images/young_female_nurse_portrait.png';

// todo: remove mock data
const programs = {
  gnm: {
    id: 'gnm',
    title: 'GNM',
    fullName: 'General Nursing & Midwifery',
    duration: '3 Years',
    seats: '50+',
    eligibility: '10+2 with Science (PCB)',
    icon: Stethoscope,
    color: 'from-primary to-blue-700',
    description: 'A comprehensive diploma program designed to prepare competent nurses with foundational skills in general nursing and midwifery practices.',
    curriculum: [
      { year: 'Year 1', subjects: ['Anatomy & Physiology', 'Microbiology', 'Psychology', 'Fundamentals of Nursing', 'First Aid'] },
      { year: 'Year 2', subjects: ['Medical-Surgical Nursing', 'Pharmacology', 'Community Health', 'Nutrition', 'Mental Health'] },
      { year: 'Year 3', subjects: ['Midwifery', 'Pediatric Nursing', 'Advanced Clinical Practice', 'Internship'] },
    ],
    features: [
      'Foundational Nursing Skills',
      'Midwifery & Obstetrics Training',
      'Community Health Practice',
      'Clinical Rotations at Partner Hospitals',
      'Practical Lab Sessions',
      'Internship Program',
    ],
    faculty: [
      { name: 'Ms. Anitha Menon', role: 'Program Coordinator', image: facultyFemale },
      { name: 'Ms. Lakshmi Devi', role: 'Clinical Instructor', image: facultyNurse },
    ],
    facilities: ['Anatomy Lab', 'Nursing Skills Lab', 'Simulation Center', 'Library', 'Computer Lab'],
  },
  bsc: {
    id: 'bsc',
    title: 'BSc Nursing',
    fullName: 'Bachelor of Science in Nursing',
    duration: '4 Years',
    seats: '40+',
    eligibility: '10+2 with Science (PCB), Min 50%',
    icon: GraduationCap,
    color: 'from-accent to-teal-700',
    description: 'An undergraduate degree program offering advanced nursing education with emphasis on research, leadership, and specialized clinical practice.',
    curriculum: [
      { year: 'Year 1', subjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Nutrition', 'Introduction to Nursing'] },
      { year: 'Year 2', subjects: ['Pathology', 'Pharmacology', 'Medical-Surgical Nursing', 'Community Health'] },
      { year: 'Year 3', subjects: ['Child Health Nursing', 'Mental Health Nursing', 'Obstetric Nursing', 'Research Methods'] },
      { year: 'Year 4', subjects: ['Nursing Management', 'Nursing Education', 'Advanced Practice', 'Internship'] },
    ],
    features: [
      'Advanced Nursing Practice',
      'Research Methodology',
      'Leadership & Management Training',
      'Specialization Tracks',
      'International Exchange Programs',
      'Hospital Internship',
    ],
    faculty: [
      { name: 'Dr. Priya Sharma', role: 'Program Head', image: facultyFemale },
      { name: 'Ms. Anitha Menon', role: 'Senior Faculty', image: facultyNurse },
    ],
    facilities: ['Research Lab', 'Advanced Simulation Center', 'Digital Library', 'ICU Training Unit', 'OT Training Module'],
  },
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState('gnm');
  const program = programs[activeTab as keyof typeof programs];
  const Icon = program.icon;

  return (
    <main data-testid="page-programs">
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${labImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Academic Programs</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-programs-title">
            Our Nursing Programs
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            INC-recognized programs designed to shape competent healthcare professionals
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-program-details">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="gnm" className="gap-2" data-testid="tab-gnm">
                <Stethoscope className="h-4 w-4" /> GNM Program
              </TabsTrigger>
              <TabsTrigger value="bsc" className="gap-2" data-testid="tab-bsc">
                <GraduationCap className="h-4 w-4" /> BSc Nursing
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-8">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${program.color}`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold" data-testid="text-program-name">
                          {program.title}
                        </h2>
                        <p className="text-muted-foreground">{program.fullName}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" /> {program.duration}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Users className="h-3 w-3" /> {program.seats} Seats
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <BookOpen className="h-3 w-3" /> {program.eligibility}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{program.description}</p>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" /> Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-3 flex-wrap">
                  <Link href="/admissions">
                    <Button className={`bg-gradient-to-r ${program.color}`} data-testid="button-apply-program">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" data-testid="button-download-brochure">
                    Download Brochure
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" /> Curriculum
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible defaultValue="year-0">
                      {program.curriculum.map((year, idx) => (
                        <AccordionItem key={idx} value={`year-${idx}`}>
                          <AccordionTrigger data-testid={`accordion-year-${idx}`}>
                            {year.year}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-1">
                              {year.subjects.map((subject, sIdx) => (
                                <li key={sIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" /> Program Faculty
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {program.faculty.map((member, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" /> Facilities
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {program.facilities.map((facility, idx) => (
                          <Badge key={idx} variant="secondary">{facility}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
