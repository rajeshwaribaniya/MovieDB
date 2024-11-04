/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'brand-color': '#F2C00D',
      'primary': '#212121',
      'secondary': '#757575',
      'tertiary': '#B3B3B3',
    },

    borderColor:{
      'brand-color': '#F2C00D',
      'primary': '#757575',
    },
    extend: {},
  },
  plugins: [],
}