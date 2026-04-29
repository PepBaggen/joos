"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
}

const publications: Publication[] = [
  {
    title:
      "The UNCOVER Survey: A First-look HST+JWST Catalog of Galaxy Redshifts and Stellar Population Properties Spanning 0.2 < z < 15",
    authors:
      "Wang, B., Leja, J., Labbé, I., Bezanson, R., Whitaker, K. E., Brammer, G., Furtak, L. J., **Baggen, J. F. W.**, Price, S. H., et al.",
    journal: "The Astrophysical Journal Supplement Series",
    year: "2024",
    abstract:
      "We present the first JWST+HST photometric catalog from the Ultradeep NIRSpec and NIRCam ObserVations before the Epoch of Reionization (UNCOVER) survey, covering ~45 arcmin² in the field of the massive galaxy cluster Abell 2744.",
  },
  {
    title:
      "RUBIES: Evolved Stellar Populations with Extended Formation Histories at z ~ 7-8 in Candidate Massive Galaxies Identified with JWST/NIRSpec",
    authors:
      "de Graaff, A., Setton, D. J., Brammer, G., Cutler, S. E., **Baggen, J. F. W.**, Labbé, I., van Dokkum, P., et al.",
    journal: "The Astrophysical Journal",
    year: "2024",
    abstract:
      "We present JWST/NIRSpec prism spectroscopy of massive galaxy candidates at z ~ 7-8, revealing their stellar populations and formation histories through detailed spectroscopic analysis.",
  },
  {
    title:
      "Massive Quiescent Galaxies at z ~ 3 Reveal Major Contribution from Progenitor Bias to Size Growth",
    authors:
      "**Baggen, J. F. W.**, van Dokkum, P., Brammer, G., Labbé, I., Marchesini, D., Muzzin, A., Williams, C. C., et al.",
    journal: "The Astrophysical Journal Letters",
    year: "2023",
    abstract:
      "We present the structural analysis of massive quiescent galaxies at z ~ 3, investigating the role of progenitor bias in driving the observed size evolution of the quiescent galaxy population.",
  },
  {
    title:
      "Quiescent Galaxies 1.5 Billion Years after the Big Bang and Their Progenitors",
    authors:
      "Carnall, A. C., McLure, R. J., Dunlop, J. S., McLeod, D. J., Wild, V., Cullen, F., Magee, D., **Baggen, J. F. W.**, et al.",
    journal: "Nature",
    year: "2023",
    abstract:
      "We report the discovery of quiescent galaxies at z > 4, demonstrating that massive galaxies can cease star formation within the first 1.5 billion years of cosmic history.",
  },
  {
    title:
      "Deep Spectroscopy of the Massive Cluster A2744 with JWST/NIRSpec: Early Universe Galaxy Populations",
    authors:
      "**Baggen, J. F. W.**, Bezanson, R., Leja, J., Wang, B., Whitaker, K. E., et al.",
    journal: "The Astrophysical Journal",
    year: "2023",
    abstract:
      "We present deep JWST/NIRSpec spectroscopy of galaxies behind the massive cluster Abell 2744, probing the earliest galaxy populations in the universe.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function PublicationsSection() {
  const formatAuthors = (authors: string) => {
    return authors.split("**").map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-accent font-semibold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

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
            <BookOpen className="w-8 h-8 text-accent" />
            <span>Publications</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Selected peer-reviewed publications in extragalactic astronomy and
            galaxy evolution. For a complete list of publications, please visit
            NASA/ADS.
          </p>

          {/* ADS Link Button */}
          <motion.a
            href="https://ui.adsabs.harvard.edu/search/p_=0&q=author%3A%22Baggen%2C%20Josephine%20F.%20W.%22&sort=date%20desc%2C%20bibcode%20desc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass glass-hover px-5 py-3 rounded-xl text-accent font-medium mb-12 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View all publications on NASA/ADS</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        {/* Publications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {publications.map((pub, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="glass glass-hover rounded-2xl p-6 group cursor-default"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full whitespace-nowrap">
                  {pub.year}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {formatAuthors(pub.authors)}
              </p>

              <p className="text-sm text-accent/80 italic mb-4">{pub.journal}</p>

              <details className="group/details">
                <summary className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors list-none flex items-center gap-2">
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    Show Abstract
                  </motion.span>
                  <span className="text-xs">▼</span>
                </summary>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 text-sm text-muted-foreground leading-relaxed font-serif border-l-2 border-accent/30 pl-4"
                >
                  {pub.abstract}
                </motion.p>
              </details>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
