import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import logoGeplerBody from '../pic/logo/logo-Gepler-body-1.png';
import { Language } from '../types';

interface ConstellationHeroStageProps {
  lang: Language;
  onSelectDiscipline?: (id: 'web' | 'app' | 'iot' | 'ai') => void;
  className?: string;
}

export const ConstellationHeroStage: React.FC<ConstellationHeroStageProps> = ({
  lang,
  onSelectDiscipline,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Smooth mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateSubtleX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const translateSubtleY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchEnd = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Node definitions matching the reference image layout
  const nodes = [
    {
      id: 'web',
      label: 'WEB',
      color: '#F7B218', // Yellow node
      dotBg: 'bg-[#F7B218]',
      x: '14%',
      y: '18%',
      descTh: 'High-Performance Web & Cloud Apps',
      descEn: 'High-Performance Web & Cloud Apps',
    },
    {
      id: 'app',
      label: 'APP',
      color: '#FF5715', // Orange node
      dotBg: 'bg-[#FF5715]',
      x: '18%',
      y: '80%',
      descTh: 'Cross-Platform iOS & Android Systems',
      descEn: 'Cross-Platform iOS & Android Systems',
    },
    {
      id: 'ai',
      label: 'AI',
      color: '#FF5715', // Orange node
      dotBg: 'bg-[#FF5715]',
      x: '80%',
      y: '22%',
      descTh: 'Computer Vision & Edge AI Models',
      descEn: 'Computer Vision & Edge AI Models',
    },
    {
      id: 'iot',
      label: 'IoT',
      color: '#F7B218', // Yellow node
      dotBg: 'bg-[#F7B218]',
      x: '76%',
      y: '78%',
      descTh: 'Sensors, Hardware & Edge Gateways',
      descEn: 'Sensors, Hardware & Edge Gateways',
    },
  ];

  const handleNodeClick = (id: string) => {
    if (onSelectDiscipline) {
      onSelectDiscipline(id as 'web' | 'app' | 'iot' | 'ai');
    }
    const elem = document.getElementById('disciplines');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative -mx-4 sm:-mx-6 lg:mx-auto w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full max-w-none lg:max-w-[620px] aspect-[1.1/1] sm:aspect-[1.15/1] rounded-none lg:rounded-3xl overflow-hidden select-none border-y lg:border border-zinc-800/80 shadow-none lg:shadow-2xl lg:shadow-black/40 ${className}`}
      style={{
        background: 'radial-gradient(circle at center, #18110e 0%, #0d0e11 50%, #07080a 100%)',
      }}
    >
      {/* Dynamic Background Ambient Light Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(circle, #FF5715 0%, #F7B218 35%, transparent 70%)',
          }}
        />
        {/* Subtle grid pattern inside */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FF5715 1px, transparent 1px), linear-gradient(to bottom, #FF5715 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* SVG Constellation Network Lines & Orbital Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF5715" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#F7B218" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF5715" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5715" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F7B218" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7B218" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5715" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 1. Concentric Orbital Rings (Matching Reference) */}
        {/* Outer Orbit */}
        <circle
          cx="300"
          cy="260"
          r="215"
          stroke="#FF5715"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        {/* Mid Orbit 1 */}
        <circle
          cx="300"
          cy="260"
          r="165"
          stroke="#FF5715"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        {/* Mid Orbit 2 (Dashed Accent) */}
        <circle
          cx="300"
          cy="260"
          r="135"
          stroke="#F7B218"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        {/* Inner Orbit around emblem */}
        <circle
          cx="300"
          cy="260"
          r="95"
          stroke="#FF5715"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />

        {/* 2. Constellation Network Mesh (Interconnected Nodes) */}
        {/* Left Network Mesh (Connecting to WEB and APP) */}
        <path
          d="M 115 110 L 195 105 L 140 220 L 115 110 Z"
          stroke="#FF5715"
          strokeOpacity="0.25"
          strokeWidth="1"
          fill="#FF5715"
          fillOpacity="0.015"
        />
        <path
          d="M 140 220 L 195 105 L 235 180 L 140 220 Z"
          stroke="#F7B218"
          strokeOpacity="0.28"
          strokeWidth="0.8"
        />
        <path
          d="M 140 220 L 165 310 L 135 410 L 80 280 Z"
          stroke="#FF5715"
          strokeOpacity="0.2"
          strokeWidth="0.8"
        />
        <path
          d="M 165 310 L 135 410 L 225 385 Z"
          stroke="#F7B218"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="#F7B218"
          fillOpacity="0.015"
        />
        {/* Connecting lines from Left Mesh to Central Hub */}
        <path
          d="M 140 220 Q 210 240 240 255"
          stroke="url(#lineGradOrange)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d="M 195 105 Q 240 180 255 220"
          stroke="#FF5715"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <path
          d="M 225 385 Q 260 320 270 295"
          stroke="#FF5715"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* Right Network Mesh (Connecting to AI and IoT) */}
        <path
          d="M 465 130 L 415 85 L 390 145 Z"
          stroke="#FF5715"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="#FF5715"
          fillOpacity="0.015"
        />
        <path
          d="M 465 130 L 530 165 L 485 240 L 465 130 Z"
          stroke="#F7B218"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />
        <path
          d="M 485 240 L 525 315 L 460 395 L 440 295 Z"
          stroke="#FF5715"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <path
          d="M 460 395 L 440 295 L 375 350 Z"
          stroke="#F7B218"
          strokeOpacity="0.25"
          strokeWidth="0.8"
          fill="#FF5715"
          fillOpacity="0.01"
        />
        <path
          d="M 485 240 Q 380 250 345 260"
          stroke="url(#lineGradYellow)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 390 145 Q 340 190 330 225"
          stroke="#FF5715"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Far Constellation Background Dots (Star/Node Field) */}
        {[
          { cx: 80, cy: 280, r: 2.2, fill: '#FF5715' },
          { cx: 115, cy: 110, r: 2.5, fill: '#F7B218' },
          { cx: 195, cy: 105, r: 3.2, fill: '#FF5715' },
          { cx: 140, cy: 220, r: 4, fill: '#F7B218' },
          { cx: 165, cy: 310, r: 2.8, fill: '#FF5715' },
          { cx: 135, cy: 410, r: 3.5, fill: '#FF5715' },
          { cx: 225, cy: 385, r: 3.8, fill: '#F7B218' },
          { cx: 235, cy: 180, r: 2.5, fill: '#FF5715' },
          { cx: 415, cy: 85, r: 3, fill: '#FF5715' },
          { cx: 390, cy: 145, r: 2.8, fill: '#F7B218' },
          { cx: 465, cy: 130, r: 4.2, fill: '#FF5715' },
          { cx: 530, cy: 165, r: 2.4, fill: '#F7B218' },
          { cx: 485, cy: 240, r: 3, fill: '#FF5715' },
          { cx: 525, cy: 315, r: 2.2, fill: '#FF5715' },
          { cx: 440, cy: 295, r: 3.5, fill: '#F7B218' },
          { cx: 460, cy: 395, r: 4, fill: '#FF5715' },
          { cx: 375, cy: 350, r: 2.5, fill: '#F7B218' },
          { cx: 560, cy: 400, r: 2, fill: '#FF5715' },
          { cx: 40, cy: 240, r: 2, fill: '#F7B218' },
        ].map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r={pt.r}
            fill={pt.fill}
            className="animate-pulse"
            style={{ animationDuration: `${2.5 + (i % 3)}s` }}
          />
        ))}

        {/* Orbiting Telemetry Satellites (moving continuously) */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 300 260"
            to="360 300 260"
            dur="24s"
            repeatCount="indefinite"
          />
          <circle cx="465" cy="260" r="4" fill="#F7B218" filter="drop-shadow(0 0 4px #F7B218)" />
          <circle cx="135" cy="260" r="3" fill="#FF5715" filter="drop-shadow(0 0 4px #FF5715)" />
        </g>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 300 260"
            to="0 300 260"
            dur="18s"
            repeatCount="indefinite"
          />
          <circle cx="300" cy="125" r="3.5" fill="#FF5715" filter="drop-shadow(0 0 5px #FF5715)" />
          <circle cx="300" cy="395" r="3" fill="#F7B218" />
        </g>
      </svg>

      {/* Center 3D Logo Stage (The Official Gepler Emblem with Orbit Ring) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer"
        style={{
          rotateX,
          rotateY,
          x: translateSubtleX,
          y: translateSubtleY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={() => {
          const el = document.getElementById('disciplines');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {/* Golden Radial Back-Glow */}
        <div className="absolute inset-0 w-36 h-36 -translate-x-1/4 -translate-y-1/4 rounded-full bg-[#FF5715]/30 blur-2xl pointer-events-none" />

        {/* The Exact Gepler Logo Image */}
        <motion.img
          src={logoGeplerBody}
          alt="Gepler Industrial Logo Emblem"
          className="w-28 sm:w-36 md:w-40 h-auto object-contain drop-shadow-[0_10px_25px_rgba(255,87,21,0.45)] relative z-10 filter"
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Subtle Pulse Ring below Logo */}
        <div className="mt-2 px-2.5 py-0.5 rounded-full bg-black/60 border border-zinc-800 backdrop-blur-xs text-[10px] font-mono text-zinc-400 tracking-wider uppercase flex items-center gap-1.5 opacity-90">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5715] animate-ping" />
          <span>GEPLER CORE</span>
        </div>
      </motion.div>

      {/* 4 Interactive Floating Badges Matching the User's Image */}
      {nodes.map((node) => {
        const isHovered = hoveredNode === node.id;
        return (
          <motion.div
            key={node.id}
            className="absolute z-30"
            style={{
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => handleNodeClick(node.id)}
          >
            <div
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-2 rounded-lg backdrop-blur-md cursor-pointer transition-all duration-300 ${
                isHovered
                  ? 'bg-zinc-900/95 border border-[#FF5715] shadow-lg shadow-[#FF5715]/25 ring-1 ring-[#FF5715]/50'
                  : 'bg-zinc-950/80 border border-zinc-700/70 hover:border-zinc-500 shadow-md shadow-black/60'
              }`}
            >
              {/* Glowing Bullet Dot */}
              <span
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${node.dotBg} shadow-[0_0_8px_${node.color}] shrink-0`}
              />

              {/* Bold Label */}
              <span className="text-[11px] sm:text-sm font-bold font-mono tracking-wider text-white">
                {node.label}
              </span>
            </div>

            {/* Hover Tooltip Preview */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-md bg-[#0F1012] border border-[#FF5715]/50 text-[11px] font-mono text-zinc-200 whitespace-nowrap shadow-xl z-40 pointer-events-none"
              >
                {lang === 'th' ? node.descTh : node.descEn}
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Bottom Status Bar inside the stage */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-[10px] font-mono text-zinc-500 z-20">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>INDUSTRIAL NODE MATRIX • LIVE</span>
        </span>
        <span className="hidden sm:inline text-zinc-400">
          {lang === 'th' ? 'คลิกที่โหนดเพื่อดูรายละเอียด' : 'Click node to inspect discipline'}
        </span>
      </div>
    </div>
  );
};
