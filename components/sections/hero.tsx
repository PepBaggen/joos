"use client";

import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";

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
              <Linkedin className="w-5 h-5" />
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
