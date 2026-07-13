"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site.config";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import {
  fadeInUp,
  staggerContainer,
  cinematicReveal,
  lineReveal,
  fadeIn,
} from "@/lib/animations/variants";

export default function Vision() {
  const { ref, isInView } = useScrollAnimation(0.15);

  return (
    <section
      id="vision"
      className="relative bg-bg-surface py-section overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      {/* Large background Om symbol */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.span
          animate={{ opacity: [0.02, 0.05, 0.02], scale: [1, 1.02, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="font-display select-none"
          style={{ fontSize: "clamp(300px, 40vw, 600px)", color: "#C9A84C" }}
        >
          ॐ
        </motion.span>
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="section-container relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <motion.div variants={lineReveal} className="w-8 h-px bg-brand-primary" />
            <span className="section-label">{siteConfig.vision.sectionLabel}</span>
            <motion.div
              variants={lineReveal}
              className="w-8 h-px bg-brand-primary"
              style={{ originX: 1 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={cinematicReveal}
            className="section-headline mb-10"
          >
            {siteConfig.vision.headline}
          </motion.h2>

          {/* Gold divider */}
          <motion.div
            variants={lineReveal}
            className="w-16 h-px bg-brand-primary mx-auto mb-12"
          />

          {/* Vision Statement */}
          <motion.blockquote
            variants={fadeIn}
            className="relative"
          >
            <span
              className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-8xl text-brand-primary/10 leading-none select-none"
            >
              &ldquo;
            </span>
            <p className="font-display text-display-md text-ink-primary leading-relaxed italic relative z-10">
              {siteConfig.vision.statement}
            </p>
            <span
              className="absolute -bottom-12 right-1/4 font-display text-8xl text-brand-primary/10 leading-none select-none"
            >
              &rdquo;
            </span>
          </motion.blockquote>

          {/* Decorative elements */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6 mt-20"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-brand-primary/40" />
            <div className="w-2 h-2 rounded-full bg-brand-primary/60" />
            <div className="w-2 h-2 rounded-full bg-brand-primary" />
            <div className="w-2 h-2 rounded-full bg-brand-primary/60" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-brand-primary/40" />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
    </section>
  );
}
