const baseConfig = require('@teambit/react/prettier/prettier.config');
module.exports = {
  ...baseConfig,
  printWidth: 140,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
};
