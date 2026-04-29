"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 mt-auto"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Name and Copyright */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Star className="w-4 h-4 text-accent" />
                <span className="font-semibold">Josephine F. W. Baggen</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved
              </p>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/josephine-baggen-713994131/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Decorative line */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground">
              PhD Candidate in Astronomy at Yale University
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
