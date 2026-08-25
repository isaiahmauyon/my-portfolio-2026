import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (driven by CSS variables for theming)
        bg: "var(--bg)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        line: "var(--line)",
        gray1: "var(--gray-1)",
        gray3: "var(--gray-3)",
        accent: "#f2c94c",
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typography scale from the design system
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.12px" }],
        "label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.13px" }],
        "caption-md": ["14px", { lineHeight: "19px", letterSpacing: "0.14px" }],
        "body-sm": ["15px", { lineHeight: "23px" }],
        "body-md": ["16px", { lineHeight: "24px" }],
        "display-xl": ["24px", { lineHeight: "26px" }],
      },
      maxWidth: {
        content: "1200px",
        column: "902px",
      },
    },
  },
  plugins: [],
};

export default config;
