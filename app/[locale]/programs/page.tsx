import ProgramsHero from "@/components/sections/programs/ProgramsHero";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";
// import TestimonialsSection from "@/components/sections/Testimonials";
import ApplyCTA from "@/components/sections/ApplyCTA";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white font-sans dark:bg-slate-950">
      <ProgramsHero />
      <ProgramsGrid />
      {/* <TestimonialsSection /> */}
      <ApplyCTA />
    </main>
  );
}
