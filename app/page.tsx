import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import GenerateGrid from "@/components/GenerateGrid";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="min-h-screen md:min-h-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ">
      <nav className="max-w-[1600px] items-center md:flex justify-center md:mx-auto">

      <Navbar />
      </nav>
      <section className=" mx-auto px-4 max-w-[1600px] ">
        <HeroCarousel />
        <GenerateGrid />
        <GallerySection />
      </section>
    </main>
  );
}
