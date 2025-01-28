/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#D4AF37',
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
  
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#F5F5F5", 
          2: "#E0E0E0",
          3: "#BDBDBD",
          4: "#757575",
          5: "#424242",
          6: "#212121",  
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
        display: ['"Playfair Display"', 'serif'],
        serif: ['Lora', 'serif'],
        sans: ['Your Sans Font', 'sans-serif'],
        display: ['Your Display Font', 'serif']
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        'golden-gradient': 'linear-gradient(45deg, #D4AF37 0%, #B8860B 50%, #D4AF37 100%)',
        'menu-overlay': 'linear-gradient(180deg, rgba(21,19,29,0.95) 0%, rgba(33,33,33,0.9) 100%)',
        'menu-accent': 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'golden-pulse': {
          '0%, 100%': { 'border-color': '#D4AF37' },
          '50%': { 'border-color': '#B8860B' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'golden-pulse': 'golden-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      dropShadow: {
        glow: [
          '0 0 5px rgba(255,215,0,0.5)',
          '0 0 15px rgba(255,215,0,0.3)'
        ]
      },
      
      
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      // Add your custom plugin code here
    }),
  ],
};