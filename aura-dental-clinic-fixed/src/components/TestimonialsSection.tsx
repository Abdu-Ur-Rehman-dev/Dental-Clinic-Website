import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/dentalData';
import { Star, ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-bold tracking-widest text-[#C9AA78] uppercase">
            PATIENT TRANSFORMATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#102A43] leading-tight text-balance">
            Stories of Luminous Smiles
          </h2>
          <p className="text-sm sm:text-base text-[#27343B]/80 font-light leading-relaxed">
            Discover how our bespoke cosmetic and restorative treatments have empowered patient lives and confidence.
          </p>
          
          {/* Disclosure Marker */}
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#102A43]/5 text-[11px] text-[#27343B]/70 font-medium">
            <Info className="w-3.5 h-3.5 text-[#C9AA78]" />
            <span>Sample patient testimonials (Representative patient stories)</span>
          </div>
        </div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#C9AA78]/30 shadow-xl space-y-8 relative">
            
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-[#102A43] flex items-center justify-center text-[#C9AA78] shadow-md">
              <Quote className="w-6 h-6" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9AA78] text-[#C9AA78]" />
              ))}
            </div>

            {/* Comment */}
            <p className="text-lg sm:text-xl font-serif-luxury text-[#102A43] italic leading-relaxed">
              "{current.comment}"
            </p>

            {/* Author Meta */}
            <div className="pt-6 border-t border-[#C9AA78]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#102A43]">
                  {current.name}
                </h3>
                <p className="text-xs text-[#27343B]/70 font-light">
                  {current.role} &bull; <span className="text-[#C9AA78] font-medium">{current.treatment}</span>
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border border-[#C9AA78]/30 hover:border-[#C9AA78] bg-[#FAF8F4] hover:bg-[#102A43] text-[#102A43] hover:text-[#C9AA78] transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-[#102A43] tabular-nums">
                  {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border border-[#C9AA78]/30 hover:border-[#C9AA78] bg-[#FAF8F4] hover:bg-[#102A43] text-[#102A43] hover:text-[#C9AA78] transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
