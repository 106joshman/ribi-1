module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        "pry-clr": "#fff",
        "pryclr": "#f6655f",
      },
      backgroundColor: {
        thickred: "#f6655f",
        lightred: "#fcc0bd",
        fade: "#fbfbfb",
        work: "#fbfbfb",
      },
      backgroundImage: {
        vector: "url(/src/components/images/Vecto.png)",
        blood: "url(/src/components/images/Blood.svg)",
      },
      width: {
        drop: "120px",
        drip: "110px",
        card: "452px",
      },
      margin: {
        eX: "15px",
        whY: "35px",
        teh: "30px",
      },
      padding: {
        blop: "13px",
        blip: "15px",
        work: "70px",
      },
      height: {
        hero: "500px",
        drop: "120px",
        drip: "110px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
