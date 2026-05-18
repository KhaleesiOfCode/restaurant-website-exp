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
          50: "#fdf8f0",
          100: "#f9edd8",
          200: "#f3d8b0",
          300: "#eabb7e",
          400: "#e0984a",
          500: "#d4812f",
          600: "#c56d23",
          700: "#a4551f",
          800: "#83441f",
          900: "#6b391c",
          950: "#3a1c0d",
        },
        olive: {
          50: "#f6f7f1",
          100: "#e9ecde",
          200: "#d3d9bf",
          300: "#b3be97",
          400: "#93a173",
          500: "#758555",
          600: "#5b6941",
          700: "#475134",
          800: "#3a422c",
          900: "#323927",
          950: "#1a1e13",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
