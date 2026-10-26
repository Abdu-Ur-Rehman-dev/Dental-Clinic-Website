import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-12 border-t border-[#C9AA78]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#C9AA78]/20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2 text-2xl font-serif-luxury font-bold tracking-widest text-[#FAF8F4] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C9AA78]" />
              <span>AURA DENTAL CLINIC</span>
            </a>
            <p className="text-xs text-[#A8C5B5] font-light leading-relaxed max-w-sm">
              Manhattan's premier boutique institute for cosmetic dentistry, digital smile design, and painless oral restoration.
            </p>
            <div className="pt-2 text-xs font-serif-luxury italic text-[#C9AA78]">
              "Your Smile, Our Masterpiece."
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#C9AA78] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F4]/80 font-light">
              <li><a href="#about" className="hover:text-[#C9AA78] transition-colors">About Institute</a></li>
              <li><a href="#services" className="hover:text-[#C9AA78] transition-colors">Bespoke Services</a></li>
              <li><a href="#ai-consultation" className="hover:text-[#C9AA78] transition-colors">AI Consultation</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#C9AA78] transition-colors">3D Technology</a></li>
              <li><a href="#gallery" className="hover:text-[#C9AA78] transition-colors">Clinic Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-[#C9AA78] transition-colors">Patient Stories</a></li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#C9AA78] uppercase tracking-wider">
              Procedures
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F4]/80 font-light">
              <li><a href="#services" className="hover:text-[#C9AA78] transition-colors">Laser Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-[#C9AA78] transition-colors">Swiss Dental Implants</a></li>
              <li><a href="#services" className="hover:text-[#C9AA78] transition-colors">Porcelain Smile Makeover</a></li>
              <li><a href="#services" className="hover:text-[#C9AA78] transition-colors">Invisible Clear Aligners</a></li>
              <li><a href="#services" className="hover:text-[#C9AA78] transition-colors">Gentle Endodontic Therapy</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#C9AA78] uppercase tracking-wider">
              Manhattan Institute
            </h4>
            <div className="space-y-2 text-xs text-[#FAF8F4]/80 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9AA78] shrink-0 mt-0.5" />
                <span>740 Park Avenue, Suite 12B<br />New York, NY 10021</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#C9AA78] shrink-0" />
                <span>+1 (212) 555-0198</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9AA78] shrink-0" />
                <span>concierge@auradental.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A8C5B5] font-light">
          <div>
            &copy; {new Date().getFullYear()} AURA DENTAL CLINIC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C9AA78] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9AA78] transition-colors">Terms of VIP Service</a>
            <a href="#" className="hover:text-[#C9AA78] transition-colors">HIPAA Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
