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
    title: 'Nursing Skills Lab',
    description: 'Equipped with mannequins and medical equipment for practical training',
    icon: Stethoscope,
    features: ['Patient Simulators', 'IV Training Arms', 'CPR Mannequins', 'Wound Care Kits'],
  },
  {
    title: 'Anatomy Lab',
    description: 'Comprehensive anatomical models and specimens for study',
    icon: Microscope,
    features: ['Skeletal Models', 'Organ Models', 'Microscopes', 'Histology Slides'],
  },
  {
    title: 'Simulation Center',
    description: 'Advanced simulation technology for realistic clinical scenarios',
    icon: MonitorPlay,
    features: ['High-Fidelity Simulators', 'Debriefing Rooms', 'Recording Systems', 'Virtual Reality Tools'],
  },
  {
    title: 'Computer Lab',
    description: 'Modern computer facility with internet access',
    icon: Wifi,
    features: ['50+ Workstations', 'High-Speed Internet', 'E-Learning Software', 'Digital Resources'],
  },
  {
    title: 'Library',
    description: 'Extensive collection of nursing and medical literature',
    icon: BookOpen,
    features: ['10,000+ Books', 'Digital Journals', 'Reading Rooms', 'Research Databases'],
  },
  {
    title: 'Research Lab',
    description: 'Dedicated space for nursing research and projects',
    icon: FlaskConical,
    features: ['Research Equipment', 'Statistical Software', 'Presentation Facilities', 'Collaboration Spaces'],
  },
];

const hostelFacilities = [
  { title: 'Furnished Rooms', description: 'Comfortable twin-sharing rooms with study tables', icon: BedDouble },
  { title: '24/7 Security', description: 'Round-the-clock security with CCTV surveillance', icon: ShieldCheck },
  { title: 'Dining Hall', description: 'Nutritious vegetarian and non-vegetarian meals', icon: Utensils },
  { title: 'Recreation Area', description: 'Indoor games, TV room, and common areas', icon: Dumbbell },
  { title: 'Wi-Fi Enabled', description: 'High-speed internet throughout the campus', icon: Wifi },
  { title: 'Transport', description: 'Regular bus service to clinical sites', icon: Bus },
];

const clinicalPartners = [
  'Apollo Hospitals',
  'Fortis Healthcare',
  'KIMS Hospital',
  'Medical Trust Hospital',
  'District General Hospital',
  'Community Health Centers',
  'Primary Health Centers',
  'Specialty Clinics',
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
                <FlaskConical className="h-4 w-4" /> Academic
              </TabsTrigger>
              <TabsTrigger value="hostel" className="gap-2" data-testid="tab-hostel">
                <Building2 className="h-4 w-4" /> Hostel & Campus
              </TabsTrigger>
              <TabsTrigger value="clinical" className="gap-2" data-testid="tab-clinical">
                <Stethoscope className="h-4 w-4" /> Clinical Partners
              </TabsTrigger>
            </TabsList>

            <TabsContent value="academic" className="space-y-8">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
                <img
                  src={labImage}
                  alt="Nursing Simulation Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Advanced Simulation Center</h3>
                  <p className="text-white/80">State-of-the-art training facilities</p>
                </div>
              </div>

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
                  <h3 className="text-2xl font-bold mb-2">Comfortable Student Accommodation</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our campus offers modern hostel facilities ensuring a safe and comfortable stay for students from across India.
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

                <div className="mt-8 text-center">
                  <Badge variant="secondary" className="text-sm">
                    Hostel Fee: ₹40,000 per year (inclusive of meals)
                  </Badge>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="clinical" className="space-y-8">
              <Card className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Clinical Training Partners</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We have partnerships with leading hospitals and healthcare facilities for comprehensive clinical exposure.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {clinicalPartners.map((partner, idx) => (
                    <Card key={idx} className="p-4 text-center hover-elevate" data-testid={`card-partner-${idx}`}>
                      <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-medium text-sm">{partner}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    Students complete 1000+ hours of clinical rotations across various departments including ICU, OT, Emergency, Pediatrics, and Community Health.
                  </p>
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
