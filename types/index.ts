export interface SectionProps {
  id?: string;
  className?: string;
}

export interface AnimationVariant {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export type ProductStatus = "live" | "beta" | "coming-soon";

export interface ProductCard {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  href: string;
  icon: string;
}

export type IconType = "flame" | "network" | "leaf" | "star" | "globe" | "shield";

export interface EffectConfig {
  enabled: boolean;
  intensity: number;
  version: "v1" | "v2";
}
