/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway
      },
      colors: {
        backgroundPrimary : '#12192A',
        primary : '#2d3250'
      },
    },
  },
  plugins: [],
}

