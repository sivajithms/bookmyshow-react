/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navCol:
        {
          25: '#2B3148',
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        page: {
          50: '#f5f5f5'
        }
      }
    },
  },
  plugins: [],
}