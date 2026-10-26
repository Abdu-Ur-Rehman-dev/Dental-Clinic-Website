import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/dentalData';
import { GalleryItem } from '../types/dental';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'suites' | 'lounge' | 'technology'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#102A43] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="text-xs font-bold tracking-widest text-[#C9AA78] uppercase">
            ARCHITECTURAL SANCTUARY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#FAF8F4] leading-tight text-balance">
            Explore Our Luxury Clinic Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#A8C5B5] font-light leading-relaxed">
            Designed as a peaceful retreat in New York. Experience our state-of-the-art operating suites, VIP lounge, and digital design studio.
          </p>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Spaces' },
              { id: 'suites', label: 'Treatment Suites' },
              { id: 'lounge', label: 'VIP Lounge' },
              { id: 'technology', label: '3D Tech Suite' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#C9AA78] text-[#102A43] shadow-md'
                    : 'bg-white/5 text-[#FAF8F4]/70 hover:text-white border border-[#C9AA78]/20 hover:border-[#C9AA78]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-[#C9AA78]/20 hover:border-[#C9AA78] shadow-lg transition-all duration-500 hover:-translate-y-1.5 img-zoom-container h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-left">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-[#C9AA78] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9AA78]">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#FAF8F4]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A8C5B5] font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#C9AA78] text-white hover:text-[#102A43] transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-[#C9AA78] text-white hover:text-[#102A43] transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-2xl border border-[#C9AA78]/30 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="text-center space-y-1">
              <span className="text-xs font-bold text-[#C9AA78] uppercase tracking-wider">
                {filteredItems[lightboxIndex].categoryLabel}
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#A8C5B5] font-light max-w-lg mx-auto">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-[#C9AA78] text-white hover:text-[#102A43] transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}

    </section>
  );
};
