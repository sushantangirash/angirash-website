"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site.config";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import {
  fadeInUp,
  staggerContainer,
  cinematicReveal,
  lineReveal,
  scaleIn,
} from "@/lib/animations/variants";

export default function Mission() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const pillarsRef = useScrollAnimation(0.1);

  return (
    <section
      id="mission"
      className="relative bg-bg-surface py-section overflow-hidden"
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="section-container relative z-10"
      >
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.div variants={lineReveal} className="w-8 h-px bg-brand-primary" />
            <span className="section-label">{siteConfig.mission.sectionLabel}</span>
            <motion.div
              variants={lineReveal}
              className="w-8 h-px bg-brand-primary"
              style={{ originX: 1 }}
            />
          </motion.div>

          <motion.h2
            variants={cinematicReveal}
            className="section-headline mb-8"
          >
            {siteConfig.mission.headline}
          </motion.h2>

          <motion.div
            variants={lineReveal}
            className="w-16 h-px bg-brand-primary mx-auto mb-10"
          />

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-ink-secondary leading-relaxed italic font-display text-xl"
          >
            &ldquo;{siteConfig.mission.statement}&rdquo;
          </motion.p>
        </div>

        {/* Pillars */}
        <motion.div
          ref={pillarsRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={pillarsRef.isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {siteConfig.mission.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={scaleIn}
              className="relative group"
            >
              <div className="card-base p-8 h-full relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
                  }}
                />

                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-display text-6xl font-light leading-none select-none"
                    style={{ color: "rgba(201,168,76,0.15)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-6 h-px bg-brand-primary mt-4" />
                </div>

                {/* Title */}
                <h3 className="font-display text-display-md text-ink-primary mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-body-md text-ink-secondary leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/40 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
    </section>
  );
}
