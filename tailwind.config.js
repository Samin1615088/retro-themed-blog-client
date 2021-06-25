module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'varelaRound': ['Varela Round', 'sans-serif'],
        'varela': ['Varela', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
