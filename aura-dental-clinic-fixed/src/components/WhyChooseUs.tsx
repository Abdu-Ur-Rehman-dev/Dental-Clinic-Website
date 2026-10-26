import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../data/dentalData';
import { Scan, Cpu, Feather, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Scan':
        return <Scan className="w-5 h-5 text-[#C9AA78]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#C9AA78]" />;
      case 'Feather':
        return <Feather className="w-5 h-5 text-[#C9AA78]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C9AA78]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Technology Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-widest text-[#C9AA78] uppercase">
              {WHY_CHOOSE_US_DATA.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#102A43] leading-tight text-balance">
              {WHY_CHOOSE_US_DATA.title}
            </h2>

            <p className="text-base text-[#27343B]/80 font-light leading-relaxed">
              {WHY_CHOOSE_US_DATA.description}
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {WHY_CHOOSE_US_DATA.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#C9AA78]/25 hover:border-[#C9AA78] shadow-sm hover:shadow-md transition-all duration-300 space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#102A43] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-sm font-serif-luxury font-bold text-[#102A43]">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#27343B]/70 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Res 3D Technology Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9AA78]/30 img-zoom-container">
              <img
                src={WHY_CHOOSE_US_DATA.mainImage}
                alt="3D CBCT Dental Imaging Technology Suite"
                className="w-full h-[400px] sm:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/50 via-transparent to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark text-white border border-[#C9AA78]/40 shadow-xl backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#C9AA78] uppercase tracking-wider">
                    Zero Pain Protocol
                  </div>
                  <p className="text-xs text-[#A8C5B5] font-light mt-0.5">
                    Micro-Surgical Computerized STA Anesthesia
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C9AA78]/20 flex items-center justify-center text-[#C9AA78]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Decorative Gold Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#C9AA78] rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#C9AA78] rounded-br-2xl pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};
