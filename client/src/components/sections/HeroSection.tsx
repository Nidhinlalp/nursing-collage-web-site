import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import heroImage from '@assets/generated_images/nursing_students_hospital_hero.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm" data-testid="badge-inc">
              <CheckCircle className="h-3 w-3 mr-1" /> INC Recognized
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm" data-testid="badge-khsu">
              <CheckCircle className="h-3 w-3 mr-1" /> KHSU Affiliated
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm" data-testid="badge-placement">
              <CheckCircle className="h-3 w-3 mr-1" /> 100% Placements
            </Badge>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up" data-testid="text-hero-headline">
          Shape Your Future in
          <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nursing Excellence
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }} data-testid="text-hero-subheadline">
          INC Recognized | KHSU Affiliated | Center of Excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link href="/admissions">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent border-primary-border text-lg px-8 animate-pulse-slow" data-testid="button-start-journey">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="#programs">
            <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm text-lg px-8" data-testid="button-explore-programs">
              <Play className="mr-2 h-5 w-5" />
              Explore Programs
            </Button>
          </a>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section >
  );
}
