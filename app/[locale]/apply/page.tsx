import ApplyHero from "@/components/sections/apply/ApplyHero";
import ApplyForm from "@/components/sections/apply/ApplyForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white font-sans dark:bg-slate-950">
      <ApplyHero />
      <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplyForm />
        </div>
      </section>
    </main>
  );
}
