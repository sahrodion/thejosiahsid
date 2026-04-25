import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          950: "#000000",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
        },
        white: {
          DEFAULT: "#ffffff",
          off: "#f0f0f0",
          muted: "#a0a0a0",
        },
        accent: {
          DEFAULT: "#ffffff",
          muted: "#666666",
          subtle: "#333333",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
