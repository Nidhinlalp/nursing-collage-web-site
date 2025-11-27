import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export default function AdmissionCTA() {
  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-accent bg-[length:200%_100%] animate-gradient-shift"
      data-testid="section-admission-cta"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 animate-pulse-slow gap-1">
            <Clock className="h-3 w-3" />
            Limited Seats Available
          </Badge>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-cta-title">
          Begin Your Nursing Journey Today
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Applications for the 2025-26 academic year are now open. Secure your spot in our INC-recognized nursing programs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-cta-apply">
              <Sparkles className="mr-2 h-5 w-5" />
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 text-lg px-8" data-testid="button-cta-contact">
              Contact Us
            </Button>
          </Link>
        </div>

        <p className="text-white/70 text-sm mt-6">
          Application Deadline: March 31, 2025 | Early applicants get priority consideration
        </p>
      </div>
    </section>
  );
}
