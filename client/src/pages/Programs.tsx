import { Link, useParams } from 'wouter';
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
import {
  Clock,
  Users,
  CheckCircle,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Briefcase,
  Target,
} from 'lucide-react';
import labImage from '@assets/generated_images/nursing_simulation_lab_facility.png';

const bscCurriculum = [
  { semester: 'Semester 1', subjects: ['Communicative English', 'Applied Anatomy', 'Applied Physiology', 'Applied Sociology', 'Applied Psychology', 'Nursing Foundations I'] },
  { semester: 'Semester 2', subjects: ['Applied Biochemistry', 'Applied Nutrition & Dietetics', 'Nursing Foundations II', 'Health/Nursing Informatics & Technology'] },
  { semester: 'Semester 3', subjects: ['Applied Microbiology', 'Infection Control & Safety', 'Pharmacology I', 'Pathology I', 'Adult Health Nursing I'] },
  { semester: 'Semester 4', subjects: ['Pharmacology II', 'Pathology II', 'Genetics', 'Adult Health Nursing II', 'Professionalism'] },
  { semester: 'Semester 5', subjects: ['Child Health Nursing I', 'Mental Health Nursing I', 'Community Health Nursing I', 'Educational Technology'] },
  { semester: 'Semester 6', subjects: ['Child Health Nursing II', 'Mental Health Nursing II', 'Nursing Management & Leadership', 'Midwifery/Obstetrics & Gynecology I'] },
  { semester: 'Semester 7', subjects: ['Community Health Nursing II', 'Nursing Research & Statistics', 'Midwifery/Obstetrics & Gynecology II'] },
  { semester: 'Semester 8', subjects: ['Internship (Intensive Practicum)'] },
];

const gnmCurriculum = [
  { year: 'Year 1', subjects: ['Anatomy & Physiology', 'Microbiology', 'Behavioral Sciences', 'Nursing Foundations', 'First Aid', 'Personal & Environmental Hygiene', 'Nutrition'] },
  { year: 'Year 2', subjects: ['Medical-Surgical Nursing I', 'Community Health Nursing I', 'Communication & Educational Technology', 'Pharmacology', 'Pathology'] },
  { year: 'Year 3', subjects: ['Medical-Surgical Nursing II', 'Child Health Nursing', 'Mental Health Nursing', 'Midwifery & Obstetrical Nursing', 'Community Health Nursing II'] },
];

const bscCareerOpportunities = [
  'Staff Nurse in Hospitals (Govt & Private)',
  'Nursing Tutor / Educator',
  'Public Health Nurse',
  'Industrial Nurse',
  'Military Nurse',
  'Research Assistant',
  'Home Care Nurse',
  'Medical Coding / Transcription',
];

const gnmCareerOpportunities = [
  'Staff Nurse in Hospitals',
  'Community Health Nurse',
  'Home Care Nurse',
  'Industrial Nurse',
  'School Health Nurse',
  'Nursing Assistant',
];

const bscObjectives = [
  'Prepare graduates to assume responsibilities as professional, competent nurses and midwives.',
  'Develop skills in critical thinking, decision making and problem solving.',
  'Provide promotive, preventive, curative and rehabilitative health services.',
  'Demonstrate leadership and managerial skills in clinical and community health settings.',
  'Conduct research studies and utilize research findings to improve nursing practice.',
];

const gnmObjectives = [
  'Prepare competent general nurses to work in hospitals and community settings.',
  'Develop basic nursing skills and clinical competencies.',
  'Provide quality patient care with compassion and empathy.',
  'Practice safe and ethical nursing care.',
  'Work effectively as part of the healthcare team.',
];

export default function Programs() {
  const params = useParams();
  const programId = params.id || 'bsc'; // Default to BSc if no ID
  const activeProgram = programId === 'gnm' ? 'gnm' : 'bsc';

  const programData = {
    bsc: {
      title: 'Bachelor of Science in Nursing',
      subtitle: 'A comprehensive 4-year degree program recognized by INC & KHSU',
      duration: '4 Years',
      seats: '30 Seats',
      eligibility: '10+2 Science (PCB)',
      description: 'The Bachelor of Science in Nursing (B.Sc Nursing) is a four-year professional degree program designed to prepare students for a rewarding career in healthcare. The curriculum integrates theoretical knowledge with extensive clinical practice to develop competent and compassionate nurses.',
      curriculum: bscCurriculum,
      objectives: bscObjectives,
      careers: bscCareerOpportunities,
      type: 'semester',
    },
    gnm: {
      title: 'General Nursing and Midwifery',
      subtitle: 'A comprehensive 3.5-year diploma program recognized by INC & Kerala Nurses and Midwives Council',
      duration: '3.5 Years',
      seats: 'Limited Seats',
      eligibility: '10+2 (Any Stream)',
      description: 'The General Nursing and Midwifery (GNM) is a three and half year diploma program that prepares students to become skilled nurses capable of providing quality healthcare in hospitals and community settings. The program includes 6 months of internship.',
      curriculum: gnmCurriculum,
      objectives: gnmObjectives,
      careers: gnmCareerOpportunities,
      type: 'year',
    },
  };

  const currentProgram = programData[activeProgram];

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
            {currentProgram.title}
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            {currentProgram.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-program-details">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">

            {/* Program Tabs */}
            <Tabs value={activeProgram} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="bsc" asChild>
                  <Link href="/programs/bsc">
                    <span>B.Sc Nursing</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="gnm" asChild>
                  <Link href="/programs/gnm">
                    <span>GNM</span>
                  </Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Program Overview */}
            <Card className="border-primary/20 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{currentProgram.title}</h2>
                      <p className="text-muted-foreground">
                        {activeProgram === 'bsc' ? 'Undergraduate Degree Program' : 'Diploma Program'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" /> {currentProgram.duration}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Users className="h-3 w-3" /> {currentProgram.seats}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <BookOpen className="h-3 w-3" /> {currentProgram.eligibility}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  {currentProgram.description}
                </p>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-accent" /> Program Objectives
                  </h3>
                  <div className="grid gap-2">
                    {currentProgram.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-3 flex-wrap bg-muted/30 p-6">
                <Link href="/admissions">
                  <Button className="bg-gradient-to-r from-primary to-accent" size="lg" data-testid="button-apply-program">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-download-brochure">
                  Download Brochure
                </Button>
              </CardFooter>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Curriculum */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" /> Curriculum Structure
                </h3>
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible defaultValue="item-0">
                      {currentProgram.curriculum.map((item, idx) => {
                        const label = 'semester' in item ? item.semester : item.year;
                        return (
                          <AccordionItem key={idx} value={`item-${idx}`} className="px-4">
                            <AccordionTrigger className="hover:no-underline hover:text-primary">
                              <span className="font-semibold">{label}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 pb-4">
                                {item.subjects.map((subject, sIdx) => (
                                  <li key={sIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              {/* Career Opportunities */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" /> Career Pathways
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {currentProgram.careers.map((job, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10 text-primary">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="font-medium">{job}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
