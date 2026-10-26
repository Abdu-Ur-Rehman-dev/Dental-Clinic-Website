import React from 'react';
import { Calendar, ArrowDownRight, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';
import { HERO_DATA } from '../data/dentalData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#FAF8F4]">
      {/* Background Animated Floating Gold Lines & Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#C9AA78]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#A8C5B5]/15 rounded-full blur-3xl animate-pulse" />
        {/* Floating Accent Shapes */}
        <div className="absolute top-32 right-[15%] w-16 h-16 border border-[#C9AA78]/30 rounded-full animate-bounce duration-1000 hidden md:block" />
        <div className="absolute bottom-32 left-[10%] w-24 h-24 border border-[#102A43]/10 rotate-45 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Statement & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A43]/5 border border-[#C9AA78]/30 text-xs font-semibold tracking-widest text-[#102A43] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C9AA78]" />
              <span>Manhattan's Premier Dental Institute</span>
            </div>

            {/* Powerful Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-luxury font-bold text-[#102A43] leading-[1.08] tracking-tight text-balance">
              Your Smile, <br />
              <span className="gold-gradient-text italic font-normal">Our Masterpiece.</span>
            </h1>

            {/* Subtitle / Prose */}
            <p className="text-base sm:text-lg text-[#27343B]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              {HERO_DATA.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#appointment"
                className="w-full sm:w-auto px-8 py-4 bg-[#102A43] hover:bg-[#C9AA78] text-white hover:text-[#102A43] rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-4 h-4 text-[#C9AA78] group-hover:text-[#102A43] transition-colors" />
                <span>Book Appointment</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 border border-[#102A43]/20 hover:border-[#C9AA78] text-[#102A43] hover:text-[#C9AA78] bg-white/50 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Services</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-[#C9AA78]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#102A43] tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-[#27343B]/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Res Luxury Interior Hero Image Frame */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Luxury Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9AA78]/30 group img-zoom-container">
              <img
                src={HERO_DATA.image}
                alt="AURA Luxury Dental Clinic Interior and Equipment Suite"
                className="w-full h-[440px] sm:h-[540px] lg:h-[580px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-transparent opacity-80" />

              {/* Floating Award / Accreditation Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark text-white flex items-center justify-between gap-4 border border-[#C9AA78]/40 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9AA78]/20 flex items-center justify-center shrink-0 border border-[#C9AA78]/50">
                    <Award className="w-5 h-5 text-[#C9AA78]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-serif-luxury text-[#FAF8F4]">
                      World Aesthetic Dental Award Winner
                    </h4>
                    <p className="text-xs text-[#A8C5B5]">Ranked #1 Cosmetic Clinic in NY</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-serif-luxury italic text-[#C9AA78]">Swiss Dental Certified</span>
                </div>
              </div>
            </div>

            {/* Decorative Golden Accent Lines */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#C9AA78] rounded-bl-3xl pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#C9AA78] rounded-tr-3xl pointer-events-none" />

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-semibold tracking-widest text-[#102A43] uppercase">
            Scroll to Explore
          </span>
          <div className="w-5 h-9 border-2 border-[#102A43]/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#C9AA78] rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
