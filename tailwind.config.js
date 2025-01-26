/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary': "url('assets/images/backgrounds/background-primary.jpeg')",
      },
      fontFamily: {
        'cormorant': ['Cormorant', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'calm-white': '#FEFDF9',
        'cream': '#FBF3EA',
        'beige-light': '#F4EDDE',
        'beige': '#D2B29C',
        'brown-light': '#B58166',
        'brown-dark': '#6D3A21',
        'gray-light': '#E5E5E5',
        'gray': '#B3B3B3',
        'gray-dark': '#4F4F4F',
      },
    },
  },
  plugins: [],
}

