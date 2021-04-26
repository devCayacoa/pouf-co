module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Crimson Text"', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
