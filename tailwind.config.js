/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      width: {
        '9/10': '90%',
        '9/20': '45%'
      },
      spacing: {
        '13': '3.25rem',
      },
    },
  },
  plugins: [],
}

