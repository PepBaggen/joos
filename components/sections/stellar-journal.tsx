"use client";

import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon, Globe, Telescope } from "lucide-react";

interface JournalEntry {
  title: string;
  type: "visualization" | "photo" | "update";
  description: string;
  icon: typeof Sparkles;
}

const journalEntries: JournalEntry[] = [
  {
    title: "Interactive Solar System",
    type: "visualization",
    description:
      "Explore the planets of our solar system with real orbital data and scale comparisons.",
    icon: Globe,
  },
  {
    title: "Deep Sky Gallery",
    type: "photo",
    description:
      "A curated collection of astrophotography showcasing nebulae, galaxies, and star clusters.",
    icon: ImageIcon,
  },
  {
    title: "3D Constellation Viewer",
    type: "visualization",
    description:
      "Navigate through famous constellations in an interactive 3D environment.",
    icon: Sparkles,
  },
  {
    title: "JWST Data Visualizations",
    type: "update",
    description:
      "Visual representations of recent James Webb Space Telescope observations and findings.",
    icon: Telescope,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function StellarJournalSection() {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-accent" />
            <span>Stellar Journal</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Interactive visualizations, astrophotography, and cosmic explorations.
            A space for sharing the beauty and wonder of the universe.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-4"
        >
          {journalEntries.map((entry, index) => {
            const Icon = entry.icon;
            return (
              <motion.article
                key={index}
                variants={itemVariants}
                className={`glass glass-hover rounded-2xl p-6 group cursor-pointer relative overflow-hidden ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Type badge */}
                  <span className="inline-block text-xs uppercase tracking-wider text-muted-foreground bg-muted/50 px-2 py-1 rounded-full mb-3">
                    {entry.type === "visualization" && "Interactive"}
                    {entry.type === "photo" && "Gallery"}
                    {entry.type === "update" && "Data Viz"}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {entry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {entry.description}
                  </p>

                  {/* Coming soon indicator */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" />
                    <span>Coming soon</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            More visualizations and content coming soon. Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
