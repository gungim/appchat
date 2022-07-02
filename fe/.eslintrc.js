module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: "latest",
    sourceType: 'module',
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  parser:"@babel/eslint-parser"
};
