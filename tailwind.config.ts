import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        sans: ["var(--font-opensans)"],
        serif: ["var(--font-lusitana)"],
        mono: ["var(--font-roboto-mono)"],
        cursive: ["var(--font-sofia)"],
      },
      screens: {
        xs: "480px",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
