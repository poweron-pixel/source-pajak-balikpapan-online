// tailwind.config.js
// https://tailwindcss.com/docs/configuration/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      body: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}