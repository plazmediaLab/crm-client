exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  // Hack debido a Tailwind ^ 1.1.0 usando `reduce-css-calc` que asume node
  // Fuente: https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
      fs: 'empty'
  };
};
module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      raleway: ["Raleway"],
    },
    extend: {
      colors: {
        p_blue: {
          100: "#E8EEFB",
          200: "#B7C9F1",
          300: "#85A5E8",
          400: "#648CE1",
          500: "#5480DE",
          600: "#4474DB",
          700: "#2556BF",
          800: "#1B408D",
          900: "#12295C",
        },
        carbon: {
          100: "#BFC2C4",
          200: "#A0A5A8",
          300: "#82888C",
          400: "#656B6D",
          500: "#494D4F",
          600: "#2C2F30",
          700: "#232526",
          800: "#1A1B1C",
          900: "#070707"
        },
        bluegray: {
          100: "#DCE9E7",
          200: "#AEBFC7",
          300: "#8BA3AF",
          400: "#688797",
          500: "#607D8B",
          600: "#58737F",
          700: "#485E68",
          800: "#303E45",
          900: "#202A2E"
        }
      },
      width: {
        max: "max-content",
        min: "min-content",
      },
    },
  },
  variants: {},
  plugins: [],
}
