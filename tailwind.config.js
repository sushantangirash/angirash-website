module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C9A84C",
          light: "#E2C97E",
          dark: "#9E7D2F",
          accent: "#D4AF37",
        },
        bg: {
          base: "#080808",
          surface: "#0F0F0F",
          elevated: "#161616",
          overlay: "#1E1E1E",
        },
        ink: {
          primary: "#F5F0E8",
          secondary: "#B8B0A0",
          muted: "#6B6560",
        },
        border: {
          subtle: "#1E1E1E",
          default: "#2A2A2A",
          strong: "#3A3A3A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(1rem, 1.5vw, 1.25rem)", { lineHeight: "1.7" }],
        "body-md": ["clamp(0.9rem, 1.2vw, 1.1rem)", { lineHeight: "1.7" }],
        "label-lg": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        "label-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 10rem)",
        "section-sm": "clamp(3rem, 6vw, 6rem)",
      },
      maxWidth: {
        site: "1400px",
        prose: "720px",
        narrow: "560px",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.76, 0, 0.24, 1)",
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
