module.exports = {
  theme: {
    fontFamily: {
      serif: ["Crimson Text", "sans-serif"],
      sans: ["quasimoda", "sans-serif"]
    },
    colors: {
      white: "white",
      paper: "#f5f2ea",
      brown: "#876e61"
    },
    borderColor: theme => ({
      default: theme("colors.paper", "currentColor"),
      ...theme("colors")
    }),
    extend: {
      spacing: {
        "2px": "2px"
      }
    }
  }
};
