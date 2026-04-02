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
          blue: '#0056D2', // Vibrant Blue
          lightBlue: '#3B82F6', // True Light Blue
          dark: '#4A4A4A', // Graphite
          silver: '#A8A8A8', // Steel Silver
        }
      }
    },
  },
  plugins: [],
}