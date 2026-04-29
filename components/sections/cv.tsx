"use client";

import { motion } from "framer-motion";
import { FileText, Download, Star } from "lucide-react";

export function CVSection() {
  return (
    <section className="min-h-screen py-24 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <FileText className="w-8 h-8 text-accent" />
            <span>Curriculum Vitae</span>
          </h2>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 mt-8 relative overflow-hidden"
        >
          {/* Constellation graphic */}
          <div className="absolute right-4 top-4 md:right-12 md:top-8 opacity-20">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="text-accent"
            >
              {/* Stars */}
              <circle cx="30" cy="40" r="3" fill="currentColor" />
              <circle cx="80" cy="20" r="2" fill="currentColor" />
              <circle cx="140" cy="50" r="4" fill="currentColor" />
              <circle cx="170" cy="30" r="2" fill="currentColor" />
              <circle cx="60" cy="90" r="3" fill="currentColor" />
              <circle cx="120" cy="100" r="2" fill="currentColor" />
              <circle cx="180" cy="80" r="3" fill="currentColor" />
              <circle cx="40" cy="140" r="2" fill="currentColor" />
              <circle cx="100" cy="160" r="4" fill="currentColor" />
              <circle cx="160" cy="150" r="2" fill="currentColor" />
              <circle cx="70" cy="180" r="3" fill="currentColor" />
              <circle cx="130" cy="190" r="2" fill="currentColor" />

              {/* Constellation lines */}
              <line
                x1="30"
                y1="40"
                x2="80"
                y2="20"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="80"
                y1="20"
                x2="140"
                y2="50"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="140"
                y1="50"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="30"
                y1="40"
                x2="60"
                y2="90"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="60"
                y1="90"
                x2="120"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="120"
                y1="100"
                x2="180"
                y2="80"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="140"
                y1="50"
                x2="120"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="60"
                y1="90"
                x2="40"
                y2="140"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="40"
                y1="140"
                x2="100"
                y2="160"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="100"
                y1="160"
                x2="160"
                y2="150"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="120"
                y1="100"
                x2="100"
                y2="160"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="40"
                y1="140"
                x2="70"
                y2="180"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="100"
                y1="160"
                x2="130"
                y2="190"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-accent mb-6">
              <Star className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Full CV Under Construction
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg font-serif">
              A detailed curriculum vitae including education, research
              experience, teaching, awards, and presentations is currently being
              prepared. Check back soon for the complete document.
            </p>

            {/* Download Button (Disabled) */}
            <button
              disabled
              className="inline-flex items-center gap-2 bg-muted/50 text-muted-foreground px-5 py-3 rounded-xl cursor-not-allowed opacity-60"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download CV (PDF)</span>
            </button>

            <p className="text-xs text-muted-foreground mt-3">
              PDF download will be available soon
            </p>
          </div>
        </motion.div>

        {/* Quick Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4 mt-8"
        >
          <div className="glass rounded-xl p-6">
            <h4 className="font-semibold text-accent mb-2">Education</h4>
            <p className="text-sm text-muted-foreground">
              PhD Candidate in Astronomy
            </p>
            <p className="text-sm text-foreground">Yale University</p>
          </div>

          <div className="glass rounded-xl p-6">
            <h4 className="font-semibold text-accent mb-2">Research Focus</h4>
            <p className="text-sm text-muted-foreground">
              Extragalactic Astronomy & Galaxy Formation
            </p>
            <p className="text-sm text-foreground">JWST Observations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
