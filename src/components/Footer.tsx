import React from 'react';
import { Language } from '../types';
import { content } from '../data/content';
import { GeplerLogo } from './GeplerLogo';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-white border-t border-zinc-200 py-16 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <GeplerLogo variant="full" size="sm" animated={false} interactive={false} />
            <p className="text-zinc-500 max-w-sm text-xs leading-relaxed">
              {lang === 'th'
                ? 'Gepler Industrial รับพัฒนาระบบเทคโนโลยีเฉพาะทาง: Web, Mobile App, Industrial IoT และ Applied AI สำหรับธุรกิจที่ต้องการความแม่นยำสูง'
                : 'Gepler Industrial engineers bespoke Web architectures, Mobile Applications, Industrial IoT telemetry, and Applied AI.'}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono text-zinc-500">
                {content[lang].nav.systemStatus}
              </span>
            </div>
          </div>

          {/* Quick Nav Disciplines */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-zinc-900 block mb-3">
              {lang === 'th' ? 'ความเชี่ยวชาญหลัก' : 'Core Disciplines'}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#disciplines" className="hover:text-[#FF5715] transition-colors">
                  Web Applications & Portals
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-[#FF5715] transition-colors">
                  Mobile Apps (iOS & Android)
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-[#FF5715] transition-colors">
                  Industrial IoT & Gateways
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-[#FF5715] transition-colors">
                  Applied Industrial AI & Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-zinc-900 block mb-3">
              {lang === 'th' ? 'เครื่องมือและบริการ' : 'Interactive Tools'}
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="#showcase"
                  className="hover:text-[#FF5715] transition-colors inline-flex items-center gap-1"
                >
                  <span>{content[lang].nav.showcase}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF5715]" />
                </a>
              </li>
              <li>
                <a
                  href="#configurator"
                  className="hover:text-[#FF5715] transition-colors inline-flex items-center gap-1"
                >
                  <span>{content[lang].nav.configurator}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF5715]" />
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#FF5715] transition-colors">
                  {content[lang].nav.philosophy}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF5715] transition-colors">
                  {content[lang].nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>© {new Date().getFullYear()} Gepler Industrial Co., Ltd. {content[lang].footer.rights}</div>
          <div className="font-mono text-zinc-400">
            {content[lang].footer.builtWith} • Bangkok, Thailand
          </div>
        </div>
      </div>
    </footer>
  );
};
