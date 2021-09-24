module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  ignoreFiles: '**/node_modules/**',
  rules: {
    'block-no-empty': null,
    'property-no-unknown': true,
  },
};
