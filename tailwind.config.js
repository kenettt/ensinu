const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto"],
        montserrat: ["Montserrat"], 
        JunkDog: ["JunkDog"],
        EuclidSemiBold: ["Euclid Circular A SemiBold"],     
        EuclidRegular: ["Euclid Circular A Regular"],
        QanelasSoftSemiBold: ["Qanelas Soft SemiBold"],
        Alternate: ["DIN Alternate Bold"]
    },
  },

  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],

}}
