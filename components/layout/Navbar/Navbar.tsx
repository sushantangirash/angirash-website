"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import navigationConfig from "@/config/navigation.config";
import siteConfig from "@/config/site.config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-cinematic",
          scrolled
            ? "bg-bg-base/95 backdrop-blur-md border-b border-border-subtle"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label={siteConfig.company.name}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
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
                    className="transition-all duration-300 group-hover:stroke-brand-light"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="2.5"
                    fill="#C9A84C"
                    className="transition-all duration-300 group-hover:fill-brand-light"
                  />
                </svg>
              </div>
              <span className="font-display text-xl font-medium text-ink-primary tracking-wide group-hover:text-brand-primary transition-colors duration-300">
                {navigationConfig.logo.text}
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-10">
              {navigationConfig.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative text-label-lg font-body tracking-widest uppercase transition-colors duration-300",
                      "text-ink-secondary hover:text-ink-primary",
                      "after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-primary",
                      "after:transition-all after:duration-300 hover:after:w-full",
                      activeSection === link.href && "text-brand-primary after:w-full"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href={navigationConfig.cta.href}
                className="btn-secondary text-xs py-3 px-6"
              >
                {navigationConfig.cta.label}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={cn(
                  "block w-6 h-px bg-ink-primary transition-all duration-300",
                  menuOpen && "rotate-45 translate-y-2.5"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-ink-primary transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-4 h-px bg-ink-primary transition-all duration-300 group-hover:w-6",
                  menuOpen && "w-6 -rotate-45 -translate-y-2.5"
                )}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg-base flex flex-col justify-center items-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {navigationConfig.links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="font-display text-4xl text-ink-primary hover:text-brand-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigationConfig.links.length * 0.08, duration: 0.4 }}
              >
                <a
                  href={navigationConfig.cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary mt-4"
                >
                  {navigationConfig.cta.label}
                </a>
              </motion.li>
            </ul>

            <div className="absolute bottom-10 text-label-sm text-ink-muted tracking-widest uppercase">
              {siteConfig.company.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
