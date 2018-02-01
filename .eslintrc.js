const path = require('path');


module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  "env": {
    "jest": true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname, "./src")]
      }
    }
  }
};
