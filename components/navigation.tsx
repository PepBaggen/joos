"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, FileText, Sparkles } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "cv", label: "CV", icon: FileText },
  { id: "stellar-journal", label: "Stellar Journal", icon: Sparkles },
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl px-2 py-2 flex items-center justify-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/20 rounded-xl border border-primary/30"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="hidden md:inline relative z-10 text-sm font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
