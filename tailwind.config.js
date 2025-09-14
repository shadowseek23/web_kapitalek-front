import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        stroke: "#616161",
      },
      letterSpacing: {
        'kapitalek': '0.13em',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    "themes": {
      "light": {
      },
      "dark": {
      }
    },
    "layout": {
      "disabledOpacity": "0.2",
      "radius": {
        "small": "0px",
        "medium": "0px",
        "large": "0px",
      },
      "borderWidth": {
        "small": "1px",
        "medium": "1px",
        "large": "1px",
      },
    }
  })],
};

module.exports = config;