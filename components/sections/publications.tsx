"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  pdfLink?: string;
}

const publications: Publication[] = [
  {
    title:
      "The UNCOVER Survey: A First-look HST+JWST Catalog of Galaxy Redshifts and Stellar Population Properties Spanning 0.2 < z < 15",
    authors:
      "Wang, B., Leja, J., Labbé, I., Bezanson, R., Whitaker, K. E., Brammer, G., Furtak, L. J., **Baggen, J. F. W.**, Price, S. H., et al.",
    journal: "ApJS",
    year: "2024",
    abstract:
      "We present the first JWST+HST photometric catalog from the Ultradeep NIRSpec and NIRCam ObserVations before the Epoch of Reionization (UNCOVER) survey, covering ~45 arcmin² in the field of the massive galaxy cluster Abell 2744.",
    pdfLink: "#",
  },
  {
    title:
      "RUBIES: Evolved Stellar Populations with Extended Formation Histories at z ~ 7-8 in Candidate Massive Galaxies Identified with JWST/NIRSpec",
    authors:
      "de Graaff, A., Setton, D. J., Brammer, G., Cutler, S. E., **Baggen, J. F. W.**, Labbé, I., van Dokkum, P., et al.",
    journal: "ApJ",
    year: "2024",
    abstract:
      "We present JWST/NIRSpec prism spectroscopy of massive galaxy candidates at z ~ 7-8, revealing their stellar populations and formation histories through detailed spectroscopic analysis.",
    pdfLink: "#",
  },
  {
    title:
      "Massive Quiescent Galaxies at z ~ 3 Reveal Major Contribution from Progenitor Bias to Size Growth",
    authors:
      "**Baggen, J. F. W.**, van Dokkum, P., Brammer, G., Labbé, I., Marchesini, D., Muzzin, A., Williams, C. C., et al.",
    journal: "ApJL",
    year: "2023",
    abstract:
      "We present the structural analysis of massive quiescent galaxies at z ~ 3, investigating the role of progenitor bias in driving the observed size evolution of the quiescent galaxy population.",
    pdfLink: "#",
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
    pdfLink: "#",
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
          <span key={index} className="text-primary font-medium">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-normal mb-8 lowercase">selected publications</h2>

          {/* ADS Link */}
          <motion.a
            href="https://ui.adsabs.harvard.edu/search/p_=0&q=author%3A%22Baggen%2C%20Josephine%20F.%20W.%22&sort=date%20desc%2C%20bibcode%20desc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-10"
          >
            <span>View all publications on NASA/ADS</span>
            <ExternalLink className="w-3 h-3" />
          </motion.a>
        </motion.div>

        {/* Publications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {publications.map((pub, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="flex gap-4 md:gap-6 group"
            >
              {/* Thumbnail placeholder */}
              <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-muted/30 rounded border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-xs text-muted-foreground/50 text-center p-2">
                    {pub.journal}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-medium leading-snug mb-2 text-foreground group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground mb-1 leading-relaxed">
                  {formatAuthors(pub.authors)}
                </p>

                <p className="text-xs text-muted-foreground mb-3">
                  <span className="italic">{pub.journal}</span>, {pub.year}
                </p>

                {pub.pdfLink && (
                  <a
                    href={pub.pdfLink}
                    className="inline-block text-xs border border-border px-3 py-1 rounded hover:border-primary hover:text-primary transition-colors"
                  >
                    PDF
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
