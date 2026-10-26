import React, { useState } from 'react';
import { Sparkles, Bot, Loader2, CheckCircle2, ArrowRight, Shield, Award, HelpCircle } from 'lucide-react';
import { AIConsultationResponse } from '../types/dental';

export const AISmileConsultant: React.FC = () => {
  const [goals, setGoals] = useState('Radiant White Smile & Natural Symmetry');
  const [concerns, setConcerns] = useState('Slight discoloration and minor gap alignment');
  const [budgetPreference, setBudgetPreference] = useState('Signature Luxury Tier');
  const [timeline, setTimeline] = useState('Within 1-3 Months');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIConsultationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const goalOptions = [
    'Radiant White Smile & Natural Symmetry',
    'Full Hollywood Porcelain Veneer Makeover',
    'Discreet Straightening & Alignment',
    'Permanent Replacement for Missing Teeth',
    'Comprehensive Oral Wellness Restructuring'
  ];

  const concernOptions = [
    'Slight discoloration and minor gap alignment',
    'Deep coffee/wine staining and uneven edges',
    'Chipped or worn down front teeth',
    'Missing tooth structure or old metal fillings',
    'Anxiety about painful procedures'
  ];

  const budgetOptions = [
    'Essential Brightening ($500 - $1,500)',
    'Signature Luxury Tier ($2,500 - $8,000)',
    'Masterpiece Couture ($10,000 - $25,000+)'
  ];

  const timelineOptions = [
    'Single Visit / Rapid Transformation',
    'Within 1-3 Months',
    'Flexible Schedule over 6 Months'
  ];

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/smile-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          goals,
          concerns,
          budgetPreference,
          timeline,
        }),
      });

      const data = await response.json();
      if (data.success && data.consultation) {
        setResult(data.consultation);
      } else {
        setError(data.error || 'Failed to generate AI consultation.');
      }
    } catch (err: any) {
      console.error(err);
      setError('Unable to connect to the AI Smile Studio server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultation" className="py-20 lg:py-32 bg-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A43]/5 border border-[#C9AA78]/30 text-xs font-semibold tracking-widest text-[#102A43] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C9AA78]" />
            <span>AI Aesthetic Consultation Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#102A43] leading-tight text-balance">
            Design Your Dream Smile in Seconds
          </h2>
          <p className="text-sm sm:text-base text-[#27343B]/80 font-light leading-relaxed">
            Our intelligent clinical consultant evaluates your aesthetic goals to craft a personalized, non-binding treatment roadmap before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Preferences Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#C9AA78]/30 shadow-lg space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#C9AA78]/20">
              <div className="w-10 h-10 rounded-full bg-[#102A43] flex items-center justify-center text-[#C9AA78]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-serif-luxury font-bold text-[#102A43]">
                  Virtual Aesthetic Assessment
                </h3>
                <p className="text-xs text-[#27343B]/70 font-light">
                  Select your preferences to generate instant analysis
                </p>
              </div>
            </div>

            <form onSubmit={handleConsultationSubmit} className="space-y-5">
              
              {/* Goal Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102A43] mb-1.5">
                  1. Primary Aesthetic Goal
                </label>
                <select
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#C9AA78]/30 bg-[#FAF8F4] text-xs font-medium text-[#102A43] focus:outline-none focus:border-[#C9AA78]"
                >
                  {goalOptions.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Concern Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102A43] mb-1.5">
                  2. Primary Dental Concern
                </label>
                <select
                  value={concerns}
                  onChange={(e) => setConcerns(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#C9AA78]/30 bg-[#FAF8F4] text-xs font-medium text-[#102A43] focus:outline-none focus:border-[#C9AA78]"
                >
                  {concernOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Investment Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102A43] mb-1.5">
                  3. Target Investment Level
                </label>
                <select
                  value={budgetPreference}
                  onChange={(e) => setBudgetPreference(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#C9AA78]/30 bg-[#FAF8F4] text-xs font-medium text-[#102A43] focus:outline-none focus:border-[#C9AA78]"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Timeline Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102A43] mb-1.5">
                  4. Desired Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#C9AA78]/30 bg-[#FAF8F4] text-xs font-medium text-[#102A43] focus:outline-none focus:border-[#C9AA78]"
                >
                  {timelineOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#102A43] hover:bg-[#C9AA78] text-white hover:text-[#102A43] rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#C9AA78]" />
                    <span>Analyzing Aesthetic Profile...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#C9AA78]" />
                    <span>Generate AI Smile Roadmap</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: AI Output Display */}
          <div className="lg:col-span-7">
            {error && (
              <div className="p-4 rounded-2xl bg-red-50 text-red-700 text-xs border border-red-200 mb-4">
                {error}
              </div>
            )}

            {!result && !loading && (
              <div className="bg-[#102A43] text-white p-8 sm:p-12 rounded-3xl border border-[#C9AA78]/30 text-center space-y-6 shadow-xl relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-[#C9AA78]/20 border border-[#C9AA78]/40 flex items-center justify-center mx-auto text-[#C9AA78]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#FAF8F4]">
                    Ready to Preview Your Transformation?
                  </h3>
                  <p className="text-xs text-[#A8C5B5] font-light leading-relaxed">
                    Select your goals on the left and click "Generate AI Smile Roadmap" to receive a tailored clinical assessment generated in real time by Gemini AI.
                  </p>
                </div>
                <div className="pt-4 grid grid-cols-2 gap-4 text-left max-w-sm mx-auto text-[11px] text-[#FAF8F4]/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9AA78] shrink-0" />
                    <span>Instant 3D treatment breakdown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C9AA78] shrink-0" />
                    <span>Transparent investment estimate</span>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="bg-[#102A43] text-white p-12 rounded-3xl border border-[#C9AA78]/30 text-center space-y-4 shadow-xl">
                <Loader2 className="w-10 h-10 animate-spin text-[#C9AA78] mx-auto" />
                <p className="text-sm font-serif-luxury text-[#FAF8F4]">
                  Consulting AURA Clinical AI Knowledge Base...
                </p>
                <p className="text-xs text-[#A8C5B5] font-light">
                  Analyzing facial proportions, shade index, and ceramic restorative paths...
                </p>
              </div>
            )}

            {result && !loading && (
              <div className="bg-[#102A43] text-white p-6 sm:p-8 rounded-3xl border border-[#C9AA78]/40 shadow-2xl space-y-6 animate-in fade-in duration-500">
                
                {/* Greeting */}
                <div className="space-y-1 pb-4 border-b border-[#C9AA78]/20">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#C9AA78]">
                    AURA Aesthetic AI Assessment
                  </div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#FAF8F4]">
                    {result.personalizedGreeting}
                  </h3>
                </div>

                {/* Recommended Treatments */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-[#C9AA78] uppercase tracking-wider">
                    Recommended Primary Treatments
                  </h4>
                  <div className="space-y-3">
                    {result.recommendedTreatments?.map((t, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/5 border border-[#C9AA78]/20 space-y-1">
                        <div className="flex items-center justify-between text-xs font-bold text-[#FAF8F4]">
                          <span>{t.name}</span>
                          <span className="text-[10px] text-[#C9AA78] bg-[#C9AA78]/10 px-2 py-0.5 rounded-full">
                            {t.timeframe}
                          </span>
                        </div>
                        <p className="text-xs text-[#FAF8F4]/80 font-light leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment & Outcomes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-[#C9AA78]/20 space-y-1">
                    <span className="text-[10px] text-[#A8C5B5] font-medium uppercase">
                      Estimated Investment
                    </span>
                    <div className="text-lg font-bold font-serif-luxury text-[#C9AA78]">
                      {result.estimatedInvestmentRange}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-[#C9AA78]/20 space-y-1">
                    <span className="text-[10px] text-[#A8C5B5] font-medium uppercase">
                      Transformational Outcomes
                    </span>
                    <ul className="text-xs text-[#FAF8F4]/90 space-y-1 list-disc list-inside font-light">
                      {result.expectedOutcomes?.map((out, i) => (
                        <li key={i}>{out}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expert Note */}
                <div className="p-4 rounded-xl bg-[#C9AA78]/10 border border-[#C9AA78]/30 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-[#C9AA78] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Clinical Director Note</span>
                  </div>
                  <p className="text-xs text-[#FAF8F4]/90 font-light italic">
                    "{result.expertClinicalNote}"
                  </p>
                </div>

                {/* Book Action */}
                <div className="pt-2">
                  <a
                    href="#appointment"
                    className="w-full py-3.5 bg-[#C9AA78] hover:bg-[#FAF8F4] text-[#102A43] font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Reserve Consultation for This Roadmap</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
