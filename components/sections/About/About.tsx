"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site.config";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  lineReveal,
} from "@/lib/animations/variants";

export default function About() {
  const { ref, isInView } = useScrollAnimation(0.15);

  return (
    <section
      id="about"
      className="relative bg-bg-base py-section overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column */}
          <div>
            {/* Section Label */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <motion.div
                variants={lineReveal}
                className="w-8 h-px bg-brand-primary"
              />
              <span className="section-label">
                {siteConfig.about.sectionLabel}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInLeft}
              className="section-headline mb-8"
            >
              {siteConfig.about.headline}
            </motion.h2>

            {/* Gold Divider */}
            <motion.div variants={lineReveal} className="divider-gold mb-10" />

            {/* Body Paragraphs */}
            <div className="flex flex-col gap-6">
              {siteConfig.about.body.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  className="section-body"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right Column — Visual Element */}
          <motion.div
            variants={fadeInRight}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative geometric element */}
            <div className="relative w-80 h-80">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-border-subtle"
              />
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-brand-primary/20"
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-brand-primary/40"
              />
              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-4 h-4 rounded-full bg-brand-primary"
                  style={{
                    boxShadow: "0 0 30px rgba(201,168,76,0.6), 0 0 60px rgba(201,168,76,0.3)",
                  }}
                />
              </div>
              {/* Tick marks on outer ring */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <div
                  key={angle}
                  className="absolute inset-0 flex items-start justify-center"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="w-px h-3 bg-brand-primary/40 mt-1" />
                </div>
              ))}
              {/* Sanskrit-inspired text */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span
                  className="font-display text-6xl text-brand-primary/20 select-none"
                  style={{ marginTop: "-8px" }}
                >
                  ॐ
                </span>
              </motion.div>
            </div>

            {/* Founded Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-0 right-0 border border-border-default bg-bg-surface px-6 py-4"
            >
              <p className="text-label-sm text-ink-muted uppercase tracking-widest mb-1">
                Established
              </p>
              <p className="font-display text-3xl text-brand-primary">
                {siteConfig.company.founded}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
