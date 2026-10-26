import React from 'react';
import { ABOUT_DATA } from '../data/dentalData';
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Subtle Gold Frame Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#C9AA78]/30 img-zoom-container">
              <img
                src={ABOUT_DATA.image}
                alt="AURA Private Treatment Suite"
                className="w-full h-[400px] sm:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge Box */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#102A43] text-white p-6 rounded-2xl border border-[#C9AA78]/40 shadow-2xl max-w-xs">
              <div className="text-3xl font-serif-luxury font-bold text-[#C9AA78]">100%</div>
              <div className="text-xs font-light text-[#A8C5B5] mt-1">
                Bespoke Tailored Aesthetic Treatments with Painless Computerized Anesthesia
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-widest text-[#C9AA78] uppercase">
              {ABOUT_DATA.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#102A43] leading-tight text-balance">
              {ABOUT_DATA.title}
            </h2>

            <p className="text-base text-[#27343B]/80 font-light leading-relaxed">
              {ABOUT_DATA.paragraph1}
            </p>

            <p className="text-base text-[#27343B]/80 font-light leading-relaxed">
              {ABOUT_DATA.paragraph2}
            </p>

            {/* 3 Core Pillars */}
            <div className="pt-4 space-y-4 border-t border-[#C9AA78]/20">
              {ABOUT_DATA.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/60 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#C9AA78]/15 flex items-center justify-center shrink-0 text-[#C9AA78] mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#102A43] font-serif-luxury">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#27343B]/70 font-light mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
