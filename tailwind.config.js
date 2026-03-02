/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-yellow': '#ffb400', // Adjust based on image
        'theme-dark': '#111111',
      }
    },
  },
  plugins: [],
}
