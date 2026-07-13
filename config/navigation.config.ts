const navigationConfig = {
  links: [
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Products", href: "#products" },
    { label: "Vision", href: "#vision" },
  ],
  cta: {
    label: "Get in Touch",
    href: "mailto:contact@angirash.com",
  },
  logo: {
    text: "Angirash",
    showIcon: true,
    iconType: "flame",
  },
} as const;

export default navigationConfig;
