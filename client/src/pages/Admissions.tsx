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
    question: 'Educational Qualifications',
    answer: 'Passed Higher Secondary Examination (HSC) from Kerala Board or equivalent with Physics, Chemistry, and Biology. Minimum 50% aggregate marks in PCB (Pass mark for SC/ST).',
  },
  {
    question: 'Age Requirements',
    answer: 'Minimum age: 17 years as on 31.12.2025. Maximum age: 35 years as on 31.12.2025.',
  },
  {
    question: 'Medical Fitness',
    answer: 'Candidates must be medically fit and produce a certificate from an authorized government medical officer. Vaccination certificate is also required.',
  },
  {
    question: 'Seat Distribution',
    answer: '50% Government Merit (through government merit list) and 50% Management Quota (based on PCB marks).',
  },
];

const feeStructure = [
  { year: '1st Year', tuition: '₹73,025', special: '₹28,145', caution: '₹10,000', total: '₹111,170' },
  { year: '2nd Year', tuition: '₹73,025', special: '₹24,280', caution: '-', total: '₹97,305' },
  { year: '3rd Year', tuition: '₹73,025', special: '₹24,280', caution: '-', total: '₹97,305' },
  { year: '4th Year', tuition: '₹73,025', special: '₹24,280', caution: '-', total: '₹97,305' },
];

const admissionProcess = [
  { step: 1, title: 'Application', desc: 'Apply online at www.ietnc.com. Fee: ₹1,200.' },
  { step: 2, title: 'Selection', desc: 'Merit list published based on PCB marks.' },
  { step: 3, title: 'Merit Discussion', desc: 'Interview and counseling session.' },
  { step: 4, title: 'Verification', desc: 'Original documents and medical fitness check.' },
  { step: 5, title: 'Admission', desc: 'Fee payment and admission confirmation.' },
];

const requiredDocuments = [
  'SSLC & Plus Two Certificates',
  'Transfer & Conduct Certificates',
  'Medical Fitness & Vaccination Certificates',
  'Migration & Equivalency Certificates (if applicable)',
  'Caste & Nativity Certificates',
  'Aadhaar Card',
  '5 Passport & 3 Stamp size photos',
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
      <section className="relative py-20 flex items-center justify-center bg-gradient-to-r from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center px-4 container mx-auto">
          <div className="inline-block animate-bounce-in mb-6">
            <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg border-2 border-white/20 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              CRITICAL DEADLINE: 26/11/2025 at 4:00 PM
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" data-testid="text-admissions-title">
            Admissions 2025-26
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Shape your future with our B.Sc Nursing program.
            <br />INC Recognized | KHSU Affiliated
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-program-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="hover-elevate border-primary/20 shadow-lg" data-testid="card-bsc-program">
              <CardHeader className="pb-4 border-b bg-muted/30">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent shadow-md">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Bachelor of Science in Nursing (B.Sc Nursing)</h3>
                    <p className="text-muted-foreground">Undergraduate Degree Program</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-semibold block">Duration</span>
                      <span className="text-muted-foreground">4 Years (8 Semesters)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-semibold block">Annual Intake</span>
                      <span className="text-muted-foreground">30 Students</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-semibold block">Recognition</span>
                      <span className="text-muted-foreground">INC & KNMC Approved</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <span className="font-semibold block">Affiliation</span>
                      <span className="text-muted-foreground">KHSU, Thrissur</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 border-t p-6">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex gap-2">
                    <Badge variant="secondary">Govt Merit: 50% Seats</Badge>
                    <Badge variant="secondary">Mgmt Quota: 50% Seats</Badge>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground block">First Year Fees</span>
                    <span className="text-2xl font-bold text-primary">₹1,11,170</span>
                  </div>
                </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fee Structure 2025-26</h2>
            <p className="text-muted-foreground">Detailed breakdown of academic fees per year</p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead className="text-right">Tuition Fee</TableHead>
                  <TableHead className="text-right">Special Fee</TableHead>
                  <TableHead className="text-right">Caution Deposit</TableHead>
                  <TableHead className="text-right font-bold">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStructure.map((row, idx) => (
                  <TableRow key={idx} data-testid={`row-fee-${idx}`}>
                    <TableCell className="font-medium">{row.year}</TableCell>
                    <TableCell className="text-right">{row.tuition}</TableCell>
                    <TableCell className="text-right">{row.special}</TableCell>
                    <TableCell className="text-right">{row.caution}</TableCell>
                    <TableCell className="text-right font-bold">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="p-4 bg-muted/50 text-sm text-muted-foreground">
              <p>* Additional charges applicable for Uniform, Textbooks, Health Insurance, etc.</p>
              <p>* Application Fee: ₹1,200 (Non-refundable)</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" data-testid="section-process-docs">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Steps</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Admission Process</h2>
              </div>
              <div className="space-y-6">
                {admissionProcess.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Checklist</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Required Documents</h2>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-anti-ragging">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Anti-Ragging Policy</h2>
            <p className="text-lg font-semibold mb-4">RAGGING IS STRICTLY PROHIBITED</p>
            <p className="text-muted-foreground mb-6">
              Ragging in any form is a criminal offense. Students found guilty will be expelled immediately and reported to the police.
              All students must register at <a href="https://www.antiragging.in" target="_blank" rel="noreferrer" className="text-primary hover:underline">www.antiragging.in</a>.
            </p>
            <Button variant="destructive" asChild>
              <a href="https://www.antiragging.in" target="_blank" rel="noreferrer">
                Register Anti-Ragging Undertaking
              </a>
            </Button>
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
