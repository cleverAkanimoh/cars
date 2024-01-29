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
      colors: {
        grayLine: "rgb(219, 213, 209)",
        orange: { 500: "#ff8c38" },
      },
      boxShadow: {
        xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
