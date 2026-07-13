"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import siteConfig from "@/config/site.config";
import animationsConfig from "@/config/animations.config";
import FogLayer from "@/components/effects/fog/FogLayer";
import LightBeam from "@/components/effects/light/LightBeam";
import FireEffect from "@/components/effects/fire/FireEffect";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  cinematicReveal,
} from "@/lib/animations/variants";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * animationsConfig.hero.cameraMotionIntensity * 100;
      const y = (clientY / innerHeight - 0.5) * animationsConfig.hero.cameraMotionIntensity * 100;
      hero.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-base"
    >
      {/* Background Image Layer - Replace this div with Three.js canvas in V2 */}
      <div
        ref={heroRef}
        className="absolute inset-[-2%] transition-transform duration-300 ease-out"
        style={{ willChange: "transform" }}
      >
        {/* Hero artwork - replace src with your actual image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 40%, #161616 0%, #0F0F0F 40%, #080808 100%)",
          }}
        />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)",
          }}
        />
        {/* Horizontal lines - subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.3) 80px, rgba(201,168,76,0.3) 81px)",
          }}
        />
      </div>

      {/* Effects Layer */}
      <LightBeam version="v1" />
      <FogLayer version="v1" />

      {/* Content */}
      <div className="relative z-20 section-container w-full py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Fire + Label Row */}
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-4 mb-10"
          >
            <FireEffect version="v1" size="sm" />
            <span className="section-label">
              {siteConfig.company.name}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={cinematicReveal}
            className="font-display text-display-2xl text-ink-primary leading-tight mb-4"
          >
            {siteConfig.hero.headline}
          </motion.h1>

          <motion.h1
            variants={cinematicReveal}
            className="font-display text-display-2xl leading-tight mb-10"
          >
            <span className="text-gradient-gold">
              {siteConfig.hero.headlineAccent}
            </span>
          </motion.h1>

          {/* Gold Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="divider-gold mb-10"
          />

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-ink-secondary max-w-prose mb-14 leading-relaxed"
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={siteConfig.hero.cta.primary.href}
              className="btn-primary"
            >
              {siteConfig.hero.cta.primary.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={siteConfig.hero.cta.secondary.href}
              className="btn-secondary"
            >
              {siteConfig.hero.cta.secondary.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #080808 0%, transparent 100%)",
        }}
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-label-sm text-ink-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-brand-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
