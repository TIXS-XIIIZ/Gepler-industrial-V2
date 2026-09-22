import React, { useState } from 'react';
import { motion } from 'motion/react';
import logoGeplerFull from '../pic/logo/logo-Gepler-full-1.png';
import logoGeplerBody from '../pic/logo/logo-Gepler-body-1.png';

interface GeplerLogoProps {
  variant?: 'full' | 'icon' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  animated?: boolean;
  interactive?: boolean;
  alt?: string;
  theme?: 'dark' | 'light' | 'auto';
}

export const GeplerLogo: React.FC<GeplerLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  animated = true,
  interactive = true,
  alt = 'Gepler Industrial',
  theme = 'light',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Dimensions configuration for full logo and icon logo
  const heights = {
    sm: { full: 'h-8 sm:h-9', icon: 'h-5 w-5 sm:h-6 sm:w-6' },
    md: { full: 'h-10 sm:h-11', icon: 'h-8 w-8 sm:h-9 sm:w-9' },
    lg: { full: 'h-14 sm:h-16 md:h-20', icon: 'h-12 w-12 sm:h-14 sm:w-14' },
    hero: { full: 'h-20 sm:h-24 md:h-28', icon: 'h-18 w-18 sm:h-22 sm:w-22' },
  }[size];

  const isFull = variant === 'full';
  const logoSrc = isFull ? logoGeplerFull : logoGeplerBody;

  // For full logo on dark surfaces, give the black text an immaculate white contour
  const darkThemeFilter =
    theme === 'dark' && isFull
      ? 'drop-shadow-[0_0_0.75px_rgba(255,255,255,0.95)] drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]'
      : 'drop-shadow-xs';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '900px' }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          rotateX: interactive && isHovered ? -mousePos.y * 14 : 0,
          rotateY: interactive && isHovered ? mousePos.x * 14 : 0,
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        {/* Subtle Ambient Radial Glow on Hover */}
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 blur-2xl pointer-events-none ${
            isHovered
              ? 'opacity-80 bg-[#FF5715]/25'
              : animated
              ? 'opacity-30 bg-[#FF5715]/10'
              : 'opacity-0'
          }`}
        />

        {/* The Exact Official Logo Image */}
        <img
          src={logoSrc}
          alt={alt}
          className={`${isFull ? heights.full : heights.icon} w-auto object-contain ${darkThemeFilter} transition-transform duration-300 filter`}
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  );
};
