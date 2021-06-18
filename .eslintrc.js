module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  globals: {
    'nodecg': true,
    "NodeCG": true
  },
  rules: {
    "array-callback-return": "off",
    "no-shadow": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "global-require": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/triple-slash-reference": "off"
  },
};
