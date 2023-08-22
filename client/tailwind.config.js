/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvatica': ['Helvatica', 'Arial', 'sans']
      },
      colors: {
        primary : '#A8DF8E'
      }
    },
  },
  plugins: [],
}