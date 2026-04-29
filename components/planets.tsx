"use client";

import { motion } from "framer-motion";

// Mars - the main planet with orbiting spaceship
function Mars({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Mars body */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="marsGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#e85a19" />
              <stop offset="50%" stopColor="#c1440e" />
              <stop offset="100%" stopColor="#8b2e0a" />
            </radialGradient>
            <filter id="marsShadow">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#c1440e" floodOpacity="0.4" />
            </filter>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#marsGradient)" filter="url(#marsShadow)" />
          {/* Surface details */}
          <circle cx="70" cy="80" r="15" fill="#a83a0c" opacity="0.6" />
          <circle cx="120" cy="110" r="20" fill="#a83a0c" opacity="0.5" />
          <circle cx="90" cy="130" r="12" fill="#a83a0c" opacity="0.4" />
        </svg>
        
        {/* Orbit ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-[180%] h-[60%] border border-white/20 rounded-full"
            style={{ transform: "rotateX(75deg)" }}
          />
        </div>
        
        {/* Orbiting spaceship */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ width: "180%", height: "60%", transformStyle: "preserve-3d" }}
            className="flex items-center"
          >
            <div 
              className="absolute"
              style={{ 
                left: "100%", 
                transform: "translateX(-50%) rotateX(-75deg)" 
              }}
            >
              <svg viewBox="0 0 40 20" className="w-8 h-4">
                <path 
                  d="M35 10 L5 10 L2 8 L2 12 L5 10 M35 10 L38 8 L38 12 Z" 
                  fill="white" 
                />
                <path d="M8 10 L15 7 L25 7 L30 10 L25 13 L15 13 Z" fill="#e5e7eb" />
                <rect x="18" y="8" width="4" height="4" fill="#60a5fa" rx="1" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Saturn with rings
function Saturn({ className }: { className?: string }) {
  return (
    <motion.div 
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      <svg viewBox="0 0 120 80" className="w-full h-full">
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
        <ellipse cx="60" cy="40" rx="55" ry="12" fill="none" stroke="url(#ringGradient)" strokeWidth="4" opacity="0.6" />
        {/* Planet */}
        <circle cx="60" cy="40" r="25" fill="url(#saturnGradient)" />
        {/* Ring front */}
        <path d="M 5 40 Q 60 55 115 40" fill="none" stroke="url(#ringGradient)" strokeWidth="4" opacity="0.8" />
      </svg>
    </motion.div>
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Mars - center right, main focal point */}
      <Mars className="absolute w-40 h-40 md:w-56 md:h-56 top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2" />
      
      {/* Saturn - top left */}
      <Saturn className="absolute w-24 h-16 md:w-32 md:h-20 top-[25%] left-[10%]" />
      
      {/* Jupiter - right side */}
      <Jupiter className="absolute w-20 h-20 md:w-28 md:h-28 top-[35%] right-[8%]" />
      
      {/* Moon - bottom left */}
      <Moon className="absolute w-12 h-12 md:w-16 md:h-16 bottom-[25%] left-[15%]" />
      
      {/* Small planets */}
      <SmallPlanet className="absolute w-6 h-6 top-[20%] right-[25%]" color="#6b7280" />
      <SmallPlanet className="absolute w-4 h-4 bottom-[40%] left-[35%]" color="#9ca3af" />
    </div>
  );
}
