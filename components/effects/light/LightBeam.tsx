"use client";

import { motion } from "framer-motion";
import animationsConfig from "@/config/animations.config";

interface LightBeamProps {
  version?: "v1" | "v2";
}

export default function LightBeam({ version = "v1" }: LightBeamProps) {
  if (version === "v2") {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Central divine light */}
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: animationsConfig.hero.lightPulseDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.04) 50%, transparent 100%)",
          filter: "blur(30px)",
        }}
      />
      {/* Secondary warm glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: animationsConfig.hero.lightPulseDuration * 1.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
