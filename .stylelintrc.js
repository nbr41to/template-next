module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-config-prettier/recommended',
  ],
  ignoreFiles: '**/node_modules/**',
  rules: {
    'prettier/prettier': true,
    'block-no-empty': null,
  },
};
