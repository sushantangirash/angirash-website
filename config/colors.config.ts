const colorsConfig = {
  brand: {
    primary: "#C9A84C",
    primaryLight: "#E2C97E",
    primaryDark: "#9E7D2F",
    accent: "#D4AF37",
  },
  background: {
    base: "#080808",
    surface: "#0F0F0F",
    elevated: "#161616",
    overlay: "#1E1E1E",
  },
  text: {
    primary: "#F5F0E8",
    secondary: "#B8B0A0",
    muted: "#6B6560",
    inverse: "#080808",
  },
  border: {
    subtle: "#1E1E1E",
    default: "#2A2A2A",
    strong: "#3A3A3A",
  },
  effect: {
    fog: "#C9A84C",
    fire: "#E87C2A",
    fireAccent: "#F5A623",
    glow: "#C9A84C",
    water: "#1A3A4A",
  },
  semantic: {
    success: "#4A7C59",
    error: "#8B3A3A",
    warning: "#C9A84C",
  },
} as const;

export type ColorsConfig = typeof colorsConfig;
export default colorsConfig;
