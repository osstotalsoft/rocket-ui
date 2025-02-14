module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      }
    }
  ],
  plugins: ['react', 'react-hooks', 'jest'],
  ignorePatterns: ['**/public'],
  rules: {
    indent: 0,
    'linebreak-style': 0,
    quotes: 0,
    semi: 0,
    'no-console': 0,
    'no-debugger': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'react/jsx-no-bind': ['error', { ignoreRefs: true }]
  }
}
