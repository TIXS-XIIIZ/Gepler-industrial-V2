import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Eye,
  Gauge,
  Play,
  RefreshCw,
  Sliders,
  Smartphone,
  Thermometer,
  Zap,
  Volume2,
  Scan,
  ShieldCheck,
  Radio,
  Server
} from 'lucide-react';
import { Language } from '../types';

interface SimulatorProps {
  type: 'telemetry' | 'vision' | 'performance' | 'app-simulator';
  lang: Language;
}

export const InteractiveSimulator: React.FC<SimulatorProps> = ({ type, lang }) => {
  if (type === 'telemetry') {
    return <TelemetrySimulator lang={lang} />;
  }
  if (type === 'vision') {
    return <VisionSimulator lang={lang} />;
  }
  if (type === 'performance') {
    return <PerformanceSimulator lang={lang} />;
  }
  return <AppSimulator lang={lang} />;
};

/* -------------------------------------------------------------
 * 1. INDUSTRIAL IoT TELEMETRY SIMULATOR
 * ------------------------------------------------------------- */
const TelemetrySimulator: React.FC<{ lang: Language }> = ({ lang }) => {
  const [rpm, setRpm] = useState(2400);
  const [injectAnomaly, setInjectAnomaly] = useState(false);
  const [coolantOn, setCoolantOn] = useState(true);
  const [vibrationHistory, setVibrationHistory] = useState<number[]>([
    1.2, 1.4, 1.3, 1.5, 1.2, 1.6, 1.3, 1.4, 1.5, 1.3, 1.4, 1.2, 1.5,
  ]);
  const [temp, setTemp] = useState(54);

  // Dynamic simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate dynamic vibration
      const baseVib = (rpm / 3000) * 1.4;
      const noise = (Math.random() - 0.5) * 0.4;
      const anomalyMultiplier = injectAnomaly ? 3.8 + Math.random() * 1.5 : 1.0;
      const currentVib = Math.max(0.4, Number((baseVib * anomalyMultiplier + noise).toFixed(2)));

      setVibrationHistory((prev) => [...prev.slice(1), currentVib]);

      // Calculate dynamic temp
      setTemp((prev) => {
        const targetTemp = injectAnomaly ? 88 : coolantOn ? 48 + rpm / 200 : 72 + rpm / 150;
        const diff = targetTemp - prev;
        return Number((prev + diff * 0.15 + (Math.random() - 0.5) * 0.5).toFixed(1));
      });
    }, 600);

    return () => clearInterval(interval);
  }, [rpm, injectAnomaly, coolantOn]);

  const currentVib = vibrationHistory[vibrationHistory.length - 1] || 1.4;
  const isAlarm = currentVib > 3.5 || temp > 80;

  return (
    <div className="w-full bg-[#0F1012] text-zinc-100 rounded-2xl p-4 sm:p-6 border border-zinc-800 shadow-xl overflow-hidden font-mono">
      {/* Simulator Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-zinc-800 gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5715] animate-ping" />
          <span className="text-xs uppercase tracking-wider text-zinc-400 font-sans font-semibold">
            {lang === 'th' ? 'จำลองเซ็นเซอร์สด (Live Edge Node)' : 'Live Edge Telemetry Node'}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
            ID: G-NODE-882
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-500">Status:</span>
          {isAlarm ? (
            <span className="flex items-center gap-1 text-red-400 font-bold px-2 py-0.5 rounded bg-red-950/60 border border-red-800">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              {lang === 'th' ? 'เตือนภัย: ผิดปกติ' : 'CRITICAL ALERT'}
            </span>
          ) : (
            <span className="flex items-center gap-1 text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-800/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'th' ? 'ปกติ: สมบูรณ์' : 'OPTIMAL'}
            </span>
          )}
        </div>
      </div>

      {/* Main Gauges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800/80">
          <div className="text-[11px] text-zinc-400 font-sans mb-1 flex items-center justify-between">
            <span>{lang === 'th' ? 'การสั่นสะเทือน' : 'Vibration'}</span>
            <Activity className="w-3.5 h-3.5 text-[#FF5715]" />
          </div>
          <div className="text-2xl font-bold font-mono tracking-tight text-white flex items-baseline gap-1">
            <span className={currentVib > 3.0 ? 'text-red-400' : 'text-white'}>
              {currentVib.toFixed(2)}
            </span>
            <span className="text-xs text-zinc-500 font-sans font-normal">mm/s</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">ISO 10816 Limit: 2.80</div>
        </div>

        <div className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800/80">
          <div className="text-[11px] text-zinc-400 font-sans mb-1 flex items-center justify-between">
            <span>{lang === 'th' ? 'อุณหภูมิแกน' : 'Core Temp'}</span>
            <Thermometer className="w-3.5 h-3.5 text-[#F7B218]" />
          </div>
          <div className="text-2xl font-bold font-mono tracking-tight text-white flex items-baseline gap-1">
            <span className={temp > 75 ? 'text-amber-400' : 'text-white'}>{temp}°</span>
            <span className="text-xs text-zinc-500 font-sans font-normal">C</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">Max Safe: 85.0°C</div>
        </div>

        <div className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800/80">
          <div className="text-[11px] text-zinc-400 font-sans mb-1 flex items-center justify-between">
            <span>{lang === 'th' ? 'ความเร็วรอบ' : 'Motor RPM'}</span>
            <Gauge className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <div className="text-2xl font-bold font-mono tracking-tight text-white flex items-baseline gap-1">
            {rpm}
            <span className="text-xs text-zinc-500 font-sans font-normal">RPM</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">PWM Inverter Sync</div>
        </div>

        <div className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800/80">
          <div className="text-[11px] text-zinc-400 font-sans mb-1 flex items-center justify-between">
            <span>{lang === 'th' ? 'อัตราส่งข้อมูล' : 'Telemetry Rate'}</span>
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-mono tracking-tight text-emerald-400 flex items-baseline gap-1">
            100
            <span className="text-xs text-zinc-500 font-sans font-normal">Hz</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1">MQTT over TLS</div>
        </div>
      </div>

      {/* Realtime Waveform SVG */}
      <div className="p-3 bg-black/60 rounded-xl border border-zinc-800/80 mb-5">
        <div className="flex justify-between items-center text-[11px] text-zinc-400 mb-2 font-sans">
          <span>{lang === 'th' ? 'รูปคลื่นการสั่นสะเทือนเรียลไทม์ (Live FFT)' : 'Real-Time Vibration FFT Spectrum'}</span>
          <span className="text-zinc-500 text-[10px]">Buffer: 600ms resolution</span>
        </div>

        <div className="h-20 w-full relative flex items-end">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 120 40">
            <defs>
              <linearGradient id="vibWaveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isAlarm ? '#EF4444' : '#FF5715'} stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF5715" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Threshold reference line */}
            <line x1="0" y1="14" x2="120" y2="14" stroke="#EF4444" strokeDasharray="2,2" strokeWidth="0.5" />

            {/* The live wave path */}
            {(() => {
              const points = vibrationHistory
                .map((val, idx) => {
                  const x = (idx / (vibrationHistory.length - 1)) * 120;
                  // Map val (0.5 to 6.0) to SVG y (38 down to 2)
                  const y = Math.max(2, Math.min(38, 40 - (val / 5.5) * 36));
                  return `${x.toFixed(1)},${y.toFixed(1)}`;
                })
                .join(' ');

              return (
                <>
                  <polyline
                    fill="none"
                    stroke={isAlarm ? '#EF4444' : '#FF5715'}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />
                  <polygon
                    fill="url(#vibWaveGrad)"
                    points={`0,40 ${points} 120,40`}
                  />
                </>
              );
            })()}
          </svg>
        </div>
      </div>

      {/* Interactive Controls (Users can touch & play) */}
      <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800">
        <div className="text-xs text-zinc-300 font-sans font-semibold mb-3 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-[#FF5715]" />
          {lang === 'th' ? 'แผงควบคุมอินเทอร์แอคทีฟ (ลองปรับค่าดูผลลัพธ์)' : 'Interactive Control Sandbox (Try adjusting values)'}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          {/* Slider for RPM */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-zinc-400 font-sans">
              <span>{lang === 'th' ? 'ปรับรอบมอเตอร์' : 'Adjust RPM'}</span>
              <span className="text-[#FF5715] font-mono">{rpm}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="4800"
              step="100"
              value={rpm}
              onChange={(e) => setRpm(Number(e.target.value))}
              className="w-full accent-[#FF5715] bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Anomaly Toggle Button */}
          <div>
            <button
              onClick={() => setInjectAnomaly(!injectAnomaly)}
              className={`w-full py-2 px-3 rounded-lg text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 border ${
                injectAnomaly
                  ? 'bg-red-500/20 text-red-300 border-red-500/60 ring-1 ring-red-500/30'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700'
              }`}
            >
              <AlertTriangle className={`w-3.5 h-3.5 ${injectAnomaly ? 'text-red-400' : 'text-zinc-400'}`} />
              {injectAnomaly
                ? lang === 'th' ? 'กำลังเกิดสัญญาณสั่นผิดปกติ' : 'Bearing Fault Injected'
                : lang === 'th' ? 'จำลอง: แบริ่งมีปัญหา' : 'Simulate: Bearing Fault'}
            </button>
          </div>

          {/* Coolant Toggle Button */}
          <div>
            <button
              onClick={() => setCoolantOn(!coolantOn)}
              className={`w-full py-2 px-3 rounded-lg text-xs font-sans font-medium transition-all flex items-center justify-center gap-2 border ${
                coolantOn
                  ? 'bg-[#FF5715]/15 text-[#FF7A45] border-[#FF5715]/40'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 border-zinc-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#F7B218]" />
              {coolantOn
                ? lang === 'th' ? 'ปั๊มระบายความร้อน: ON' : 'Coolant Pump: ACTIVE'
                : lang === 'th' ? 'ปั๊มระบายความร้อน: OFF' : 'Coolant Pump: OFF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 2. APPLIED AI COMPUTER VISION DEFECT INSPECTOR
 * ------------------------------------------------------------- */
const VisionSimulator: React.FC<{ lang: Language }> = ({ lang }) => {
  const [defectIndex, setDefectIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const samples = [
    {
      nameTh: 'ชิ้นส่วนเฟืองเกียร์ไฮโดรลิก #401',
      nameEn: 'Hydraulic Spur Gear #401',
      status: 'DEFECT',
      type: 'Surface Micro-Crack',
      confidence: 99.8,
      bbox: { x: 38, y: 32, w: 26, h: 22 },
      actionTh: 'คัดออกไปยังราง B (Reject)',
      actionEn: 'Pneumatic Eject to Bin B',
      inferenceTime: '16.4ms',
    },
    {
      nameTh: 'แผ่นทองเหลืองสำหรับบัสบาร์ #208',
      nameEn: 'Conductive Busbar Plate #208',
      status: 'PASS',
      type: 'Zero Faults Detected',
      confidence: 99.9,
      bbox: null,
      actionTh: 'ส่งต่อไปยังขั้นตอนประกอบ',
      actionEn: 'Advance to Assembly Conveyor',
      inferenceTime: '12.8ms',
    },
    {
      nameTh: 'เบ้าเชื่อมอลูมิเนียมหล่อ #914',
      nameEn: 'Cast Aluminium Flange #914',
      status: 'DEFECT',
      type: 'Dimensional Tolerance Over Limit (+0.42mm)',
      confidence: 98.7,
      bbox: { x: 62, y: 48, w: 28, h: 30 },
      actionTh: 'คัดแยกส่งรีเวิร์ค (Rework)',
      actionEn: 'Rework Flag Tagged in MES',
      inferenceTime: '18.1ms',
    },
  ];

  const current = samples[defectIndex];

  const handleNext = () => {
    setIsScanning(true);
    setTimeout(() => {
      setDefectIndex((prev) => (prev + 1) % samples.length);
      setIsScanning(false);
    }, 400);
  };

  return (
    <div className="w-full bg-[#0F1012] text-zinc-100 rounded-2xl p-4 sm:p-6 border border-zinc-800 shadow-xl overflow-hidden font-mono">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-zinc-800 gap-2">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#FF5715]" />
          <span className="text-xs uppercase tracking-wider text-zinc-300 font-sans font-semibold">
            {lang === 'th' ? 'กล้อง AI ตรวจจับตำหนิชิ้นงาน' : 'Edge Vision Optical QA Engine'}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
            FPS: 60 | TensorRT 8.6
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isScanning}
          className="px-3 py-1.5 text-xs font-sans font-medium rounded-lg bg-[#FF5715] hover:bg-[#e04b0f] text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
          {lang === 'th' ? 'สแกนชิ้นงานถัดไป' : 'Next Sample'}
        </button>
      </div>

      {/* Simulated Camera Viewfinder */}
      <div className="relative w-full aspect-video bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden mb-4 flex items-center justify-center">
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle, #71717A 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Viewfinder crosshairs */}
        <div className="absolute inset-4 border border-zinc-800/80 pointer-events-none rounded">
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#FF5715]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#FF5715]" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#FF5715]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF5715]" />
        </div>

        {/* The Component Graphic */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Metallic Industrial Graphic */}
          <div className="w-36 h-36 rounded-full border-8 border-zinc-700 bg-gradient-to-tr from-zinc-800 via-zinc-700 to-zinc-900 shadow-inner flex items-center justify-center relative">
            <div className="w-16 h-16 rounded-full border-4 border-zinc-600 bg-zinc-950 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-zinc-800" />
            </div>
            {/* Gear Teeth accents */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <div
                key={deg}
                className="absolute w-3 h-5 bg-zinc-600 -top-2 rounded-sm"
                style={{
                  transformOrigin: 'center 86px',
                  transform: `rotate(${deg}deg)`,
                }}
              />
            ))}
          </div>

          {/* AI Bounding Box if Defect */}
          {current.bbox && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute border-2 border-red-500 bg-red-500/15 rounded pointer-events-none"
              style={{
                left: `${current.bbox.x}%`,
                top: `${current.bbox.y}%`,
                width: `${current.bbox.w}%`,
                height: `${current.bbox.h}%`,
              }}
            >
              <div className="absolute -top-6 left-0 bg-red-600 text-white text-[10px] font-mono px-1.5 py-0.5 rounded whitespace-nowrap flex items-center gap-1 shadow">
                <span>{current.type}</span>
                <span className="font-bold">({current.confidence}%)</span>
              </div>
            </motion.div>
          )}

          {/* Pass Watermark if Clean */}
          {current.status === 'PASS' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                PASS (100% SPEC)
              </div>
            </motion.div>
          )}
        </div>

        {/* Live Scan Line */}
        {isScanning && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 0.4, ease: 'linear' }}
            className="absolute left-0 right-0 h-0.5 bg-[#FF5715] shadow-[0_0_12px_#FF5715] pointer-events-none"
          />
        )}

        {/* Live Camera Info Bar */}
        <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[10px] text-zinc-400 font-mono">
          <span>TARGET: {lang === 'th' ? current.nameTh : current.nameEn}</span>
          <span className="text-[#FF5715]">LATENCY: {current.inferenceTime}</span>
        </div>
      </div>

      {/* Decision Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-xs">
        <div>
          <span className="text-zinc-500 block text-[10px] font-sans">
            {lang === 'th' ? 'การตัดสินใจของโมเดล' : 'Inference Decision'}
          </span>
          <span
            className={`font-bold font-sans text-sm ${
              current.status === 'PASS' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {current.status === 'PASS'
              ? lang === 'th' ? '✓ ผ่านเกณฑ์มาตรฐาน' : '✓ VERIFIED PASS'
              : lang === 'th' ? '✗ ตรวจพบตำหนิ (EJECT)' : '✗ DEFECT REJECTED'}
          </span>
        </div>

        <div>
          <span className="text-zinc-500 block text-[10px] font-sans">
            {lang === 'th' ? 'ประเภทความผิดปกติ' : 'Anomaly Classification'}
          </span>
          <span className="text-zinc-200 font-sans">{current.type}</span>
        </div>

        <div>
          <span className="text-zinc-500 block text-[10px] font-sans">
            {lang === 'th' ? 'คำสั่งระบบอัตโนมัติ' : 'Automated Edge Command'}
          </span>
          <span className="text-zinc-300 font-sans">
            {lang === 'th' ? current.actionTh : current.actionEn}
          </span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 3. HIGH-VELOCITY WEB PLATFORM SPEED SIMULATOR
 * ------------------------------------------------------------- */
const PerformanceSimulator: React.FC<{ lang: Language }> = ({ lang }) => {
  const [concurrency, setConcurrency] = useState(12000);
  const [isStressTesting, setIsStressTesting] = useState(false);
  const [latency, setLatency] = useState(14.2);

  const handleStress = () => {
    setIsStressTesting(true);
    setConcurrency(45000);
    setLatency(22.8);
    setTimeout(() => {
      setIsStressTesting(false);
      setConcurrency(15000);
      setLatency(15.4);
    }, 2000);
  };

  return (
    <div className="w-full bg-[#0F1012] text-zinc-100 rounded-2xl p-4 sm:p-6 border border-zinc-800 shadow-xl overflow-hidden font-mono">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-zinc-800 gap-2">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-[#FF5715]" />
          <span className="text-xs uppercase tracking-wider text-zinc-300 font-sans font-semibold">
            {lang === 'th' ? 'ตัววัดสมรรถนะเว็บและคลาวด์' : 'Enterprise Cloud Stress Simulator'}
          </span>
        </div>

        <button
          onClick={handleStress}
          disabled={isStressTesting}
          className="px-3 py-1.5 text-xs font-sans font-medium rounded-lg bg-[#FF5715] hover:bg-[#e04b0f] text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Zap className={`w-3.5 h-3.5 text-[#F7B218] ${isStressTesting ? 'animate-bounce' : ''}`} />
          {isStressTesting
            ? lang === 'th' ? 'กำลังยิงโหลดหนัก...' : 'Simulating 50k Load...'
            : lang === 'th' ? 'ทดสอบยิงโหลด 50,000 req/s' : 'Stress Test 50,000 req/s'}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
          <span className="text-[11px] text-zinc-400 font-sans block mb-1">
            {lang === 'th' ? 'เวลาตอบสนอง API' : 'P99 Latency'}
          </span>
          <div className="text-2xl font-bold font-mono text-[#FF5715] flex items-baseline gap-1">
            {latency}
            <span className="text-xs text-zinc-500 font-sans">ms</span>
          </div>
          <span className="text-[10px] text-emerald-400">Zero Throttling</span>
        </div>

        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
          <span className="text-[11px] text-zinc-400 font-sans block mb-1">
            {lang === 'th' ? 'คำขอพร้อมกัน' : 'Throughput'}
          </span>
          <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-1">
            {concurrency.toLocaleString()}
            <span className="text-xs text-zinc-500 font-sans">req/s</span>
          </div>
          <span className="text-[10px] text-zinc-500">Auto-Scaling Pods</span>
        </div>

        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
          <span className="text-[11px] text-zinc-400 font-sans block mb-1">
            {lang === 'th' ? 'อัตราสูญหายข้อมูล' : 'Packet Loss'}
          </span>
          <div className="text-2xl font-bold font-mono text-emerald-400 flex items-baseline gap-1">
            0.00
            <span className="text-xs text-zinc-500 font-sans">%</span>
          </div>
          <span className="text-[10px] text-emerald-400">Idempotent Queue</span>
        </div>

        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
          <span className="text-[11px] text-zinc-400 font-sans block mb-1">
            {lang === 'th' ? 'ความพร้อมใช้งาน' : 'Uptime SLA'}
          </span>
          <div className="text-2xl font-bold font-mono text-[#F7B218] flex items-baseline gap-1">
            99.98
            <span className="text-xs text-zinc-500 font-sans">%</span>
          </div>
          <span className="text-[10px] text-zinc-500">High Availability</span>
        </div>
      </div>

      {/* Architecture pipeline visualizer */}
      <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800/80">
        <div className="text-xs font-sans text-zinc-400 mb-3">
          {lang === 'th' ? 'เส้นทางการเดินทางของข้อมูล Gepler Stream Pipeline' : 'Data Ingestion Architecture Pipeline'}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-sans">
          <div className="px-3 py-2 bg-zinc-900 rounded-lg border border-zinc-700 w-full sm:w-auto text-center">
            <span className="text-[#FF5715] font-bold block text-[11px]">EDGE DEVICES</span>
            <span className="text-zinc-400 text-[10px]">MQTT / OPC-UA</span>
          </div>

          <div className="text-zinc-600 font-mono text-sm hidden sm:block">───►</div>

          <div className="px-3 py-2 bg-zinc-900 rounded-lg border border-zinc-700 w-full sm:w-auto text-center">
            <span className="text-[#F7B218] font-bold block text-[11px]">KAFKA / REDIS</span>
            <span className="text-zinc-400 text-[10px]">Streaming Buffer</span>
          </div>

          <div className="text-zinc-600 font-mono text-sm hidden sm:block">───►</div>

          <div className="px-3 py-2 bg-zinc-900 rounded-lg border border-zinc-700 w-full sm:w-auto text-center">
            <span className="text-emerald-400 font-bold block text-[11px]">GO / NODE CORE</span>
            <span className="text-zinc-400 text-[10px]">Business Logic</span>
          </div>

          <div className="text-zinc-600 font-mono text-sm hidden sm:block">───►</div>

          <div className="px-3 py-2 bg-zinc-900 rounded-lg border border-[#FF5715]/60 bg-[#FF5715]/10 w-full sm:w-auto text-center">
            <span className="text-white font-bold block text-[11px]">REACT WEB DASHBOARD</span>
            <span className="text-[#FF5715] text-[10px]">Sub-20ms WebSocket</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 4. FIELD OPERATIONS MOBILE CONTROLLER APP SIMULATOR
 * ------------------------------------------------------------- */
const AppSimulator: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'status' | 'switches' | 'orders'>('status');
  const [relay1, setRelay1] = useState(true);
  const [relay2, setRelay2] = useState(false);
  const [offlineSyncPending, setOfflineSyncPending] = useState(0);

  const toggleRelay = (relayNum: number) => {
    if (relayNum === 1) setRelay1(!relay1);
    if (relayNum === 2) setRelay2(!relay2);
    setOfflineSyncPending((prev) => prev + 1);
  };

  return (
    <div className="w-full bg-[#0F1012] text-zinc-100 rounded-2xl p-4 sm:p-6 border border-zinc-800 shadow-xl overflow-hidden font-sans">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Mobile Phone Mockup */}
        <div className="w-full max-w-[280px] bg-zinc-950 rounded-[36px] p-3 border-4 border-zinc-800 shadow-2xl relative shrink-0">
          {/* Speaker notch */}
          <div className="w-20 h-4 bg-zinc-900 rounded-full mx-auto mb-3 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-950 mr-2" />
            <div className="w-8 h-1 bg-zinc-800 rounded-full" />
          </div>

          {/* App Screen Content */}
          <div className="bg-zinc-900 rounded-[24px] p-3 text-white border border-zinc-800/80 min-h-[380px] flex flex-col justify-between">
            {/* App Topbar */}
            <div>
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3 pb-2 border-b border-zinc-800">
                <span className="flex items-center gap-1 text-[#FF5715] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5715] animate-pulse" />
                  BLE: PAIRED
                </span>
                <span className="text-[10px] text-zinc-500">BATTERY: 98%</span>
              </div>

              {/* Header Title */}
              <div className="mb-4">
                <h4 className="font-bold text-sm text-white">Gepler Field Ops</h4>
                <p className="text-[10px] text-zinc-400">Node #B-04 • Zone 2 Inverter</p>
              </div>

              {/* Sub-tabs */}
              <div className="grid grid-cols-3 gap-1 bg-zinc-950 p-1 rounded-lg text-[10px] font-medium mb-3">
                <button
                  onClick={() => setActiveTab('status')}
                  className={`py-1 rounded cursor-pointer ${
                    activeTab === 'status' ? 'bg-[#FF5715] text-white font-bold' : 'text-zinc-400'
                  }`}
                >
                  Status
                </button>
                <button
                  onClick={() => setActiveTab('switches')}
                  className={`py-1 rounded cursor-pointer ${
                    activeTab === 'switches' ? 'bg-[#FF5715] text-white font-bold' : 'text-zinc-400'
                  }`}
                >
                  Relays
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`py-1 rounded cursor-pointer ${
                    activeTab === 'orders' ? 'bg-[#FF5715] text-white font-bold' : 'text-zinc-400'
                  }`}
                >
                  Tasks
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'status' && (
                <div className="space-y-2">
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block">Link Protocol</span>
                    <span className="text-xs font-semibold text-[#F7B218]">BLE 5.2 Long Range</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block">Internal Pressure</span>
                    <span className="text-xs font-semibold text-white">4.2 bar (Safe)</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block">Offline Cache Queue</span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {offlineSyncPending} actions queued
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'switches' && (
                <div className="space-y-2.5">
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium block">Pneumatic Valve 1</span>
                      <span className="text-[10px] text-zinc-500">Main Line Supply</span>
                    </div>
                    <button
                      onClick={() => toggleRelay(1)}
                      className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                        relay1 ? 'bg-[#FF5715]' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                          relay1 ? 'left-5' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-medium block">Backup Compressor</span>
                      <span className="text-[10px] text-zinc-500">Auxiliary Motor</span>
                    </div>
                    <button
                      onClick={() => toggleRelay(2)}
                      className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                        relay2 ? 'bg-[#FF5715]' : 'bg-zinc-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                          relay2 ? 'left-5' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="space-y-2">
                  <div className="p-2 bg-zinc-950 rounded-lg border-l-2 border-emerald-500 text-[11px]">
                    <span className="font-semibold block">Quarterly Calibration</span>
                    <span className="text-[9px] text-zinc-400">Completed 09:30 AM</span>
                  </div>
                  <div className="p-2 bg-zinc-950 rounded-lg border-l-2 border-[#FF5715] text-[11px]">
                    <span className="font-semibold block">Vibration Check</span>
                    <span className="text-[9px] text-[#FF5715]">Pending Field Review</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Safe Bar */}
            <div className="pt-2 text-center">
              <span className="text-[9px] text-zinc-500 font-mono">SQLite Encrypted • 100% Offline Ready</span>
            </div>
          </div>
        </div>

        {/* Description & Interactive Hint */}
        <div className="space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF5715]/10 border border-[#FF5715]/30 text-[#FF5715] text-xs font-semibold mb-2">
              <Smartphone className="w-3.5 h-3.5" />
              {lang === 'th' ? 'ระบบจำลองหน้าจอมือถือจริง' : 'Interactive Touch Simulation'}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk']">
              {lang === 'th'
                ? 'ลองกดสวิตช์และเปลี่ยนแท็บในโทรศัพท์จำลอง'
                : 'Click switches & tabs on the phone simulator'}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lang === 'th'
                ? 'แอปพลิเคชันของ Gepler Industrial ออกแบบมาเพื่อรับมือกับสภาพแวดล้อมจริงในโรงงาน: ใช้งานได้ลื่นไหลแม้ออฟไลน์ สั่งการเปิด-ปิดเครื่องจักรผ่าน Bluetooth ไร้สาย และซิงค์ขึ้น Cloud ทันทีที่พบสัญญาณ'
                : 'Gepler mobile apps are built for extreme field environments: zero-signal offline capability, direct hardware actuation via BLE, and tamper-proof local SQLite encryption.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
              <span className="text-[#FF5715] font-bold block mb-1">OFFLINE FIRST</span>
              <span className="text-zinc-400 text-[11px]">
                {lang === 'th' ? 'บันทึกงานได้แม้ในชั้นใต้ดินไร้สัญญาณ' : 'Full ops with zero cell reception'}
              </span>
            </div>
            <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
              <span className="text-[#F7B218] font-bold block mb-1">BLE LATENCY &lt;5ms</span>
              <span className="text-zinc-400 text-[11px]">
                {lang === 'th' ? 'สั่งการเครื่องจักรทันใจระดับเสี้ยววิ' : 'Instant tactile relay response'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
