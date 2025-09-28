'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      tag: "NEW INSIDE MODEL",
      bgImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=400&fit=crop",
      bgGradient: "from-orange-600/70 to-amber-800/80"
    },
    {
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or experiment with it in Krea Image.",
      buttonText: "Try FLUX.1",
      tag: "FLUX MODEL",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      bgGradient: "from-blue-600/70 to-purple-800/80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

    const goToSlide = (index:any) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative mb-12">
      <div className="flex space-x-6">
        {/* Main slide */}
        <div className="flex-1 relative overflow-hidden rounded-2xl h-80 group">
          <div className="absolute inset-0">
            <img 
              src={slides[currentSlide].bgImage}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient}`}></div>
          </div>
          
          <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
            <div>
              <span className="text-xs opacity-90 uppercase tracking-wider font-medium">
                {slides[currentSlide].tag}
              </span>
              <h1 className="text-5xl font-bold mt-2 mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl font-semibold mb-4 opacity-95">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-sm opacity-90 max-w-md leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 w-fit shadow-lg hover:shadow-xl transform hover:scale-105">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>

        {/* Secondary slide preview */}
        <div className="w-80 relative overflow-hidden rounded-2xl h-80 cursor-pointer group" onClick={nextSlide}>
          <div className="absolute inset-0">
            <img 
              src={slides[(currentSlide + 1) % slides.length].bgImage}
              alt={slides[(currentSlide + 1) % slides.length].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[(currentSlide + 1) % slides.length].bgGradient} group-hover:opacity-90 transition-opacity duration-300`}></div>
          </div>
          
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
            <div>
              <span className="text-xs opacity-80 uppercase tracking-wider font-medium">
                {slides[(currentSlide + 1) % slides.length].tag}
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-2 leading-tight">
                {slides[(currentSlide + 1) % slides.length].title}
              </h3>
              <h4 className="text-lg font-medium mb-3 opacity-90">
                {slides[(currentSlide + 1) % slides.length].subtitle}
              </h4>
              <p className="text-xs opacity-80 leading-relaxed line-clamp-3">
                {slides[(currentSlide + 1) % slides.length].description}
              </p>
            </div>
          </div>
          
          {/* Hover indicator */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 group"
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 group"
      >
        <ChevronRight className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-3 bg-gray-800' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;