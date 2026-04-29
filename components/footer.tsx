"use client";

import { motion } from "framer-motion";
import { Linkedin, Star } from "lucide-react";

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
                <Linkedin className="w-5 h-5" />
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
