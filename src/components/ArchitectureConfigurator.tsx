import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Cpu,
  Eye,
  Globe,
  LayoutDashboard,
  Radio,
  Sliders,
  Smartphone,
  Zap,
  ArrowRight,
  Brain,
  CheckCircle,
  FileCode
} from 'lucide-react';
import { Language, ConfiguratorModule } from '../types';
import { configuratorModules, content } from '../data/content';
import { GeplerLogo } from './GeplerLogo';

interface ArchitectureConfiguratorProps {
  lang: Language;
  onSelectSpecs?: (specsText: string) => void;
}

export const ArchitectureConfigurator: React.FC<ArchitectureConfiguratorProps> = ({
  lang,
  onSelectSpecs,
}) => {
  // Pre-select 1 web and 1 iot module for immediate visual richness
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'web-dashboard',
    'iot-gateway',
    'ai-vision',
  ]);

  const toggleModule = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedModules = configuratorModules.filter((m) =>
    selectedIds.includes(m.id)
  );

  // Compute tier and recommended stack
  const hasWeb = selectedModules.some((m) => m.category === 'web');
  const hasApp = selectedModules.some((m) => m.category === 'app');
  const hasIot = selectedModules.some((m) => m.category === 'iot');
  const hasAi = selectedModules.some((m) => m.category === 'ai');

  const distinctCategories = [hasWeb, hasApp, hasIot, hasAi].filter(Boolean).length;

  let tierName = {
    th: 'โซลูชันเฉพาะด้านแบบตรงจุด (Single-Domain Solution)',
    en: 'Single-Domain Custom Solution',
  };
  if (distinctCategories === 2) {
    tierName = {
      th: 'การเชื่อมต่อ 2 ระบบคู่ขนาน (Dual-Domain Integration)',
      en: 'Dual-Domain Hybrid Integration',
    };
  } else if (distinctCategories === 3) {
    tierName = {
      th: 'การเชื่อมต่อ 3 ระบบผสมผสาน (Triple-Domain Integration)',
      en: 'Triple-Domain Multi-System Integration',
    };
  } else if (distinctCategories === 4) {
    tierName = {
      th: 'โซลูชันครอบคลุม 4 ด้านตามสั่ง (4-Pillar Comprehensive Suite)',
      en: '4-Pillar Comprehensive Suite',
    };
  }

  // Recommended stack tags
  const recommendedStack: string[] = [];
  if (hasWeb) recommendedStack.push('React / Next.js', 'High-Speed WebSockets');
  if (hasApp) recommendedStack.push('Flutter Cross-Platform', 'BLE Native Layer');
  if (hasIot) recommendedStack.push('MQTT Telemetry Bus', 'STM32 / ESP32 Firmware');
  if (hasAi) recommendedStack.push('Edge TensorRT Vision', 'Predictive Pipeline');

  const handleApplyToContact = () => {
    const names = selectedModules.map((m) => m.name[lang]).join(' + ');
    const summary = `Gepler Blueprint Architecture: [${tierName[lang]}] ประกอบด้วย: ${names}`;
    if (onSelectSpecs) {
      onSelectSpecs(summary);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-[#FF5715]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#FF5715]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#FF5715]" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-[#FF5715]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#FF5715]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#FF5715]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-[#FF5715]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#FF5715]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#FF5715]" />;
    }
  };

  return (
    <section id="configurator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 mb-4 shadow-2xs">
            <Sliders className="w-3.5 h-3.5 text-[#FF5715]" />
            <span className="tracking-wide uppercase text-[11px] font-mono">
              {content[lang].configurator.tag}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1012] tracking-tight mb-4 font-['Space_Grotesk']">
            {content[lang].configurator.heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {content[lang].configurator.subheading}
          </p>
        </motion.div>

        {/* 2-Column Layout: Module Grid (Left) + Interactive Blueprint Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Module Selection Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono">
                {content[lang].configurator.selectTitle}
              </h3>
              <span className="text-xs text-zinc-500">
                {lang === 'th' ? `เลือกแล้ว ${selectedIds.length} ส่วนประกอบ` : `${selectedIds.length} modules selected`}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5715] mt-1 shrink-0" />
              <span>
                {lang === 'th'
                  ? 'คุณสามารถเลือกพัฒนาเฉพาะระบบเดี่ยวที่ต้องการได้ทันที (เช่น เว็บพอร์ทัลอย่างเดียว หรือระบบ IoT อย่างเดียว) หรือเลือกผสมผสานหลายระบบตามการเติบโตของธุรกิจ'
                  : 'You can develop standalone systems independently (such as Web only or IoT only), or combine multiple modules as your operations scale.'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {configuratorModules.map((module, i) => {
                const isSelected = selectedIds.includes(module.id);
                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleModule(module.id)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none relative ${
                      isSelected
                        ? 'bg-zinc-50 border-[#FF5715] shadow-xs ring-1 ring-[#FF5715]/20'
                        : 'bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        {getModuleIcon(module.icon)}
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#FF5715] text-white'
                            : 'border border-zinc-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-mono uppercase font-bold text-zinc-400">
                          {module.category}
                        </span>
                        <span className="text-zinc-300 text-xs">•</span>
                        <span className="text-[10px] text-zinc-500 font-medium">
                          {module.complexity}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0F1012] mb-1">
                        {module.name[lang]}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-normal">
                        {module.description[lang]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Live Blueprint Blueprint Architecture Box */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky top-28"
          >
            <div className="bg-[#0F1012] text-zinc-100 rounded-3xl p-6 sm:p-7 border border-zinc-800 shadow-xl relative overflow-hidden">
              {/* Corner Watermark */}
              <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-5">
                <FileCode className="w-32 h-32 text-white" />
              </div>

              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <GeplerLogo variant="icon" size="sm" interactive={false} />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                    {content[lang].configurator.summaryTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#F7B218] px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  GEPLER-ARCH-V4
                </span>
              </div>

              {/* Dynamic Architecture Tier Display */}
              <div className="mb-6">
                <span className="text-[11px] text-zinc-400 font-mono block mb-1">
                  {content[lang].configurator.estimatedScope}
                </span>
                <div className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] leading-snug">
                  {tierName[lang]}
                </div>
              </div>

              {/* Selected Modules Badges */}
              <div className="mb-6">
                <span className="text-xs text-zinc-400 font-mono block mb-2">
                  {lang === 'th' ? 'องค์ประกอบในสถาปัตยกรรม:' : 'Active System Nodes:'}
                </span>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {selectedModules.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5715]" />
                        <span className="font-medium text-zinc-200">{m.name[lang]}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {m.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Stack */}
              <div className="mb-6 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <span className="text-[11px] text-zinc-400 font-mono block mb-2">
                  {content[lang].configurator.recommendedStack}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Action Button */}
              <button
                onClick={handleApplyToContact}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF5715] hover:bg-[#e04b0f] text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#FF5715]/20"
              >
                <span>{content[lang].configurator.btnSendSpec}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-zinc-500">
                  {lang === 'th'
                    ? '✓ ได้รับข้อเสนอแนวทางสถาปัตยกรรมภายใน 24 ชม.'
                    : '✓ Direct architectural evaluation within 24 hours'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
