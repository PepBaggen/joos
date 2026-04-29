"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function CVSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-normal mb-8 lowercase">curriculum vitae</h2>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <button
            disabled
            className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded text-sm text-muted-foreground cursor-not-allowed opacity-60"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF) - Coming Soon</span>
          </button>
        </motion.div>

        {/* CV Content */}
        <div className="space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-primary mb-6">Education</h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:gap-8">
                <span className="text-sm text-muted-foreground md:min-w-[120px]">2020 - Present</span>
                <div>
                  <p className="font-medium">Ph.D. in Astronomy</p>
                  <p className="text-muted-foreground text-sm">Yale University, New Haven, CT</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Advisor: Prof. Pieter van Dokkum
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-8">
                <span className="text-sm text-muted-foreground md:min-w-[120px]">2016 - 2020</span>
                <div>
                  <p className="font-medium">Bachelor of Science</p>
                  <p className="text-muted-foreground text-sm">Physics and Astronomy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-medium text-primary mb-6">Research Experience</h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:gap-8">
                <span className="text-sm text-muted-foreground md:min-w-[120px]">2020 - Present</span>
                <div>
                  <p className="font-medium">Graduate Research Assistant</p>
                  <p className="text-muted-foreground text-sm">Yale University</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Studying the formation and evolution of massive galaxies using JWST 
                    and HST observations. Member of UNCOVER and RUBIES collaborations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-primary mb-6">Collaborations</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">-</span>
                <span>UNCOVER (Ultradeep NIRSpec and NIRCam ObserVations before the Epoch of Reionization)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">-</span>
                <span>RUBIES (Red Unknowns: Bright Infrared Extragalactic Survey)</span>
              </li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-medium text-primary mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "JWST Data Analysis", "Photometry", "Spectroscopy", "SED Fitting", "HST", "Scientific Writing"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs border border-border px-3 py-1.5 rounded-full text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
