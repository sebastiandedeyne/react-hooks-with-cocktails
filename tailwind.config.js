module.exports = {
  theme: {
    borderColor: theme => ({
      default: theme("colors.paper", "currentColor"),
      ...theme("colors")
    }),
    extend: {
      colors: {
        white: "white",
        paper: "#f5f2ea",
        brown: "#876e61"
      },
      spacing: {
        "2px": "2px"
      },
      fontFamily: {
        slide: ["Fira Code"],
        serif: ["Crimson Text", "sans-serif"],
        cocktail: ["quasimoda", "sans-serif"]
      }
    }
  }
};
