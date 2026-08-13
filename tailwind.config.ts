import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C0E",
        graphite: "#121417",
        steel: "#1A1D22",
        line: "rgba(255,255,255,0.10)",
        paper: "#F4F1EA",
        muted: "#A7A39A",
        amber: {
          DEFAULT: "#E8B923",
          bright: "#F3C94A",
          dim: "rgba(232,185,35,0.14)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1160px",
      },
      boxShadow: {
        glow: "0 18px 50px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
