"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Josephine F. W. Baggen
            </span>
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            PhD Candidate in Astronomy at{" "}
            <span className="text-accent">Yale University</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://www.linkedin.com/in/josephine-baggen-713994131/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </motion.div>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="glass rounded-2xl p-6 md:p-8 text-left max-w-2xl mx-auto glow-border"
        >
          <h2 className="text-xl font-semibold mb-4 text-accent">About</h2>
          <p className="text-muted-foreground leading-relaxed font-serif text-lg">
            I am a PhD candidate in Astronomy at Yale University, exploring the
            frontiers of extragalactic astronomy and galaxy formation. My
            research focuses on understanding how galaxies evolve across cosmic
            time, utilizing cutting-edge observational data from facilities like
            the James Webb Space Telescope. I am passionate about uncovering the
            mysteries of the early universe and the processes that shape the
            cosmic structures we observe today.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </motion.div>
          <p className="text-xs text-muted-foreground mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
}
