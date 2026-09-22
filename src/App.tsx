import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Disciplines } from './components/Disciplines';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { ArchitectureConfigurator } from './components/ArchitectureConfigurator';
import { Philosophy } from './components/Philosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollNavigation } from './components/ScrollNavigation';

export default function App() {
  const [lang, setLang] = useState<Language>('th');
  const [inquiryScope, setInquiryScope] = useState<string>('');

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleApplySpecs = (specsText: string) => {
    setInquiryScope(specsText);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-zinc-900 selection:bg-[#FF5715] selection:text-white relative">
      {/* Top Reading / Scroll Progress Indicator (Orange Brand Color) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF5715] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Sticky Navigation */}
      <Navbar lang={lang} onLanguageChange={setLang} />

      {/* Floating Scroll Nav & Progress Tracker */}
      <ScrollNavigation lang={lang} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Signature Animated Gepler Logo */}
        <Hero lang={lang} />

        {/* 2. Core Disciplines (Web • App • IoT • AI) */}
        <Disciplines lang={lang} />

        {/* 3. Flagship Interactive Sandbox Showcase */}
        <InteractiveShowcase lang={lang} />

        {/* 4. Tailored Architecture Scope Configurator */}
        <ArchitectureConfigurator lang={lang} onSelectSpecs={handleApplySpecs} />

        {/* 5. Engineering Standards & Differentiation */}
        <Philosophy lang={lang} />

        {/* 6. Direct Engineering Consultation */}
        <ContactSection lang={lang} initialScope={inquiryScope} />
      </main>

      {/* Corporate Minimalist Footer */}
      <Footer lang={lang} />
    </div>
  );
}
