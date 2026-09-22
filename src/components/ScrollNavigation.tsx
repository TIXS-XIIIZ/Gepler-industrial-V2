import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUp,
  Layers,
  Sparkles,
  Sliders,
  ShieldCheck,
  Mail,
  Home
} from 'lucide-react';
import { Language } from '../types';

interface ScrollNavigationProps {
  lang: Language;
}

export const ScrollNavigation: React.FC<ScrollNavigationProps> = ({ lang }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', icon: Home, labelTh: 'หน้าแรก', labelEn: 'Top' },
    { id: 'disciplines', icon: Layers, labelTh: '4 เสาหลัก', labelEn: 'Disciplines' },
    { id: 'showcase', icon: Sparkles, labelTh: 'ผลงานจำลอง', labelEn: 'Showcase' },
    { id: 'configurator', icon: Sliders, labelTh: 'จัดสเปกระบบ', labelEn: 'Configurator' },
    { id: 'philosophy', icon: ShieldCheck, labelTh: 'มาตรฐาน', labelEn: 'Standards' },
    { id: 'contact', icon: Mail, labelTh: 'ติดต่อเรา', labelEn: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      setIsVisible(window.scrollY > 350);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-lg shadow-zinc-900/10"
        >
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`relative px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0F1012] text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FF5715]' : 'text-zinc-500'}`} />
                <span className="font-mono text-[11px] whitespace-nowrap">
                  {lang === 'th' ? sec.labelTh : sec.labelEn}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="activePillGlow"
                    className="absolute inset-0 rounded-full border border-[#FF5715]/40 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}

          {/* Quick Scroll To Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-7 h-7 ml-0.5 rounded-full bg-zinc-100 hover:bg-[#FF5715] text-zinc-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title={lang === 'th' ? 'กลับขึ้นด้านบน' : 'Back to top'}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
