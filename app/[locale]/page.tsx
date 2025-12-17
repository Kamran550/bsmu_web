import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
// import { TeachersSection } from "@/components/sections/Teachers";
import StatisticsSection from "@/components/sections/Statistics";
// import TestimonialsSection from "@/components/sections/Testimonials";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ApplyCTA from "@/components/sections/ApplyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans dark:bg-slate-950">
      <HeroSection />
      <AboutPreview />
      <StatisticsSection />
      {/* <TeachersSection /> */}
      {/* <TestimonialsSection /> */}
      <FeaturesSection />
      <ApplyCTA />
    </main>
  );
}
