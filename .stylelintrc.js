module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['node_modules/**', '**.json', '**.md', '**.ico'],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': null,
    'property-no-unknown': true,
    'no-duplicate-selectors': null, // scの分岐で重複するため
  },
};
