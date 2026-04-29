"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function PublicationsSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-normal mb-8 lowercase">publications</h2>
          <a
            href="https://ui.adsabs.harvard.edu/search/p_=0&q=author%3A%22Baggen%2C%20Josephine%20F.%20W.%22&sort=date%20desc%2C%20bibcode%20desc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            <span>View all publications on NASA/ADS</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
