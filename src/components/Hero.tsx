import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import {
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  Eye,
  Play,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { ConstellationHeroStage } from './ConstellationHeroStage';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<'web' | 'app' | 'iot' | 'ai' | null>(null);

  const pillars = [
    { id: 'web', label: 'Web', icon: Globe, highlightTh: 'Cloud & Web', highlightEn: 'Cloud & Web' },
    { id: 'app', label: 'App', icon: Smartphone, highlightTh: 'iOS & Android', highlightEn: 'iOS & Android' },
    { id: 'iot', label: 'IoT', icon: Cpu, highlightTh: 'Hardware & Sensor', highlightEn: 'Hardware & Sensor' },
    { id: 'ai', label: 'AI', icon: Eye, highlightTh: 'Vision & Inference', highlightEn: 'Vision & Inference' },
  ];

  // Staggered orchestration variants for Hero content entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const stageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 24 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white overflow-hidden">
      {/* Background Subtle Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0F1012 1px, transparent 1px),
            linear-gradient(to bottom, #0F1012 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle radial ambient light accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF5715]/10 via-[#F7B218]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Executive 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines, Narrative, & Direct Calls to Action (Staggered Animation) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Top Badge: Bespoke Engineering Studio */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/90 shadow-2xs mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5715] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-800">
                {content[lang].hero.badge}
              </span>
              <span className="text-zinc-300 text-xs">•</span>
              <span className="text-xs font-mono text-[#FF5715] font-semibold">
                {content[lang].hero.titleHighlight}
              </span>
            </motion.div>

            {/* Main Hero Headlines */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F1012] tracking-tight leading-[1.12] mb-5 font-['Space_Grotesk']"
            >
              {content[lang].hero.headline1}
              <br />
              <span className="text-[#FF5715] selection:bg-[#0F1012] selection:text-white">
                {content[lang].hero.headline2}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed mb-8 font-normal"
            >
              {content[lang].hero.subheadline}
            </motion.p>

            {/* 4 Fast Discipline Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg mb-8"
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <a
                    key={pillar.id}
                    href="#disciplines"
                    className="p-2.5 rounded-xl border border-zinc-200/80 bg-zinc-50/70 hover:bg-zinc-100/90 hover:border-zinc-300 transition-all flex items-center gap-2 text-xs font-medium text-zinc-700"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FF5715] shrink-0" />
                    <span className="font-mono font-bold">{pillar.label}</span>
                  </a>
                );
              })}
            </motion.div>

            {/* Action Buttons (CTAs) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10"
            >
              <a
                href="#configurator"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF5715] hover:bg-[#e04b0f] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#FF5715]/25 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{content[lang].hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#showcase"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-zinc-50 text-[#0F1012] border border-zinc-300 text-sm sm:text-base font-bold shadow-2xs flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#FF5715] fill-[#FF5715]" />
                <span>{content[lang].hero.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-zinc-200/80 w-full max-w-lg grid grid-cols-3 gap-3"
            >
              {content[lang].hero.fastFacts.map((fact, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F1012] font-mono">
                    {fact.value}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-medium mt-0.5">
                    {fact.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: The Gepler Constellation Orbital Showcase */}
          <motion.div
            variants={stageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-center justify-center relative w-full"
          >
            {/* Stage Frame with Ambient Lighting */}
            <div className="w-full relative">
              <ConstellationHeroStage
                lang={lang}
                onSelectDiscipline={(id) => setSelectedDiscipline(id)}
              />

              {/* Subtitle Badge below stage */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono">
                <Sparkles className="w-3 h-3 text-[#FF5715]" />
                <span>
                  {lang === 'th'
                    ? 'สถาปัตยกรรมกลุ่มดาวดิจิทัล • หมุนเมาส์เพื่อดูมิติ 3D'
                    : 'Digital Constellation Architecture • Move cursor for 3D depth'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{
            opacity: { delay: 0.9, duration: 0.6 },
            y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
          }}
          onClick={() => {
            const el = document.getElementById('disciplines');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-14 sm:mt-18 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer select-none"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">
            {lang === 'th' ? 'เลื่อนลงเพื่อดูข้อมูล' : 'Scroll down to explore'}
          </span>
          <ChevronDown className="w-4 h-4 text-[#FF5715]" />
        </motion.div>
      </div>
    </section>
  );
};
