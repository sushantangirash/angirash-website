export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  href: string;
  icon: string;
}

const productsConfig: Product[] = [
  {
    id: "product-001",
    name: "Angirash Learn",
    category: "Education",
    tagline: "Ancient Knowledge. Modern Delivery.",
    description:
      "A premium learning platform that teaches the depth of Indian philosophy, science and culture using modern pedagogical techniques.",
    status: "coming-soon",
    href: "#",
    icon: "flame",
  },
  {
    id: "product-002",
    name: "Angirash Connect",
    category: "Community",
    tagline: "Conversations That Matter.",
    description:
      "A curated community platform for deep thinkers, builders and creators who want to contribute to a better civilization.",
    status: "coming-soon",
    href: "#",
    icon: "network",
  },
  {
    id: "product-003",
    name: "Angirash Health",
    category: "Wellness",
    tagline: "Wellness Rooted in Ayurveda.",
    description:
      "A modern health and wellness platform built on the foundation of Ayurvedic principles, adapted for contemporary lifestyles.",
    status: "coming-soon",
    href: "#",
    icon: "leaf",
  },
];

export default productsConfig;
