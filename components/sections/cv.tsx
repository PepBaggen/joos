"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function CVSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-normal mb-8 lowercase">curriculum vitae</h2>
          <a
            href="/cv.pdf"
            download="Josephine_Baggen_CV.pdf"
            className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
