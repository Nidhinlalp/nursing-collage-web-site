import HeroSection from '@/components/sections/HeroSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import WelcomeSection from '@/components/sections/WelcomeSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsTicker from '@/components/sections/NewsTicker';
import AdmissionCTA from '@/components/sections/AdmissionCTA';

export default function Home() {
  return (
    <main data-testid="page-home">
      <HeroSection />
      <StatisticsSection />
      <WelcomeSection />
      <ProgramsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsTicker />
      <AdmissionCTA />
    </main>
  );
}
