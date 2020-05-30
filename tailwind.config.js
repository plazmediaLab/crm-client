exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  // Hack debido a Tailwind ^ 1.1.0 usando `reduce-css-calc` que asume node
  // Fuente: https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
      fs: 'empty'
  };
};