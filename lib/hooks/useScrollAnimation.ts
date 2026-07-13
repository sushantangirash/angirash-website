"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import animationsConfig from "@/config/animations.config";

export function useScrollAnimation(threshold?: number) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: animationsConfig.scroll.rootMargin as `${number}px`,
    amount: threshold ?? animationsConfig.scroll.threshold,
  });

  return { ref, isInView };
}
