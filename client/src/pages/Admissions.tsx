import { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Clock,
  Users,
  CheckCircle,
  FileText,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  Award,
  Percent,
  IndianRupee,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const eligibilityItems = [
  {
    question: 'What are the age requirements?',
    answer: 'Candidates must be between 17-35 years of age as on December 31st of the admission year.',
  },
  {
    question: 'What educational qualifications are needed for GNM?',
    answer: '10+2 or equivalent with Science (Physics, Chemistry, Biology) with minimum 40% aggregate marks from a recognized board.',
  },
  {
    question: 'What educational qualifications are needed for BSc Nursing?',
    answer: '10+2 or equivalent with Science (Physics, Chemistry, Biology) with minimum 45% aggregate marks. English is mandatory as one of the subjects.',
  },
  {
    question: 'Are there any medical fitness requirements?',
    answer: 'Yes, candidates must be medically fit. A medical fitness certificate from a registered medical practitioner is required at the time of admission.',
  },
  {
    question: 'Is there an entrance examination?',
    answer: 'Admission is based on merit in qualifying examination. Some seats may be filled through state-level entrance tests.',
  },
  {
    question: 'What documents are required for admission?',
    answer: 'Mark sheets and certificates of 10th & 12th, Transfer Certificate, Migration Certificate, Character Certificate, 6 passport size photographs, Aadhaar Card, Medical Fitness Certificate.',
  },
];

const feeStructure = [
  { item: 'Tuition Fees (per year)', gnm: '₹55,000', bsc: '₹75,000' },
  { item: 'Hostel Charges (per year)', gnm: '₹40,000', bsc: '₹40,000' },
  { item: 'Lab Fees (one-time)', gnm: '₹10,000', bsc: '₹15,000' },
  { item: 'Library Fees (per year)', gnm: '₹3,000', bsc: '₹5,000' },
  { item: 'Uniform & Equipment', gnm: '₹8,000', bsc: '₹8,000' },
  { item: 'Miscellaneous', gnm: '₹5,000', bsc: '₹5,000' },
];

const scholarships = [
  { name: 'Merit Scholarship', criteria: 'Top 10% in entrance/qualifying exam', benefit: 'Up to 50% tuition fee waiver', icon: Award },
  { name: 'SC/ST Scholarship', criteria: 'Government scheme beneficiaries', benefit: 'Full tuition fee scholarship', icon: Users },
  { name: 'Economic Assistance', criteria: 'Family income < ₹3 LPA', benefit: 'Up to 30% fee concession', icon: IndianRupee },
  { name: 'Sports Quota', criteria: 'State/National level sportspersons', benefit: 'Up to 25% fee waiver', icon: Award },
];

export default function Admissions() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    program: '',
    qualification: '',
    percentage: '',
    parentName: '',
    parentPhone: '',
    message: '',
  });
  const { toast } = useToast();

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    toast({
      title: 'Application Submitted!',
      description: 'We will contact you shortly regarding your application.',
    });
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      program: '',
      qualification: '',
      percentage: '',
      parentName: '',
      parentPhone: '',
      message: '',
    });
  };

  return (
    <main data-testid="page-admissions">
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-accent">
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Admissions 2025-26</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-admissions-title">
            Join Our Nursing Family
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Applications are now open for GNM and BSc Nursing programs
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-program-cards">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Program</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover-elevate" data-testid="card-gnm-program">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-blue-700">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">GNM Program</h3>
                    <p className="text-sm text-muted-foreground">General Nursing & Midwifery</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" /> Duration: 3 Years
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" /> Seats: 50+
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" /> Eligibility: 10+2 Science
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary">Fees: ₹55,000/year</Badge>
              </CardFooter>
            </Card>

            <Card className="hover-elevate" data-testid="card-bsc-program">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-teal-700">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">BSc Nursing</h3>
                    <p className="text-sm text-muted-foreground">Bachelor of Science in Nursing</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" /> Duration: 4 Years
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" /> Seats: 40+
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" /> Eligibility: 10+2 Science (45%)
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary">Fees: ₹75,000/year</Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" data-testid="section-eligibility">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Eligibility & Requirements</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0">
              {eligibilityItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger data-testid={`accordion-eligibility-${idx}`}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-fee-structure">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Fees</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fee Structure</h2>
          </div>
          <Card className="max-w-3xl mx-auto overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Component</TableHead>
                  <TableHead className="text-center">GNM</TableHead>
                  <TableHead className="text-center">BSc Nursing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStructure.map((row, idx) => (
                  <TableRow key={idx} data-testid={`row-fee-${idx}`}>
                    <TableCell className="font-medium">{row.item}</TableCell>
                    <TableCell className="text-center">{row.gnm}</TableCell>
                    <TableCell className="text-center">{row.bsc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" data-testid="section-scholarships">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Financial Aid</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Scholarships Available</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {scholarships.map((scholarship, idx) => {
              const Icon = scholarship.icon;
              return (
                <Card key={idx} className="hover-elevate" data-testid={`card-scholarship-${idx}`}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{scholarship.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{scholarship.criteria}</p>
                    <Badge variant="secondary">{scholarship.benefit}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-application-form">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Apply Now</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Form</h2>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
                </div>
                <Progress value={progress} className="w-32" />
              </div>
              <h3 className="text-lg font-semibold mt-4">
                {step === 1 && 'Personal Information'}
                {step === 2 && 'Educational Details'}
                {step === 3 && 'Additional Information'}
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        placeholder="Enter first name"
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        placeholder="Enter last name"
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter email"
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Enter phone number"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => handleChange('dob', e.target.value)}
                        data-testid="input-dob"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(v) => handleChange('gender', v)}>
                        <SelectTrigger data-testid="select-gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="program">Program *</Label>
                    <Select value={formData.program} onValueChange={(v) => handleChange('program', v)}>
                      <SelectTrigger data-testid="select-program">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gnm">GNM - General Nursing & Midwifery</SelectItem>
                        <SelectItem value="bsc">BSc Nursing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="qualification">Highest Qualification *</Label>
                      <Select value={formData.qualification} onValueChange={(v) => handleChange('qualification', v)}>
                        <SelectTrigger data-testid="select-qualification">
                          <SelectValue placeholder="Select qualification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10+2">10+2 / HSC</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="percentage">Percentage Obtained *</Label>
                      <Input
                        id="percentage"
                        value={formData.percentage}
                        onChange={(e) => handleChange('percentage', e.target.value)}
                        placeholder="e.g., 75%"
                        data-testid="input-percentage"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      placeholder="Enter full address"
                      data-testid="input-address"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        placeholder="City"
                        data-testid="input-city"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                        placeholder="State"
                        data-testid="input-state"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleChange('pincode', e.target.value)}
                        placeholder="PIN Code"
                        data-testid="input-pincode"
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleChange('parentName', e.target.value)}
                        placeholder="Enter parent name"
                        data-testid="input-parent-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">Parent/Guardian Phone *</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleChange('parentPhone', e.target.value)}
                        placeholder="Enter phone number"
                        data-testid="input-parent-phone"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to pursue nursing? (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your motivation..."
                      rows={4}
                      data-testid="input-message"
                    />
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our terms and conditions. Our admissions team will contact you within 48 hours.
                    </p>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="justify-between gap-4 flex-wrap">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={step === 1}
                data-testid="button-prev"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              {step < totalSteps ? (
                <Button onClick={handleNext} data-testid="button-next">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-gradient-to-r from-primary to-accent" data-testid="button-submit">
                  Submit Application <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
