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

const newsItems = [
  {
    date: "Aug 2024",
    text: "UNCOVER Survey catalog published in ApJS",
    link: "#",
  },
  {
    date: "Jun 2024",
    text: "RUBIES paper on evolved stellar populations accepted",
    link: "#",
  },
  {
    date: "Mar 2023",
    text: "Research on massive quiescent galaxies published in ApJL",
    link: "#",
  },
];

export function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-balance">
            <span className="text-primary">Josephine</span> F. W. Baggen
          </h1>
          <p className="text-lg text-muted-foreground">
            PhD Candidate in Astronomy at Yale University
          </p>
        </motion.div>

        {/* Main content - two columns on larger screens */}
        <div className="grid lg:grid-cols-[1fr,160px] gap-8 lg:gap-10">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground leading-relaxed">
                Welcome! I am a PhD candidate in the{" "}
                <span className="font-semibold">Department of Astronomy</span> at{" "}
                <span className="font-semibold">Yale University</span>. My research 
                focuses on understanding galaxy formation and evolution across cosmic 
                time, with particular emphasis on massive galaxies in the early universe.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I utilize data from cutting-edge facilities including the{" "}
                <span className="italic">James Webb Space Telescope</span> (JWST) and 
                the Hubble Space Telescope to study the stellar populations, structures, 
                and formation histories of galaxies. I am a member of several major 
                collaborations including{" "}
                <a 
                  href="#" 
                  className="text-primary hover:underline"
                >
                  UNCOVER
                </a>{" "}
                and{" "}
                <a 
                  href="#" 
                  className="text-primary hover:underline"
                >
                  RUBIES
                </a>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My recent work has explored the properties of quiescent galaxies at 
                high redshift, investigating how progenitor bias contributes to the 
                observed size evolution of the massive galaxy population.
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              This page serves as a hub for my research, publications, and academic 
              activities. Feel free to explore the links below to learn more.
            </p>

            {/* Connect button */}
            <motion.a
              href="https://www.linkedin.com/in/josephine-baggen-713994131/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              whileHover={{ x: 3 }}
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </motion.div>

          {/* Right column - Photo and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Profile Photo */}
            <div className="w-full aspect-square rounded-full overflow-hidden border border-border">
              <img
                src="/images/profile.jpeg"
                alt="Josephine F. W. Baggen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact info */}
            <div className="font-mono text-sm text-muted-foreground space-y-1">
              <p>Yale University</p>
              <p>Department of Astronomy</p>
              <p>New Haven, CT</p>
            </div>
          </motion.div>
        </div>

        {/* News Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-normal mb-6 lowercase">news</h2>
          <div className="space-y-3">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-6"
              >
                <span className="text-sm text-muted-foreground font-medium whitespace-nowrap min-w-[90px]">
                  {item.date}
                </span>
                <a
                  href={item.link}
                  className="text-primary hover:underline text-sm leading-relaxed"
                >
                  {item.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
