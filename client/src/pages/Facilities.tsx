import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FlaskConical,
  BookOpen,
  Building2,
  Wifi,
  Utensils,
  Dumbbell,
  ShieldCheck,
  Bus,
  MonitorPlay,
  BedDouble,
  Stethoscope,
  Microscope,
} from 'lucide-react';
import labImage from '@assets/generated_images/nursing_simulation_lab_facility.png';
import campusImage from '@assets/generated_images/college_campus_aerial_view.png';

const academicFacilities = [
  {
    title: 'Nursing Foundations Lab',
    description: 'Equipped with advanced mannequins for fundamental nursing skills training',
    icon: Stethoscope,
    features: ['Patient Simulators', 'CPR Mannequins', 'Wound Care Kits'],
  },
  {
    title: 'Community Health Nursing Lab',
    description: 'Simulated community setting for public health training',
    icon: Building2,
    features: ['Home Visit Kits', 'Health Education Aids', 'Community Maps'],
  },
  {
    title: 'Nutrition Lab',
    description: 'Facilities for therapeutic diet preparation and nutrition education',
    icon: Utensils,
    features: ['Cooking Stations', 'Diet Charts', 'Food Models'],
  },
  {
    title: 'OBG & Pediatrics Lab',
    description: 'Specialized lab for maternal and child health nursing',
    icon: BedDouble,
    features: ['Birthing Simulators', 'Newborn Mannequins', 'Incubators'],
  },
  {
    title: 'Pre-Clinical Science Lab',
    description: 'Anatomy, Physiology, and Microbiology resources',
    icon: Microscope,
    features: ['Skeletal Models', 'Microscopes', 'Specimens'],
  },
  {
    title: 'Computer Lab',
    description: 'Modern computer facility with internet access',
    icon: Wifi,
    features: ['Workstations', 'High-Speed Internet', 'E-Learning Resources'],
  },
  {
    title: 'Library',
    description: 'Comprehensive resource center for nursing education',
    icon: BookOpen,
    features: ['3000+ Books', 'National & International Journals', 'E-Journals (Delnet)', 'Reading Room'],
  },
];

const hostelFacilities = [
  { title: 'Secure Accommodation', description: 'Safe and secure hostel for female students', icon: ShieldCheck },
  { title: 'Furnished Rooms', description: 'Comfortable rooms with study tables', icon: BedDouble },
  { title: 'Dining Hall', description: 'Hygienic and nutritious meals', icon: Utensils },
  { title: 'Recreation', description: 'Common areas for relaxation', icon: Dumbbell },
  { title: 'Transport', description: 'College bus facility for clinicals and outings', icon: Bus },
];

const clinicalPartners = [
  { name: 'Ithis Medicity', type: 'Parent Hospital', desc: '300 Bedded Super Specialty Hospital' },
  { name: 'Govt Medical College, Manjeri', type: 'Affiliated', desc: 'Tertiary Care Center' },
  { name: 'Govt General Hospital, Manjeri', type: 'Affiliated', desc: 'General Hospital' },
  { name: 'Govt Taluk Hospital, Malappuram', type: 'Affiliated', desc: 'Secondary Care' },
  { name: 'Govt Mental Health Center, Kuthiravattom', type: 'Affiliated', desc: 'Psychiatric Care' },
];

export default function Facilities() {
  return (
    <main data-testid="page-facilities">
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${campusImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Campus</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-facilities-title">
            World-Class Facilities
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            State-of-the-art infrastructure designed for modern nursing education
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-facilities-tabs">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="academic" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="academic" className="gap-2" data-testid="tab-academic">
                <FlaskConical className="h-4 w-4" /> Academic & Labs
              </TabsTrigger>
              <TabsTrigger value="hostel" className="gap-2" data-testid="tab-hostel">
                <Building2 className="h-4 w-4" /> Hostel & Transport
              </TabsTrigger>
              <TabsTrigger value="clinical" className="gap-2" data-testid="tab-clinical">
                <Stethoscope className="h-4 w-4" /> Clinical Facilities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="academic" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicFacilities.map((facility, idx) => {
                  const Icon = facility.icon;
                  return (
                    <Card key={idx} className="hover-elevate" data-testid={`card-facility-${idx}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="font-semibold">{facility.title}</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4">{facility.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {facility.features.map((feature, fIdx) => (
                            <Badge key={fIdx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="hostel" className="space-y-8">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Student Accommodation & Transport</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Ensuring a safe, comfortable, and convenient environment for our students.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hostelFacilities.map((facility, idx) => {
                    const Icon = facility.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3" data-testid={`hostel-facility-${idx}`}>
                        <div className="p-2 rounded-lg bg-card border shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{facility.title}</h4>
                          <p className="text-sm text-muted-foreground">{facility.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="clinical" className="space-y-8">
              <Card className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Clinical Training Partners</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Extensive clinical exposure through our parent hospital and affiliated government institutions.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clinicalPartners.map((partner, idx) => (
                    <Card key={idx} className="p-4 text-center hover-elevate" data-testid={`card-partner-${idx}`}>
                      <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-bold text-lg mb-1">{partner.name}</h4>
                      <Badge variant={partner.type === 'Parent Hospital' ? 'default' : 'outline'} className="mb-2">
                        {partner.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{partner.desc}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-accent" data-testid="section-virtual-tour">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Explore our campus from the comfort of your home. Schedule a virtual tour with our admissions team.
          </p>
          <Button size="lg" variant="secondary" data-testid="button-virtual-tour">
            Schedule Virtual Tour
          </Button>
        </div>
      </section>
    </main>
  );
}
