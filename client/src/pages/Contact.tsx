import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  Headphones,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const departments = [
  { name: 'Admissions Office', phone: '+91 98765 43210', email: 'admissions@ietnc.com', icon: User },
  { name: 'Academic Affairs', phone: '+91 98765 43211', email: 'academics@ietnc.com', icon: Building },
  { name: 'Student Services', phone: '+91 98765 43212', email: 'students@ietnc.com', icon: Headphones },
  { name: 'Principal Office', phone: '+91 98765 43213', email: 'principal@ietnc.com', icon: User },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main data-testid="page-contact">
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-accent">
        <div className="relative z-10 text-center px-4">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help you on your journey to becoming a nurse.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" data-testid="section-contact-info">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you have questions about admissions, programs, or campus life, our team is ready to assist you.
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        ITHIS Medicity Nursing College<br />
                        NH Road, Near Medical College<br />
                        Kerala, India - 682001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground text-sm">
                        <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a><br />
                        <a href="tel:+919876543211" className="hover:text-primary">+91 98765 43211</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:info@ietnc.com" className="hover:text-primary">info@ietnc.com</a><br />
                        <a href="mailto:admissions@ietnc.com" className="hover:text-primary">admissions@ietnc.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-hours">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground text-sm">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Location: ITHIS Medicity, Kerala</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Send Us a Message
                  </h3>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your name"
                          required
                          data-testid="input-contact-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="Your email"
                          required
                          data-testid="input-contact-email"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="Your phone number"
                          data-testid="input-contact-phone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(v) => handleChange('subject', v)}>
                          <SelectTrigger data-testid="select-subject">
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                            <SelectItem value="programs">Program Information</SelectItem>
                            <SelectItem value="fees">Fees & Scholarships</SelectItem>
                            <SelectItem value="placements">Placements</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        data-testid="input-contact-message"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent" data-testid="button-send-message">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30" data-testid="section-departments">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">Direct Lines</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Department Contacts</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <Card key={idx} className="hover-elevate" data-testid={`card-department-${idx}`}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{dept.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="hover:text-primary">{dept.phone}</a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <a href={`mailto:${dept.email}`} className="hover:text-primary">{dept.email}</a>
                    </p>
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
