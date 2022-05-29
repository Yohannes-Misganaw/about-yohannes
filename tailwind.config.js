module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      inset: {
        3: "3px",
        50: "50px",
        100: "100px",
        120: "120px",
        200: "200px",
        500: "500px",
        700: "700px",
        800: "800px",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        alg: "30px",
        xl: "200px",
        full: "9999px",
        large: "200px",
      },
      margin: {
        50: "50px",
        75: "75px",
        100: "100px",
        320: "320px",
        700: "700px",
        400: "400px",
        500: "500px",
      },
      width: {
        50: "50px",
        75: "75px",
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        600: "600px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        40: "40px",
        45: "45vh",
        50: "50px",
        80: "80px",
        90: "90vh",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        700: "700px",
        800: "800px",
        840: "840px",
        880: "880px",
        920: "920px",
        1000: "1000px",
        1200: "1200px",
      },
      flex: {
        0.7: "0.7 1 0%",
      },
      maxHeight: {
        370: "370px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      textColor: {
        lightGray: "#F1EFEE",
        primary: "#FAFAFA",
        secColor: "#efefef",
        navColor: "#BEBEBE",
      },
      colors: {
        fav: "#09f4fd",
        dark: "#333",
      },
      backgroundColor: {
        mainColor: "#FBF8F9",
        secondaryColor: "#F0F0F0",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateY(400px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },

        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px,20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 2s ease-out",
        blob: "blob 7s infinite ease-out",
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        Tinos: ["Tinos"],
        Whisper: ["whisper"],
        soul: ["My soul"],
        Lobster: ["Lobster"],
        Courgette: ["Courgette"],
        Oleo: ["Oleo Script Swash Caps"],
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
