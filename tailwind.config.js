// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e3a8a', // Deep blue
          lightBlue: '#2563eb', // Standard blue
          dark: '#0f172a', // Near black for footers/sections
        }
      }
    },
  },
  plugins: [],
}