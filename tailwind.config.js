module.exports = {
  content: [
    "./src/**/*.{html,css,js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
