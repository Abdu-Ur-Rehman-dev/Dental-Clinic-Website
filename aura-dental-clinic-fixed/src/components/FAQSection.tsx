import React, { useState } from 'react';
import { FAQ_DATA } from '../data/dentalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#FAF8F4] relative overflow-hidden border-t border-[#C9AA78]/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A43]/5 border border-[#C9AA78]/30 text-xs font-semibold tracking-widest text-[#102A43] uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9AA78]" />
            <span>PATIENT INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#102A43]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#27343B]/70 font-light max-w-xl mx-auto">
            Everything you need to know about our luxury care protocols, appointment scheduling, and treatment longevity.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#C9AA78]/25 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-luxury text-base sm:text-lg font-bold text-[#102A43] hover:text-[#C9AA78] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-[#FAF8F4] border border-[#C9AA78]/20 text-[#C9AA78] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#102A43] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#27343B]/80 font-light leading-relaxed border-t border-[#C9AA78]/10 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
