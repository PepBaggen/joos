"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Starfield } from "@/components/starfield";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { PublicationsSection } from "@/components/sections/publications";
import { CVSection } from "@/components/sections/cv";
import { StellarJournalSection } from "@/components/sections/stellar-journal";
import { Footer } from "@/components/footer";

type Section = "home" | "publications" | "cv" | "stellar-journal";

const sectionComponents: Record<Section, React.ComponentType> = {
  home: HeroSection,
  publications: PublicationsSection,
  cv: CVSection,
  "stellar-journal": StellarJournalSection,
};

// Warp transition variants
const warpVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Star warp overlay animation
const warpOverlayVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.1, 0.5, 1],
    },
  },
};

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isNavigating, setIsNavigating] = useState(false);
  const [showWarp, setShowWarp] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleNavigate = (section: string) => {
    if (section === activeSection || isNavigating) return;

    setIsNavigating(true);
    setShowWarp(true);

    // Delay the section change to allow warp effect
    setTimeout(() => {
      setActiveSection(section as Section);
      // Scroll to top smoothly
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);

    // Reset navigation state
    setTimeout(() => {
      setShowWarp(false);
      setIsNavigating(false);
    }, 700);
  };

  // Handle scroll-based section detection for the scrollable single-page mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections: Section[] = ["home", "publications", "cv", "stellar-journal"];
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          handleNavigate(sections[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        if (currentIndex > 0) {
          handleNavigate(sections[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  const CurrentSection = sectionComponents[activeSection];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated starfield background */}
      <Starfield />

      {/* Warp speed overlay effect */}
      <AnimatePresence>
        {showWarp && (
          <motion.div
            variants={warpOverlayVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(99, 102, 241, 0.1) 50%, rgba(139, 92, 246, 0.15) 70%, transparent 100%)",
            }}
          >
            {/* Star streaks */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: 2,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{
                    scaleY: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: Math.random() * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content */}
      <main ref={mainRef} className="relative z-10 min-h-screen overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={warpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CurrentSection />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </div>
  );
}
