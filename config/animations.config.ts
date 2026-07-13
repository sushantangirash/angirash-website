const animationsConfig = {
  duration: {
    instant: 0.1,
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    cinematic: 1.8,
  },
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.3,
    long: 0.6,
    stagger: 0.15,
  },
  ease: {
    smooth: [0.25, 0.1, 0.25, 1],
    enter: [0.0, 0.0, 0.2, 1],
    exit: [0.4, 0.0, 1, 1],
    spring: { type: "spring", stiffness: 80, damping: 20 },
    cinematic: [0.76, 0, 0.24, 1],
  },
  scroll: {
    threshold: 0.15,
    rootMargin: "-50px",
  },
  hero: {
    fogOpacity: 0.18,
    fogAnimationDuration: 8,
    lightPulseDuration: 4,
    cameraMotionIntensity: 0.015,
    waterRippleDuration: 6,
    fireFlickerDuration: 0.12,
  },
  reduced: {
    enabled: true,
    respectUserPreference: true,
  },
} as const;

export type AnimationsConfig = typeof animationsConfig;
export default animationsConfig;
