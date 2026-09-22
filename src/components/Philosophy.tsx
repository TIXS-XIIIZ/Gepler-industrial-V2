import React from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Cpu,
  ShieldAlert,
  Zap,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Code2,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { GeplerLogo } from './GeplerLogo';

interface PhilosophyProps {
  lang: Language;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const comparison = [
    {
      featureTh: 'สถาปัตยกรรมระบบ',
      featureEn: 'System Architecture',
      genericTh: 'ใช้ CMS สำเร็จรูป หรือดัดแปลงธีมเทมเพลตทั่วไป',
      genericEn: 'Generic templates, slow bloated CMS wrappers',
      geplerTh: 'เขียนโครงสร้างใหม่ 100% เหมาะกับโจทย์โดยเฉพาะ',
      geplerEn: '100% Bespoke, lean, strictly typed & optimized',
    },
    {
      featureTh: 'การทำงานร่วมกับฮาร์ดแวร์ / IoT',
      featureEn: 'Hardware & IoT Convergence',
      genericTh: 'ทำได้แค่หน้าเว็บ ไม่เข้าใจวงจร บัส หรือเซ็นเซอร์',
      genericEn: 'Web-only scope, zero low-level firmware skill',
      geplerTh: 'ครอบคลุมครบวงจรตั้งแต่บอร์ด ไมโครคอนโทรลเลอร์ จนถึงคลาวด์',
      geplerEn: 'Full spectrum: firmware, bus protocols, cloud ingest',
    },
    {
      featureTh: 'ความเร็วและการตอบสนอง',
      featureEn: 'Latency & Performance',
      genericTh: 'ช้าและสะดุดเมื่อมีข้อมูลปริมาณมาก',
      genericEn: 'High latency, choked with unneeded plugins',
      geplerTh: 'ความเร็วระดับมิลลิวินาที (<25ms) รองรับงานวิกฤต',
      geplerEn: 'Sub-25ms response, engineered for 24/7 mission critical',
    },
    {
      featureTh: 'ปัญญาประดิษฐ์ (AI)',
      featureEn: 'Applied AI Deployment',
      genericTh: 'เชื่อมต่อ API สำเร็จรูปอย่างผิวเผิน',
      genericEn: 'Basic wrapper over external generic models',
      geplerTh: 'ประมวลผล Edge Computer Vision และเทรนตามข้อมูลจริง',
      geplerEn: 'Edge vision inference & tailored predictive analytics',
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5715]" />
            <span className="tracking-wide uppercase text-[11px] font-mono">
              {content[lang].philosophy.tag}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1012] tracking-tight mb-4 font-['Space_Grotesk']">
            {content[lang].philosophy.heading}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {content[lang].philosophy.subheading}
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {content[lang].philosophy.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-2xs hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-xs font-mono font-bold text-[#FF5715] mb-5 shadow-2xs">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0F1012] mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architectural Comparison Matrix (Clean, Luxury White Table) with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden"
        >
          <div className="p-6 sm:p-8 bg-zinc-50 border-b border-zinc-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-mono uppercase font-bold text-[#FF5715] block mb-1">
                {lang === 'th' ? 'ตารางเปรียบเทียบมาตรฐาน' : 'Benchmarking Matrix'}
              </span>
              <h3 className="text-xl font-bold text-[#0F1012]">
                {lang === 'th' ? 'ความแตกต่างที่จับต้องได้' : 'Tangible Difference in Execution'}
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <XCircle className="w-3.5 h-3.5 text-zinc-400" />
                {lang === 'th' ? 'บริษัททั่วไป' : 'Generic Agency'}
              </span>
              <span className="flex items-center gap-2 text-[#0F1012] bg-[#FF5715]/10 px-3.5 py-1.5 rounded-full border border-[#FF5715]/30">
                <GeplerLogo variant="icon" size="sm" interactive={false} className="!inline-flex" />
                <span>Gepler Industrial</span>
              </span>
            </div>
          </div>

          <div className="divide-y divide-zinc-200/80">
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-zinc-50/50 transition-colors"
              >
                <div className="md:col-span-3">
                  <span className="font-bold text-sm text-[#0F1012]">
                    {lang === 'th' ? row.featureTh : row.featureEn}
                  </span>
                </div>

                <div className="md:col-span-4 text-xs sm:text-sm text-zinc-400 flex items-start gap-2">
                  <span className="text-zinc-400 font-mono">✕</span>
                  <span>{lang === 'th' ? row.genericTh : row.genericEn}</span>
                </div>

                <div className="md:col-span-5 text-xs sm:text-sm font-semibold text-[#0F1012] flex items-start gap-2 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-200/50">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5715] shrink-0 mt-0.5" />
                  <span>{lang === 'th' ? row.geplerTh : row.geplerEn}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
