"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import siteConfig from "@/config/site.config";
import navigationConfig from "@/config/navigation.config";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-base border-t border-border-subtle overflow-hidden">
      {/* Top Gold Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-40" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/3 rounded-full blur-[100px]" />
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="section-container py-20 relative z-10"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M16 2 L16 8 M16 24 L16 30 M16 8 C16 8 10 12 10 16 C10 20 16 24 16 24 C16 24 22 20 22 16 C22 12 16 8 16 8Z"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="16" cy="16" r="2.5" fill="#C9A84C" />
                </svg>
              </div>
              <span className="font-display text-2xl font-medium text-ink-primary">
                {siteConfig.company.shortName}
              </span>
            </div>
            <p className="text-body-md text-ink-secondary max-w-sm leading-relaxed mb-8">
              {siteConfig.company.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-ink-muted hover:text-brand-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-ink-muted hover:text-brand-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-ink-muted hover:text-brand-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-label-lg text-brand-primary uppercase tracking-widest mb-6 font-body">
              Navigate
            </h3>
            <ul className="flex flex-col gap-4">
              {navigationConfig.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-md text-ink-secondary hover:text-ink-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-label-lg text-brand-primary uppercase tracking-widest mb-6 font-body">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="text-body-md text-ink-secondary hover:text-brand-primary transition-colors duration-300"
                >
                  {siteConfig.company.email}
                </a>
              </li>
              <li>
                <span className="text-body-md text-ink-secondary">
                  {siteConfig.company.address}
                </span>
              </li>
              <li>
                <span className="text-body-md text-ink-secondary">
                  Est. {siteConfig.company.founded}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-subtle mb-8" />

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-label-sm text-ink-muted tracking-wide">
            &copy; {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>
          <p className="text-label-sm text-ink-muted tracking-widest uppercase">
            {siteConfig.company.tagline}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
