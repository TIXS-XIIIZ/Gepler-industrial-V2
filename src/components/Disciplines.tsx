import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Smartphone,
  Cpu,
  Brain,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { Language, DisciplineKey } from '../types';
import { serviceItems, content } from '../data/content';
import { GeplerLogo } from './GeplerLogo';

interface DisciplinesProps {
  lang: Language;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<DisciplineKey>('web');

  const activeService = serviceItems.find((s) => s.id === activeTab) || serviceItems[0];

  const getIcon = (id: DisciplineKey) => {
    switch (id) {
      case 'web':
        return <Globe className="w-5 h-5" />;
      case 'app':
        return <Smartphone className="w-5 h-5" />;
      case 'iot':
        return <Cpu className="w-5 h-5" />;
      case 'ai':
        return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section id="disciplines" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 mb-4 shadow-2xs">
            <GeplerLogo variant="icon" size="sm" interactive={false} />
            <span className="tracking-wide uppercase text-[11px] font-mono">
              {content[lang].disciplines.tag}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1012] tracking-tight mb-4 font-['Space_Grotesk']">
            {content[lang].disciplines.heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {content[lang].disciplines.subheading}
          </p>
        </motion.div>

        {/* 4 Interactive Service Cards with Staggered Visual Layout & Smooth Scroll Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceItems.map((service, index) => {
            const isSelected = activeTab === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: 'easeOut' },
                }}
                onClick={() => setActiveTab(service.id)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-950 text-white border-zinc-900 shadow-xl shadow-zinc-900/10'
                    : 'bg-white hover:bg-zinc-50/70 text-zinc-900 border-zinc-200/90 shadow-xs hover:border-zinc-300'
                }`}
              >
                {/* Subtle top indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-colors ${
                    isSelected ? 'bg-[#FF5715]' : 'bg-transparent group-hover:bg-[#FF5715]/40'
                  }`}
                />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                        isSelected
                          ? 'bg-zinc-800 text-zinc-300'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      {service.number}
                    </span>

                    <div
                      className={`p-3 rounded-2xl transition-colors ${
                        isSelected
                          ? 'bg-[#FF5715] text-white'
                          : 'bg-zinc-100 text-zinc-700 group-hover:text-[#FF5715]'
                      }`}
                    >
                      {getIcon(service.id)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold mb-2 tracking-tight">
                    {service.title[lang]}
                  </h3>

                  <p
                    className={`text-xs font-medium mb-4 ${
                      isSelected ? 'text-[#FF7A45]' : 'text-[#FF5715]'
                    }`}
                  >
                    {service.subtitle[lang]}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 ${
                      isSelected ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {service.description[lang]}
                  </p>
                </div>

                {/* Bottom Metric & Tech Badge */}
                <div className={`pt-4 border-t ${isSelected ? 'border-zinc-800' : 'border-zinc-100'}`}>
                  <div className="flex items-center justify-between text-xs">
                    <span className={isSelected ? 'text-zinc-400' : 'text-zinc-500'}>
                      {service.metrics.label[lang]}
                    </span>
                    <span
                      className={`font-mono font-bold ${
                        isSelected ? 'text-[#F7B218]' : 'text-[#0F1012]'
                      }`}
                    >
                      {service.metrics.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Discipline Deep-Dive Box */}
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/90 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5715]">
                {activeService.number} • {activeService.id.toUpperCase()} CAPABILITIES
              </span>
            </div>

            <h4 className="text-2xl font-bold text-[#0F1012]">
              {activeService.title[lang]}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {activeService.capabilities[lang].map((cap, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5715] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="#showcase"
              className="px-5 py-3 rounded-xl bg-[#0F1012] hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <span>{lang === 'th' ? 'ดูผลงานและทดสอบจำลอง' : 'Inspect Live Simulation'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF5715]" />
            </a>

            <a
              href="#configurator"
              className="px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>{lang === 'th' ? 'จัดสเปกระบบนี้' : 'Configure This Solution'}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
