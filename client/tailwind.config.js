/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1148px',
        // => @media (min-width: 1148px) { ... }
    },
    extend: {},
  },
  plugins: [],
}