module.exports = {
  root: true,
  parseOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  extends: ['standard'],
  plugins: ['jest'],
  rules: {},
};
