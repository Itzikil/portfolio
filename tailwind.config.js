/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      colors: {
        black: '#191624',
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        float: 'float 3s infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        typing: 'typing 4.8s steps(40, end) , blinkCaret .75s step-end infinite',
      },

      keyframes: {
        float: {
          '0%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(-5%)' },
        },
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        typing: {
          from: { width: 0 },
          to: { width: '100%' },
        },
        blinkCaret: {
          from: { 'border-color': 'transparent' },
          to: { 'border-color': 'transparent' },
          '50%': { 'border-color': '#2a84a0' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [],
}
