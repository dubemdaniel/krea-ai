"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Analytics from "@/public/analytics.jpeg";
import OpenSource from "@/public/openSource.jpeg";
import Wan from "@/public/wan.jpeg";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  tag: string;
  bgImage: string | any;
  bgGradient: string;
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides: Slide[] = [
    {
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      tag: "NEW INSIDE MODEL",
      bgImage: Wan,
      bgGradient: "from-orange-600/70 to-amber-800/80",
    },
    {
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description:
        "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or experiment with it in Krea Image.",
      buttonText: "Try FLUX.1",
      tag: "FLUX MODEL",
      bgImage: OpenSource,
      bgGradient: "from-blue-600/70 to-purple-800/80",
    },
    {
      title: "AI Studio",
      subtitle: "Creative AI Tools",
      description:
        "Explore our comprehensive suite of AI-powered creative tools. From image generation to text processing, unleash your creativity with cutting-edge technology.",
      buttonText: "Explore Studio",
      tag: "CREATIVE SUITE",
      bgImage: Wan,
      bgGradient: "from-purple-600/70 to-pink-800/80",
    },
    {
      title: "Pro Vision",
      subtitle: "Advanced Analytics",
      description:
        "Get detailed insights and analytics for your AI-generated content. Track performance, optimize results, and make data-driven decisions for better outcomes.",
      buttonText: "View Analytics",
      tag: "ANALYTICS PLATFORM",
      bgImage: Analytics,
      bgGradient: "from-green-600/70 to-teal-800/80",
    },
    {
      title: "Neural Networks",
      subtitle: "Deep Learning Models",
      description:
        "Advanced neural network architectures for complex AI tasks. Train and deploy sophisticated models with our cutting-edge infrastructure.",
      buttonText: "Start Training",
      tag: "ML PLATFORM",
      bgImage: OpenSource,
      bgGradient: "from-indigo-600/70 to-blue-800/80",
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    // Sensitivity threshold
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="mb-12 md:mt-16 mt-8">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentSlide * (isMobile ? 100 : 70)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl mr-4 md:mr-6 w-full md:w-[70%]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 md:pt-8 px-6 md:px-8 h-full flex flex-col justify-between text-white">
                <div>
                  <span className="text-xs opacity-90 uppercase tracking-wider font-medium">
                    {slide.tag}
                  </span>

                  <h1 className="text-xl md:text-6xl font-bold md:font-extrabold md:text-center mt-2 md:mt-20 mb-2 md:mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  <h2 className="text-base md:text-xl font-semibold mb-2 md:mb-4 opacity-95">
                    {slide.subtitle}
                  </h2>

                  <div className="flex flex-col md:flex-row md:justify-between gap-4">
                    <p className="text-xs md:text-sm opacity-90 max-w-md leading-relaxed">
                      {slide.description}
                    </p>

                    <button className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-3xl flex justify-center items-center font-medium hover:bg-gray-100 transition-all duration-200 w-fit shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-sm md:font-semibold">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls at bottom */}
      <div className="relative flex justify-center items-center mt-4">
        {/* Pagination dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full w-2 h-2 ${
                index === currentSlide
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="absolute right-0 flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 hover:border-gray-300 group"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-110" />
          </button>
          <button
            onClick={nextSlide}
            className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200  hover:border-gray-300 group"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
