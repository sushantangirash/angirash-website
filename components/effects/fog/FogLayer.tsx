"use client";

import { motion } from "framer-motion";
import animationsConfig from "@/config/animations.config";

interface FogLayerProps {
  version?: "v1" | "v2";
}

export default function FogLayer({ version = "v1" }: FogLayerProps) {
  if (version === "v2") {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Fog Layer 1 */}
      <motion.div
        animate={{
          x: ["-2%", "2%"],
          y: [0, -8],
          opacity: [0.10, animationsConfig.hero.fogOpacity],
        }}
        transition={{
          duration: animationsConfig.hero.fogAnimationDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 right-0 h-[50%]"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 50%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />
      {/* Fog Layer 2 */}
      <motion.div
        animate={{
          x: ["2%", "-2%"],
          y: [0, -12],
          opacity: [0.06, 0.14],
        }}
        transition={{
          duration: animationsConfig.hero.fogAnimationDuration * 1.3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-0 left-[-10%] right-[-10%] h-[40%]"
        style={{
          background:
            "radial-gradient(ellipse 100% 50% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Fog Layer 3 - Wide atmospheric */}
      <motion.div
        animate={{
          opacity: [0.04, 0.10],
        }}
        transition={{
          duration: animationsConfig.hero.fogAnimationDuration * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-0 left-0 right-0 h-[30%]"
        style={{
          background:
            "linear-gradient(to top, rgba(201,168,76,0.08) 0%, transparent 100%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
