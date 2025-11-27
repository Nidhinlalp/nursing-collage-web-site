import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import graduateImage from '@assets/generated_images/nursing_graduate_testimonial_photo.png';
import alumniImage from '@assets/generated_images/male_nursing_alumni_photo.png';

// todo: remove mock data
const testimonials = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'Staff Nurse, Apollo Hospitals',
    batch: 'BSc Nursing 2022',
    image: graduateImage,
    quote: 'IETNC gave me the foundation I needed to excel in my nursing career. The practical training and supportive faculty prepared me for real-world challenges.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Arun Kumar',
    role: 'ICU Nurse, Fortis Healthcare',
    batch: 'GNM 2021',
    image: alumniImage,
    quote: 'The clinical rotations at partner hospitals gave me hands-on experience that made my transition to professional nursing seamless.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Krishnan',
    role: 'Nurse Educator, CMC Vellore',
    batch: 'BSc Nursing 2019',
    image: graduateImage,
    quote: 'The research focus in the BSc program helped me pursue a career in nursing education. I\'m grateful for the mentorship I received.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-testimonials-label">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Alumni Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who are making a difference in healthcare around the world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                  <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                    <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} />
                    <AvatarFallback>{testimonials[current].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-10 w-10 text-primary/30 mb-4 mx-auto md:mx-0" />
                  <p className="text-lg md:text-xl text-foreground mb-6 italic" data-testid="text-testimonial-quote">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-lg text-foreground" data-testid="text-testimonial-name">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-primary font-medium">{testimonials[current].role}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[current].batch}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} data-testid="button-testimonial-prev">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                  data-testid={`button-testimonial-dot-${idx}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} data-testid="button-testimonial-next">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
