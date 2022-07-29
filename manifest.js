module.exports = {
  title: "Darty React App",
  features: {
    jsx: true,
  },
  htmlTemplates: {
    "index.html": "./src/index.html",
  },
  staticFiles: [
    "./public/**/*",
  ],
  linter: {
    extends: [
      "eser-react",
    ],
    rules: {
      "jsx-a11y/href-no-hash": 0,
    },
  },
  dependencyAliases: {
    "react-native": "react-native-web",
    "../../theme.config$": "~/semantic-ui/theme.config",
    "../semantic-ui/site": "~/semantic-ui/site",
  },
};
