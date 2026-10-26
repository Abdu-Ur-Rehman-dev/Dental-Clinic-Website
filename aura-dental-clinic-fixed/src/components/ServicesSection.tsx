import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/dentalData';
import { DentalService } from '../types/dental';
import { Sparkles, ShieldCheck, Crown, Layers, Activity, HeartPulse, X, ArrowRight, Clock, Award, CheckCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C9AA78]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C9AA78]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#C9AA78]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#C9AA78]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#C9AA78]" />;
      default:
        return <HeartPulse className="w-5 h-5 text-[#C9AA78]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#102A43] text-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9AA78]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8C5B5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-bold tracking-widest text-[#C9AA78] uppercase">
            BESPOKE DENTAL SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#FAF8F4] leading-tight text-balance">
            World-Class Restorative & Aesthetic Dentistry
          </h2>
          <p className="text-sm sm:text-base text-[#A8C5B5] font-light leading-relaxed">
            Every procedure is performed in our tranquil suites using Swiss micro-tools, computerized pain-free anesthesia, and custom ceramic artistry.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-dark rounded-3xl overflow-hidden border border-[#C9AA78]/25 hover:border-[#C9AA78] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden img-zoom-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent opacity-90" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#102A43]/80 backdrop-blur-md border border-[#C9AA78]/30 text-[10px] font-semibold tracking-wider text-[#C9AA78] uppercase">
                    {service.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C9AA78]/15 flex items-center justify-center shrink-0 border border-[#C9AA78]/30">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif-luxury font-bold text-[#FAF8F4] group-hover:text-[#C9AA78] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-[#C9AA78] font-medium tracking-wide">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#FAF8F4]/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#C9AA78] text-[#FAF8F4] hover:text-[#102A43] border border-[#C9AA78]/30 hover:border-[#C9AA78] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#102A43] border border-[#C9AA78]/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 text-[#FAF8F4] relative shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#C9AA78] text-white hover:text-[#102A43] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden border border-[#C9AA78]/30">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-[#C9AA78] font-bold tracking-widest uppercase">
                  {selectedService.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#C9AA78] uppercase tracking-wider">
                Procedure Overview
              </h4>
              <p className="text-xs sm:text-sm text-[#FAF8F4]/80 leading-relaxed font-light">
                {selectedService.fullOverview}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#C9AA78] uppercase tracking-wider">
                Clinical Benefits & Guarantee
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-[#C9AA78]/15">
                    <CheckCircle className="w-4 h-4 text-[#C9AA78] shrink-0 mt-0.5" />
                    <span className="text-[#FAF8F4]/90 font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-[#C9AA78]/20 text-center">
              <div>
                <div className="text-[10px] text-[#A8C5B5] uppercase font-medium">Duration</div>
                <div className="text-xs font-semibold text-[#FAF8F4] mt-0.5">{selectedService.duration}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#A8C5B5] uppercase font-medium">Longevity</div>
                <div className="text-xs font-semibold text-[#FAF8F4] mt-0.5">{selectedService.longevity}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#A8C5B5] uppercase font-medium">Investment</div>
                <div className="text-xs font-semibold text-[#C9AA78] mt-0.5">{selectedService.priceRange}</div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#appointment"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto flex-1 py-3.5 bg-[#C9AA78] hover:bg-[#FAF8F4] text-[#102A43] font-semibold text-xs uppercase tracking-widest rounded-xl transition-all text-center"
              >
                Book This Procedure
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto py-3.5 px-6 bg-white/10 hover:bg-white/20 text-[#FAF8F4] font-medium text-xs uppercase tracking-widest rounded-xl transition-all"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
