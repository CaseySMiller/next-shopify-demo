/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: ['prettier-plugin-tailwindcss']
};
