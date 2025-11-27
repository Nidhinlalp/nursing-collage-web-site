import HeroSection from '@/components/sections/HeroSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FacultySection from '@/components/sections/FacultySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsTicker from '@/components/sections/NewsTicker';
import AdmissionCTA from '@/components/sections/AdmissionCTA';

export default function Home() {
  return (
    <main data-testid="page-home">
      <HeroSection />
      <StatisticsSection />
      <ProgramsSection />
      <FeaturesSection />
      <FacultySection />
      <TestimonialsSection />
      <NewsTicker />
      <AdmissionCTA />
    </main>
  );
}
