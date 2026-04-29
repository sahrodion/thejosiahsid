import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: "#0d0805",
          900: "#1a0f0a",
          800: "#2a1a12",
          700: "#3d2518",
          600: "#52311f",
        },
        mahogany: {
          DEFAULT: "#6b2d1a",
          light: "#8b3d25",
          dark: "#4a1f10",
        },
        amber: {
          DEFAULT: "#c8853a",
          light: "#e09a50",
          muted: "#8c6a4f",
        },
        parchment: {
          DEFAULT: "#f0e6d3",
          muted: "#b8a898",
          dark: "#8c7a6a",
        },
        walnut: "#0d0805",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(200, 133, 58, 0.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
