import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateGrid from "@/components/GenerateGrid";
import Card from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4">
        <HeroCarousel />
        <GenerateGrid />
      </section>
    </main>
  );
}
