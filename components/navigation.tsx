"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "cv", label: "CV" },
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="flex items-center justify-end px-6 py-4 md:px-12 gap-6 md:gap-8">
        {/* Nav links */}
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          );
        })}

        {/* Settings icon */}
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
}
