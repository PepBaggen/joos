"use client";

import { motion } from "framer-motion";

// Saturn with rings and orbiting moon
function Saturn({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <svg viewBox="0 0 160 100" className="w-full h-full">
          <defs>
            <radialGradient id="saturnGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#e8d5b7" />
              <stop offset="50%" stopColor="#d4a574" />
              <stop offset="100%" stopColor="#a67c52" />
            </radialGradient>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#e8d5b7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d4a574" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Ring behind */}
          <ellipse cx="80" cy="50" rx="70" ry="15" fill="none" stroke="url(#ringGradient)" strokeWidth="5" opacity="0.6" />
          {/* Planet */}
          <circle cx="80" cy="50" r="32" fill="url(#saturnGradient)" />
          {/* Ring front */}
          <path d="M 10 50 Q 80 70 150 50" fill="none" stroke="url(#ringGradient)" strokeWidth="5" opacity="0.8" />
        </svg>
        
        {/* Orbiting spaceship around Saturn */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ width: "200%", height: "80%" }}
            className="flex items-center justify-center"
          >
            <div 
              className="absolute"
              style={{ 
                left: "100%", 
                transform: "translateX(-50%)" 
              }}
            >
              <svg viewBox="0 0 40 20" className="w-6 h-3">
                <path 
                  d="M35 10 L5 10 L2 8 L2 12 L5 10 M35 10 L38 8 L38 12 Z" 
                  fill="white" 
                />
                <path d="M8 10 L15 7 L25 7 L30 10 L25 13 L15 13 Z" fill="#e5e7eb" />
                <rect x="18" y="8" width="4" height="4" fill="#22d3ee" rx="1" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Jupiter
function Jupiter({ className }: { className?: string }) {
  return (
    <motion.div 
      className={className}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="jupiterGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#e8d5b7" />
            <stop offset="50%" stopColor="#c9a87c" />
            <stop offset="100%" stopColor="#8b7355" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#jupiterGradient)" />
        {/* Bands */}
        <path d="M 15 40 Q 50 38 85 40" stroke="#a67c52" strokeWidth="5" fill="none" opacity="0.6" />
        <path d="M 12 50 Q 50 52 88 50" stroke="#8b5a3c" strokeWidth="6" fill="none" opacity="0.5" />
        <path d="M 15 60 Q 50 62 85 60" stroke="#a67c52" strokeWidth="4" fill="none" opacity="0.6" />
        {/* Great Red Spot */}
        <ellipse cx="65" cy="55" rx="8" ry="5" fill="#c1440e" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

// Moon
function Moon({ className }: { className?: string }) {
  return (
    <motion.div 
      className={className}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <svg viewBox="0 0 60 60" className="w-full h-full">
        <defs>
          <radialGradient id="moonGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </radialGradient>
        </defs>
        <circle cx="30" cy="30" r="25" fill="url(#moonGradient)" />
        {/* Craters */}
        <circle cx="22" cy="25" r="5" fill="#6b7280" opacity="0.4" />
        <circle cx="35" cy="35" r="7" fill="#6b7280" opacity="0.3" />
        <circle cx="28" cy="40" r="4" fill="#6b7280" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

// Small decorative planet
function SmallPlanet({ className, color = "#9ca3af" }: { className?: string; color?: string }) {
  return (
    <motion.div 
      className={className}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 30 30" className="w-full h-full">
        <defs>
          <radialGradient id={`smallPlanet-${color.replace("#", "")}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </radialGradient>
        </defs>
        <circle cx="15" cy="15" r="12" fill={`url(#smallPlanet-${color.replace("#", "")})`} />
      </svg>
    </motion.div>
  );
}

export function FloatingPlanets() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
      {/* Saturn - top right edge on mobile, spread in on desktop */}
      <Saturn className="absolute w-32 h-20 md:w-64 md:h-40 top-[10%] right-[1%] md:right-[10%]" />

      {/* Jupiter - bottom right edge */}
      <Jupiter className="absolute w-16 h-16 md:w-28 md:h-28 bottom-[20%] right-[2%] md:right-[15%]" />

      {/* Moon - left edge */}
      <Moon className="absolute w-10 h-10 md:w-16 md:h-16 top-[60%] left-[1%] md:left-[8%]" />

      {/* Small planets - hugging edges on mobile */}
      <SmallPlanet className="absolute w-6 h-6 top-[30%] left-[2%] md:left-[15%]" color="#6b7280" />
      <SmallPlanet className="absolute w-4 h-4 bottom-[35%] right-[2%] md:right-[30%]" color="#9ca3af" />
      <SmallPlanet className="absolute w-5 h-5 top-[70%] right-[2%] md:right-[5%]" color="#8b949e" />
    </div>
  );
}
