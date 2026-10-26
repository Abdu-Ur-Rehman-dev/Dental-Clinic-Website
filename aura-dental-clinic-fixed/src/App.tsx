import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AISmileConsultant } from './components/AISmileConsultant';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#27343B] selection:bg-[#C9AA78]/30 selection:text-[#102A43]">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <AISmileConsultant />
        <WhyChooseUs />
        <GallerySection />
        <TestimonialsSection />
        <AppointmentSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
