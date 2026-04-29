"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Starfield } from "@/components/starfield";
import { FloatingPlanets } from "@/components/planets";
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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: EASE,
    },
  },
};

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isNavigating, setIsNavigating] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleNavigate = (section: string) => {
    if (section === activeSection || isNavigating) return;

    setIsNavigating(true);
    setActiveSection(section as Section);

    // Scroll to top smoothly
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Reset navigation state
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  };

  // Keyboard navigation
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
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated starfield background */}
      <Starfield />

      {/* Floating illustrated planets */}
      <FloatingPlanets />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content */}
      <main ref={mainRef} className="relative z-10 min-h-screen overflow-y-auto pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CurrentSection />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer with social icons */}
      <Footer />
    </div>
  );
}
