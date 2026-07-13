"use client";

import { motion } from "framer-motion";
import { Product } from "@/config/products.config";
import { formatProductStatus } from "@/lib/utils";
import { scaleIn } from "@/lib/animations/variants";

interface ProductCardProps {
  product: Product;
  index: number;
}

const iconMap: Record<string, JSX.Element> = {
  flame: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  leaf: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 3C10 3 6 5 6 10c0 3 1.5 5.5 3.5 7M12 3c2 0 6 2 6 7 0 3-1.5 5.5-3.5 7M9.5 17C9.5 17 9 19.5 12 21c3 0 2.5-4 2.5-4" />
    </svg>
  ),
  star: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

const statusColors: Record<string, string> = {
  live: "text-green-400 border-green-400/30 bg-green-400/5",
  beta: "text-brand-primary border-brand-primary/30 bg-brand-primary/5",
  "coming-soon": "text-ink-muted border-border-default bg-bg-elevated",
};

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="group relative"
    >
      <div className="card-base p-8 h-full flex flex-col relative overflow-hidden cursor-default">
        {/* Hover background glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Top row: Icon + Status */}
        <div className="flex items-start justify-between mb-8">
          <div
            className="w-12 h-12 flex items-center justify-center border border-border-default text-brand-primary group-hover:border-brand-primary/50 group-hover:bg-brand-primary/5 transition-all duration-300"
          >
            {iconMap[product.icon] ?? iconMap.star}
          </div>
          <span
            className={`text-label-sm px-3 py-1 border tracking-widest uppercase ${statusColors[product.status]}`}
          >
            {formatProductStatus(product.status)}
          </span>
        </div>

        {/* Category */}
        <p className="text-label-sm text-ink-muted uppercase tracking-widest mb-3">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-display text-display-md text-ink-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-body-md text-brand-primary/70 mb-4 italic font-display">
          {product.tagline}
        </p>

        {/* Divider */}
        <div className="w-8 h-px bg-border-strong mb-6 group-hover:w-16 group-hover:bg-brand-primary transition-all duration-500" />

        {/* Description */}
        <p className="text-body-md text-ink-secondary leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-700" />
      </div>
    </motion.div>
  );
}
