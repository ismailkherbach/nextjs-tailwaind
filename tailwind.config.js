/** @type {import('tailwindcss').Config} */

module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: "#FAFAFB",
        grey: "#0302297d",
        cyon: "#26C0E2",
      },
      gridTemplateColumns: {
        sidebar: "218px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
