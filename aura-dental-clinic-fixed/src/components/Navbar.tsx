import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'AI Consultation', href: '#ai-consultation' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 border-b border-[#C9AA78]/20 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl md:text-2xl font-serif-luxury font-semibold tracking-wide text-[#102A43] whitespace-nowrap shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9AA78] group-hover:scale-150 transition-transform duration-300" />
          <span className="tracking-widest uppercase">AURA DENTAL CLINIC</span>
        </a>

        {/* Zone 2: 4-6 Clean Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#27343B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C9AA78] transition-colors relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C9AA78] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="tel:+12125550198"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#102A43] hover:text-[#C9AA78] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9AA78]" />
            <span>+1 (212) 555-0198</span>
          </a>
          <a
            href="#appointment"
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#102A43] hover:bg-[#C9AA78] hover:text-[#102A43] rounded-full transition-all duration-300 shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#102A43] hover:text-[#C9AA78] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] glass-nav border-b border-[#C9AA78]/30 p-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-[#102A43] hover:text-[#C9AA78] transition-colors border-b border-[#C9AA78]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+12125550198"
                className="flex items-center justify-center gap-2 text-sm font-medium text-[#102A43] py-2"
              >
                <Phone className="w-4 h-4 text-[#C9AA78]" />
                <span>+1 (212) 555-0198</span>
              </a>
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#102A43] hover:bg-[#C9AA78] hover:text-[#102A43] rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
