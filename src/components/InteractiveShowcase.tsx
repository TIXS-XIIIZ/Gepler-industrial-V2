import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Cpu,
  Eye,
  Globe,
  Smartphone,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Language, ShowcaseProject } from '../types';
import { showcaseProjects, content } from '../data/content';
import { InteractiveSimulator } from './InteractiveSimulators';
import { GeplerLogo } from './GeplerLogo';

interface InteractiveShowcaseProps {
  lang: Language;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ lang }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>('iot-telemetry');

  const activeProject =
    showcaseProjects.find((p) => p.id === activeProjectId) || showcaseProjects[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'iot':
        return <Activity className="w-4 h-4 text-[#FF5715]" />;
      case 'ai':
        return <Eye className="w-4 h-4 text-[#FF5715]" />;
      case 'web':
        return <Globe className="w-4 h-4 text-[#FF5715]" />;
      case 'app':
        return <Smartphone className="w-4 h-4 text-[#FF5715]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#FF5715]" />;
    }
  };

  return (
    <section id="showcase" className="py-24 bg-zinc-50 border-y border-zinc-200/80 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #0F1012 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 shadow-2xs mb-4">
            <GeplerLogo variant="icon" size="sm" interactive={false} />
            <span className="tracking-wide uppercase text-[11px] font-mono">
              {content[lang].showcase.tag}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1012] tracking-tight mb-4 font-['Space_Grotesk']">
            {content[lang].showcase.heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {content[lang].showcase.subheading}
          </p>
        </motion.div>

        {/* Project Selection Tabs with Staggered Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
        >
          {showcaseProjects.map((project, idx) => {
            const isActive = project.id === activeProjectId;
            return (
              <motion.button
                key={project.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveProjectId(project.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F1012] text-white shadow-lg shadow-zinc-900/10 ring-2 ring-[#FF5715]/40'
                    : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200/80 shadow-xs'
                }`}
              >
                {getCategoryIcon(project.category)}
                <span>
                  {project.category.toUpperCase()} •{' '}
                  {project.title[lang].length > 25
                    ? `${project.title[lang].substring(0, 25)}...`
                    : project.title[lang]}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5715]" />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Main Showcase Showcase Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Project Info & Industrial Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm relative overflow-hidden">
                {/* Accent line */}
                <div className="w-12 h-1 bg-[#FF5715] rounded-full mb-6" />

                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-zinc-400 mb-2">
                  <span>{activeProject.clientIndustry[lang]}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1012] mb-3 leading-snug">
                  {activeProject.title[lang]}
                </h3>

                <p className="text-sm font-medium text-[#FF5715] mb-4">
                  {activeProject.subtitle[lang]}
                </p>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {activeProject.description[lang]}
                </p>

                {/* Key Metric Card */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 block mb-0.5">
                      {activeProject.metric.label[lang]}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {lang === 'th' ? 'ผลลัพธ์เชิงตัวเลขจริง' : 'Empirical benchmark'}
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-[#0F1012] font-mono">
                    {activeProject.metric.value}
                  </div>
                </div>

                {/* Technology Badges */}
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2 font-mono">
                    {lang === 'th' ? 'เทคโนโลยีที่เลือกใช้' : 'Technology Stack'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Jump to Configurator */}
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href="#configurator"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5715] hover:text-[#d9440c] transition-colors"
                  >
                    <span>{lang === 'th' ? 'จัดสเปกระบบแบบนี้' : 'Configure similar system'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Sandbox Simulator */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Floating interactive badge */}
                <div className="absolute -top-3.5 right-6 z-10 px-3 py-1 bg-[#FF5715] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {lang === 'th' ? 'สามารถกดโต้ตอบได้ทันที' : 'Live Interactive Sandbox'}
                </div>

                {/* The Simulator */}
                <InteractiveSimulator type={activeProject.interactiveType} lang={lang} />
              </div>

              {/* Sandbox Usage Hint */}
              <div className="mt-3 text-center">
                <span className="text-xs text-zinc-500 italic">
                  * {content[lang].showcase.instruction}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
