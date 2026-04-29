"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  description: string;
  link?: string;
  type: string;
}

const resources: Resource[] = [
  {
    title: "NASA/ADS Publication List",
    description:
      "Complete list of all publications on the NASA Astrophysics Data System.",
    link: "https://ui.adsabs.harvard.edu/search/p_=0&q=author%3A%22Baggen%2C%20Josephine%20F.%20W.%22&sort=date%20desc%2C%20bibcode%20desc",
    type: "Publications",
  },
  {
    title: "UNCOVER Survey",
    description:
      "Ultradeep NIRSpec and NIRCam ObserVations before the Epoch of Reionization - a JWST Treasury program.",
    link: "https://jwst-uncover.github.io/",
    type: "Collaboration",
  },
  {
    title: "RUBIES Survey",
    description:
      "Red Unknowns: Bright Infrared Extragalactic Survey - spectroscopic follow-up of massive galaxy candidates.",
    link: "#",
    type: "Collaboration",
  },
  {
    title: "Yale Astronomy",
    description:
      "Department of Astronomy at Yale University.",
    link: "https://astronomy.yale.edu/",
    type: "Institution",
  },
];

const usefulLinks = [
  { title: "arXiv Astro-ph", link: "https://arxiv.org/list/astro-ph/new" },
  { title: "JWST User Documentation", link: "https://jwst-docs.stsci.edu/" },
  { title: "STScI MAST Archive", link: "https://mast.stsci.edu/" },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function StellarJournalSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-normal mb-8 lowercase">resources</h2>
        </motion.div>

        {/* Main Resources */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-16"
        >
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="block group"
            >
              <div className="flex items-start gap-4 py-4 border-b border-border hover:border-primary/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    {resource.link && resource.link !== "#" && (
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">
                  {resource.type}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-medium text-primary mb-6">Useful Links</h3>
          <div className="flex flex-wrap gap-3">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm border border-border px-4 py-2 rounded hover:border-primary hover:text-primary transition-colors"
              >
                {link.title}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
