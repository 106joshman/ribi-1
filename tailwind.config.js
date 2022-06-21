module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "pry-clr": "#fff",
        pryclr: "#f6655f",
      },
      backgroundColor: {
        thickred: "#f6655f",
        lightred: "#fcc0bd",
        fade: "#fbfbfb",
        work: "#fbfbfb",
        donate: "#EB5757",
        about: "#F1908C",
        modal: "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        vector: "url(/src/components/images/Vecto.png)",
        blood: "url(/src/components/images/Blood.svg)",
      },
      width: {
        drop: "100px",
        drip: "110px",
        hero: "500px",
        ero: "300px",
        card: "452px",
        inpt: "120px",
        about: "160px",
        sev: "70%",
      },
      margin: {
        eX: "15px",
        whY: "35px",
        ero: "100px",
        teh: "30px",
      },
      padding: {
        blop: "13px",
        blip: "15px",
        work: "70px",
      },
      height: {
        hero: "500px",
        ero: "100px",
        donate: "800px",
        drop: "120px",
        about: "160px",
        drip: "110px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
