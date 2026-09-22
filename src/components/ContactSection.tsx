import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface ContactSectionProps {
  lang: Language;
  initialScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialScope = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    scope: initialScope,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update scope if passed from configurator
  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        scope: initialScope,
      }));
    }
  }, [initialScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate direct dispatch to Gepler Engineering Leads
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Values with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FF5715]" />
                <span className="tracking-wide uppercase text-[11px] font-mono">
                  {content[lang].contact.tag}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1012] tracking-tight mb-4 font-['Space_Grotesk']">
                {content[lang].contact.heading}
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                {content[lang].contact.subheading}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center gap-4 shadow-2xs hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-[#FF5715] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Engineering Inquiries</span>
                  <a
                    href="mailto:contact@geplerindustrial.com"
                    className="text-sm font-bold text-[#0F1012] hover:text-[#FF5715] transition-colors font-mono"
                  >
                    contact@geplerindustrial.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center gap-4 shadow-2xs hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-[#FF5715] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Direct Hotline</span>
                  <a
                    href="tel:+6620000000"
                    className="text-sm font-bold text-[#0F1012] hover:text-[#FF5715] transition-colors font-mono"
                  >
                    +66 2 000 0000 / +66 89 000 0000
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center gap-4 shadow-2xs hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-[#FF5715] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 block">Location</span>
                  <span className="text-sm font-medium text-[#0F1012]">
                    {content[lang].contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#F7B218] shrink-0 mt-0.5" />
              <div className="text-xs text-zinc-600 leading-relaxed">
                <span className="font-bold text-[#0F1012] block mb-0.5">
                  {lang === 'th' ? 'มาตรฐานการตอบกลับด่วน 24 ชั่วโมง' : '24-Hour Architecture Review'}
                </span>
                {lang === 'th'
                  ? 'ทีม Lead Engineer จะเป็นผู้ประเมินโครงสร้างและขอบเขตงานโดยตรง ไม่ผ่านพนักงานขายทั่วไป'
                  : 'Every request is triaged directly by senior systems architects with technical feasibility breakdowns.'}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Form with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F1012] font-['Space_Grotesk']">
                    {lang === 'th' ? 'ส่งคำขอเรียบร้อยแล้ว' : 'Specification Dispatched'}
                  </h3>
                  <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
                    {content[lang].contact.form.success}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        scope: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-800 transition-colors"
                  >
                    {lang === 'th' ? 'ส่งคำขออื่นเพิ่มเติม' : 'Submit Another Request'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        {content[lang].contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:border-[#FF5715] focus:ring-1 focus:ring-[#FF5715] outline-none transition-all"
                        placeholder={lang === 'th' ? 'เช่น วิศวกร สมชาย' : 'e.g. Alex Henderson'}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        {content[lang].contact.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:border-[#FF5715] focus:ring-1 focus:ring-[#FF5715] outline-none transition-all"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        {content[lang].contact.form.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:border-[#FF5715] focus:ring-1 focus:ring-[#FF5715] outline-none transition-all"
                        placeholder="081-xxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        {content[lang].contact.form.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:border-[#FF5715] focus:ring-1 focus:ring-[#FF5715] outline-none transition-all"
                        placeholder={lang === 'th' ? 'ชื่อบริษัทหรือโรงงาน' : 'Company or plant name'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center justify-between">
                      <span>{content[lang].contact.form.scope} *</span>
                      {initialScope && (
                        <span className="text-[10px] text-[#FF5715] font-mono font-bold flex items-center gap-1">
                          <FileCheck className="w-3 h-3" />
                          {lang === 'th' ? 'สเปกจากระบบจำลองถูกใส่ให้อัตโนมัติ' : 'Configurator Spec Attached'}
                        </span>
                      )}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-zinc-900 text-sm focus:border-[#FF5715] focus:ring-1 focus:ring-[#FF5715] outline-none transition-all"
                      placeholder={content[lang].contact.form.scopePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#FF5715] hover:bg-[#e04b0f] text-white text-sm font-bold shadow-lg shadow-[#FF5715]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                    <span>
                      {isSubmitting
                        ? content[lang].contact.form.sending
                        : content[lang].contact.form.submit}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
