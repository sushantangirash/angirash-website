"use client";

import { motion } from "framer-motion";
import animationsConfig from "@/config/animations.config";

interface FireEffectProps {
  version?: "v1" | "v2";
  size?: "sm" | "md" | "lg";
}

export default function FireEffect({ version = "v1", size = "md" }: FireEffectProps) {
  if (version === "v2") {
    return null;
  }

  const sizeMap = {
    sm: { width: "w-6", height: "h-10", blur: "blur-[2px]" },
    md: { width: "w-10", height: "h-16", blur: "blur-[3px]" },
    lg: { width: "w-16", height: "h-24", blur: "blur-[4px]" },
  };

  const s = sizeMap[size];

  return (
    <div className={`relative ${s.width} ${s.height} flex items-end justify-center`}>
      {/* Outer flame */}
      <motion.div
        animate={{
          scaleY: [1, 1.08, 0.96, 1.04, 1],
          scaleX: [1, 0.96, 1.02, 0.98, 1],
          opacity: [0.8, 1, 0.85, 1, 0.8],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${s.width} ${s.height} ${s.blur}`}
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(232,124,42,0.9) 0%, rgba(245,166,35,0.7) 40%, rgba(201,168,76,0.3) 70%, transparent 100%)",
          borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
          transformOrigin: "bottom center",
        }}
      />
      {/* Inner core */}
      <motion.div
        animate={{
          scaleY: [1, 1.12, 0.92, 1.06, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1,
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(255,220,100,0.95) 0%, rgba(245,166,35,0.8) 50%, transparent 100%)",
          borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
          transformOrigin: "bottom center",
          filter: "blur(1px)",
        }}
      />
      {/* Glow base */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-4"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(201,168,76,0.4) 0%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
