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
        brand: {
          navy: "#0C3C60",
          cyan: "#31C1D7",
          emerald: "#00B894",
          amber: "#F39C12",
          coral: "#FF4757",
        },
        surface: {
          light: "#F8FAFC",
          muted: "#F1F5F9",
          border: "#E2E8F0",
          borderMuted: "#CBD5E1",
        },
        slate: {
          primary: "#0F172A",
          body: "#334155",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
