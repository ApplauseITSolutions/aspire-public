/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1e4',
          100: '#ffe4cc',
          200: '#ffcca3',
          300: '#ffb380',
          400: '#EF7F2C',
          500: '#d6691f',
          600: '#b85a19',
          700: '#924814',
          800: '#783811',
          900: '#5c2a08',
        }
      }
    },
  },
  plugins: [],
}
