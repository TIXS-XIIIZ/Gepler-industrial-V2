import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Smartphone,
  Cpu,
  Eye,
  Radio,
  Sparkles,
  RotateCw,
  Compass,
  Activity,
  Zap,
  CheckCircle2,
  Terminal,
  ShieldAlert
} from 'lucide-react';
import { Language } from '../types';
import { GeplerLogo } from './GeplerLogo';

interface BrandHeroShowcaseProps {
  lang: Language;
}

type LogoMode = 'full' | 'icon';
type ActiveNode = 'web' | 'app' | 'iot' | 'ai' | null;

export const BrandHeroShowcase: React.FC<BrandHeroShowcaseProps> = ({ lang }) => {
  const [logoMode, setLogoMode] = useState<LogoMode>('full');
  const [activeNode, setActiveNode] = useState<ActiveNode>('web');
  const [pulseCount, setPulseCount] = useState<number>(0);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState<boolean>(false);
  const [diagnosticStep, setDiagnosticStep] = useState<string>('READY');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // 4 Core Brand Disciplines with Industrial Telemetry data
  const disciplineNodes = [
    {
      id: 'web' as const,
      name: { th: 'Web Systems', en: 'Web Systems' },
      shortDesc: { th: 'สถาปัตยกรรมเว็บคลาวด์ความเร็วสูง', en: 'High-Velocity Cloud Architecture' },
      icon: Globe,
      color: '#FF5715',
      metric: { label: 'Response', val: '< 18ms' },
      badge: 'ENTERPRISE CLOUD',
      details: {
        th: 'Microservices, SSR ประสิทธิภาพสูง, เชื่อมต่อ API แบบเรียลไทม์ และระบบบริหารจัดการระดับองค์กร',
        en: 'Microservices, sub-second SSR, real-time event streaming and mission-critical cloud backends',
      },
    },
    {
      id: 'app' as const,
      name: { th: 'Mobile Apps', en: 'Mobile Apps' },
      shortDesc: { th: 'แอปมือถือ iOS & Android ระดับอุตสาหกรรม', en: 'Industrial-Grade iOS & Android' },
      icon: Smartphone,
      color: '#F7B218',
      metric: { label: 'Reliability', val: '99.98%' },
      badge: 'OFFLINE-FIRST',
      details: {
        th: 'ทำงานแบบ Offline-first ซิงก์ข้อมูลทันทีเมื่อมีเน็ต ควบคุมฮาร์ดแวร์ บลูทูธ และเซ็นเซอร์ได้แม่นยำ',
        en: 'Zero-downtime offline storage, automatic conflict resolution and direct Bluetooth/BLE telemetry',
      },
    },
    {
      id: 'iot' as const,
      name: { th: 'Industrial IoT', en: 'Industrial IoT' },
      shortDesc: { th: 'ระบบเซ็นเซอร์ เกตเวย์ และฮาร์ดแวร์เฉพาะทาง', en: 'Telemetry Gateways & Embedded Tech' },
      icon: Cpu,
      color: '#FF5715',
      metric: { label: 'Sampling', val: '1000 Hz' },
      badge: 'HARDWARE LINK',
      details: {
        th: 'เชื่อมต่อ Modbus, MQTT, PLC และคอนโทรลเลอร์โรงงาน ส่งข้อมูลเข้าคลาวด์แบบปลอดภัยสูงสุด',
        en: 'Modbus, CAN bus, MQTT gateways, and custom firmware for rugged industrial manufacturing',
      },
    },
    {
      id: 'ai' as const,
      name: { th: 'Applied AI', en: 'Applied AI' },
      shortDesc: { th: 'Computer Vision และโมเดลพยากรณ์อัจฉริยะ', en: 'Edge Vision & Predictive Intelligence' },
      icon: Eye,
      color: '#F7B218',
      metric: { label: 'Accuracy', val: '99.4%' },
      badge: 'EDGE INFERENCE',
      details: {
        th: 'ตรวจสอบคุณภาพด้วยกล้องความเร็วสูง ตรวจจับความผิดปกติ และเทรนโมเดลเฉพาะตามโจทย์ธุรกิจคุณ',
        en: 'Real-time defect inspection via edge camera inference and tailored anomaly detection algorithms',
      },
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleTriggerRadar = () => {
    setPulseCount((prev) => prev + 1);
  };

  const handleRunDiagnostic = () => {
    if (isDiagnosticRunning) return;
    setIsDiagnosticRunning(true);
    setDiagnosticStep('SCANNING BUS...');
    setTimeout(() => setDiagnosticStep('CALIBRATING NODES...'), 500);
    setTimeout(() => setDiagnosticStep('VERIFYING ARCHITECTURE...'), 1000);
    setTimeout(() => {
      setDiagnosticStep('ALL SYSTEMS OPTIMAL');
      setIsDiagnosticRunning(false);
    }, 1600);
  };

  const currentDiscipline = disciplineNodes.find((n) => n.id === activeNode) || disciplineNodes[0];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 select-none">
      {/* Precision Frame Container */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
        className="relative bg-zinc-950 text-white rounded-3xl p-6 sm:p-9 border border-zinc-800 shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? '0 25px 60px -15px rgba(255, 87, 21, 0.15), 0 0 0 1px rgba(255, 87, 21, 0.3)'
            : '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Ambient Top Light Beam (Brand Colors) */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-64 bg-gradient-to-b from-[#FF5715]/20 via-[#F7B218]/10 to-transparent blur-3xl pointer-events-none" />

        {/* Industrial Engineering Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Top HUD Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-zinc-800/80 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5715] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5715]" />
            </span>
            <span className="font-bold tracking-wider text-zinc-200">
              GEPLER BRAND MATRIX
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-[#F7B218] font-semibold text-[11px]">
              {isDiagnosticRunning ? diagnosticStep : 'CORE ENGINE: ACTIVE'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="hidden sm:inline text-zinc-500">CALIBRATION:</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold">
              100% BESPOKE
            </span>
            <span className="px-2 py-0.5 rounded bg-[#FF5715]/10 border border-[#FF5715]/30 text-[#FF5715] font-bold">
              {logoMode === 'full' ? 'FULL WORDMARK' : 'ICON MARK'}
            </span>
          </div>
        </div>

        {/* Center Stage: The Signature Floating Brand Emblem with Interactive 3D Orbit */}
        <div className="relative py-8 sm:py-12 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[300px]">
          {/* Animated Concentric Radar Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer Slow Orbit Ring */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-zinc-800/60 animate-radar-spin" />
            
            {/* Middle Dashed Ring */}
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-dashed border-[#FF5715]/20 animate-radar-spin"
              style={{ animationDirection: 'reverse', animationDuration: '22s' }}
            />

            {/* Inner Glowing Precision Ring */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#F7B218]/25 animate-pulse-glow" />

            {/* Expanding Radar Ping Waves triggered on pulse button or click */}
            <AnimatePresence>
              {pulseCount > 0 && (
                <motion.div
                  key={pulseCount}
                  initial={{ scale: 0.4, opacity: 0.9 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                  className="absolute w-32 h-32 rounded-full border-2 border-[#FF5715] pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Holographic Pedestal Floor Glow */}
          <div
            className="absolute bottom-4 w-48 sm:w-64 h-8 rounded-full bg-gradient-to-r from-transparent via-[#FF5715]/40 to-transparent blur-md transition-all duration-300"
            style={{
              transform: `scale(${isHovered ? 1.25 : 1})`,
              opacity: isHovered ? 0.9 : 0.45,
            }}
          />

          {/* Central Logo Container with 3D Tilt and Specular Light Blade Sweep */}
          <motion.div
            onClick={handleTriggerRadar}
            animate={{
              rotateX: isHovered ? -mousePos.y * 20 : 0,
              rotateY: isHovered ? mousePos.x * 20 : 0,
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -4 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative cursor-pointer p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-700/80 shadow-2xl backdrop-blur-md group overflow-hidden"
            style={{ perspective: '1000px' }}
          >
            {/* Animated Light Sweep Blade across the emblem */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] -translate-x-[200%] group-hover:translate-x-[300%] transition-transform duration-1000 pointer-events-none" />

            {/* Glowing Logo Backdrop */}
            <div className="absolute inset-0 bg-[#FF5715]/15 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* The Actual Logo with smooth switch */}
            <div className="relative z-10 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={logoMode}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                >
                  <GeplerLogo
                    variant={logoMode}
                    size={logoMode === 'full' ? 'lg' : 'hero'}
                    animated={true}
                    interactive={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Interaction Hint */}
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <Sparkles className="w-3 h-3 text-[#FF5715] animate-pulse" />
                <span>
                  {lang === 'th' ? 'คลิกที่โลโก้เพื่อยิงคลื่นเรดาร์' : 'Click logo to emit radar ping'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Discipline Satellite Nodes (4 Dots connecting to center) */}
          <div className="w-full mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 relative z-10">
            {disciplineNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => {
                    setActiveNode(node.id);
                    handleTriggerRadar();
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-zinc-900 border-[#FF5715] shadow-lg shadow-[#FF5715]/20 ring-1 ring-[#FF5715]/50 -translate-y-1'
                      : 'bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5715] to-[#F7B218]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-[#FF5715] text-white'
                          : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span
                      className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#FF5715]/20 text-[#FF5715]'
                          : 'bg-zinc-800 text-zinc-500'
                      }`}
                    >
                      {node.badge}
                    </span>
                  </div>

                  <div className="font-bold text-xs text-zinc-100 font-mono mb-0.5">
                    {node.name[lang]}
                  </div>

                  <div className="text-[10px] text-zinc-400 line-clamp-1">
                    {node.shortDesc[lang]}
                  </div>

                  <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-500">{node.metric.label}</span>
                    <span className={`font-bold ${isSelected ? 'text-[#F7B218]' : 'text-zinc-400'}`}>
                      {node.metric.val}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Discipline Live Telemetry Bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDiscipline.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-xs mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF5715] shrink-0 mt-1 sm:mt-0 animate-ping" />
              <div className="text-zinc-300">
                <span className="font-bold text-white font-mono uppercase mr-2">
                  [{currentDiscipline.name[lang]}]:
                </span>
                <span>{currentDiscipline.details[lang]}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 text-zinc-400 font-mono text-[11px]">
              <span className="text-zinc-500">CAPACITY:</span>
              <span className="text-[#FF5715] font-bold">100% UNCONSTRAINED</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Interactive Engineering Controls */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            {/* Toggle Full / Icon Logo */}
            <button
              onClick={() => setLogoMode(logoMode === 'full' ? 'icon' : 'full')}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#F7B218]" />
              <span>
                {logoMode === 'full'
                  ? (lang === 'th' ? 'สลับเป็น Icon Mark' : 'Switch to Icon Mark')
                  : (lang === 'th' ? 'สลับเป็น Full Logo' : 'Switch to Full Logo')}
              </span>
            </button>

            {/* Trigger Radar Pulse Button */}
            <button
              onClick={handleTriggerRadar}
              className="px-3.5 py-1.5 rounded-xl bg-[#FF5715]/10 hover:bg-[#FF5715]/20 border border-[#FF5715]/40 text-[#FF5715] text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>{lang === 'th' ? 'ยิงคลื่นเรดาร์' : 'Pulse Radar'}</span>
            </button>

            {/* Run Diagnostic Button */}
            <button
              onClick={handleRunDiagnostic}
              disabled={isDiagnosticRunning}
              className="hidden sm:inline-flex px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 text-xs font-mono font-semibold items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <Activity className={`w-3.5 h-3.5 text-[#F7B218] ${isDiagnosticRunning ? 'animate-spin' : ''}`} />
              <span>
                {isDiagnosticRunning
                  ? (lang === 'th' ? 'กำลังตรวจสอบ...' : 'Diagnostics...')
                  : (lang === 'th' ? 'ทดสอบสัญญาณ' : 'Run Diagnostics')}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>GEO: 13.7563° N, 100.5018° E</span>
          </div>
        </div>
      </div>
    </div>
  );
};
