"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site.config";
import productsConfig from "@/config/products.config";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import ProductCard from "@/components/ui/ProductCard";
import {
  fadeInUp,
  staggerContainer,
  cinematicReveal,
  lineReveal,
} from "@/lib/animations/variants";

export default function Products() {
  const { ref, isInView } = useScrollAnimation(0.1);
  const gridRef = useScrollAnimation(0.05);

  return (
    <section
      id="products"
      className="relative bg-bg-base py-section overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"
        />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[600px] -translate-y-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="section-container relative z-10 mb-16"
      >
        <div className="max-w-3xl">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <motion.div variants={lineReveal} className="w-8 h-px bg-brand-primary" />
            <span className="section-label">Our Products</span>
          </motion.div>

          <motion.h2 variants={cinematicReveal} className="section-headline mb-6">
            What We Are Building
          </motion.h2>

          <motion.div variants={lineReveal} className="divider-gold mb-8" />

          <motion.p variants={fadeInUp} className="section-body max-w-prose">
            Each product we build is a complete world. Thoughtfully designed, deeply
            considered and built to last. These are not features — they are answers
            to questions that matter.
          </motion.p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        ref={gridRef.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={gridRef.isInView ? "visible" : "hidden"}
        className="section-container relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsConfig.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeInUp}
          className="text-label-sm text-ink-muted text-center mt-16 tracking-widest uppercase"
        >
          More products in development — the constellation is growing
        </motion.p>
      </motion.div>
    </section>
  );
}
