import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateGrid from "@/components/GenerateGrid";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4">
        <HeroCarousel />
        <GenerateGrid />
        <GallerySection />
      </section>
    </main>
  );
}
