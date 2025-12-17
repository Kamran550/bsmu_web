import NewsHero from "@/components/sections/news/NewsHero";
import NewsGrid from "@/components/sections/news/NewsGrid";
import NewsletterSection from "@/components/sections/news/NewsletterSection";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white font-sans dark:bg-slate-950">
      <NewsHero />
      <NewsGrid />
      <NewsletterSection />
    </main>
  );
}
