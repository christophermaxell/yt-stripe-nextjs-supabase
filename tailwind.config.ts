import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0070F3',
          dark: '#0051F3',
        },
        secondary: {
          DEFAULT: '#7928CA',
          dark: '#6928CA',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1A1B26',
        },
        text: {
          DEFAULT: '#2F3E46',
          dark: '#F8F9FA',
        },
        neutral: {
          DEFAULT: '#F8F9FA',
          dark: '#2F3E46',
          darker: '#1A1B26',
        },
        danger: '#FF0000',
      },
      boxShadow: {
        subtle: '0 2px 4px rgba(0,0,0,0.1)',
        hover: '0 4px 8px rgba(0,0,0,0.1)',
      },
      scale: {
        '102': '1.02',
        '98': '0.98',
      },
    },
  },
  plugins: [],
}

export default config;
