import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base": "#0a0a0f",
        "card": "#111118",
        "hover": "#1a1a24",
        "accent": "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-dim": "rgb(var(--accent-dim-rgb) / <alpha-value>)",
        "text-primary": "#e2e8f0",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono-ui)", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
