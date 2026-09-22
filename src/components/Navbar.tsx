import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';
import { GeplerLogo } from './GeplerLogo';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#disciplines', label: content[lang].nav.services },
    { href: '#showcase', label: content[lang].nav.showcase },
    { href: '#configurator', label: content[lang].nav.configurator },
    { href: '#philosophy', label: content[lang].nav.philosophy },
    { href: '#contact', label: content[lang].nav.contact },
  ];

  return (
    <header id="main-navbar" className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-white/95 backdrop-blur-md border-b border-zinc-200/90 shadow-xs py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand on White Background */}
          <a href="#" className="flex items-center group">
            <GeplerLogo variant="full" size="sm" animated={true} interactive={false} theme="light" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors relative py-1 text-zinc-600 hover:text-zinc-950 after:w-0 after:h-0.5 after:bg-[#FF5715] after:absolute after:bottom-0 after:left-0 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg border text-xs font-bold transition-colors bg-zinc-100 border-zinc-200/80">
              <button
                onClick={() => onLanguageChange('th')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'th'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                TH
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Desktop CTA Button */}
            <a
              href="#configurator"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-[#FF5715]/20 bg-[#FF5715] hover:bg-[#e04b0f] text-white cursor-pointer"
            >
              <span>{content[lang].nav.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors cursor-pointer text-zinc-700 hover:bg-zinc-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu on Clean Light Canvas */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
                <a
                  href="#configurator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#FF5715] text-white text-center text-sm font-bold shadow-md shadow-[#FF5715]/20"
                >
                  {content[lang].nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
