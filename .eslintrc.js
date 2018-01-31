module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  settings: {
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "./src")]
      }
    }
  }
};
