import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E0E7FF',
          500: '#1E3A8A',
          700: '#1E3A8A',
        },
        secondary: {
          100: '#CFFAFE',
          500: '#06B6D4',
          700: '#0E7490',
        },
        accent: {
          100: '#FFEDD5',
          500: '#F97316',
          700: '#C2410C',
        },
        background: {
          DEFAULT: '#F3F4F6',
        },
        text: {
          DEFAULT: '#374151',
        },
        success: {
          DEFAULT: '#10B981',
        },
        warning: {
          DEFAULT: '#FBBF24',
        },
        error: {
          DEFAULT: '#EF4444',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
