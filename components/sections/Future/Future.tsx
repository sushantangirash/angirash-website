"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site.config";
import navigationConfig from "@/config/navigation.config";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import FireEffect from "@/components/effects/fire/FireEffect";
import {
  fadeInUp,
  staggerContainer,
  cinematicReveal,
  lineReveal,
} from "@/lib/animations/variants";

export default function Future() {
  const { ref, isInView } = useScrollAnimation(0.15);

  return (
    <section
      id="future"
      className="relative bg-bg-base py-section overflow-hidden"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)",
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Fire above label */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <FireEffect version="v1" size="lg" />
          </motion.div>

          {/* Label */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <motion.div variants={lineReveal} className="w-8 h-px bg-brand-primary" />
            <span className="section-label">{siteConfig.future.sectionLabel}</span>
            <motion.div
              variants={lineReveal}
              className="w-8 h-px bg-brand-primary"
              style={{ originX: 1 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={cinematicReveal}
            className="section-headline mb-8"
          >
            {siteConfig.future.headline}
          </motion.h2>

          {/* Gold divider */}
          <motion.div
            variants={lineReveal}
            className="w-16 h-px bg-brand-primary mx-auto mb-10"
          />

          {/* Statement */}
          <motion.p
            variants={fadeInUp}
            className="section-body max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            {siteConfig.future.statement}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="btn-primary"
            >
              {navigationConfig.cta.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-label-sm text-ink-muted tracking-widest uppercase mt-16"
          >
            {siteConfig.company.tagline}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
