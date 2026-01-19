const pluginJest = require('eslint-plugin-jest'); //allows ESLint to recognise Jest's variables and logic rules so it can highlight its errors
const babelParser = require('@babel/eslint-parser'); //allows ESLint to recognise unsupported syntax
const babelPlugin = require('@babel/eslint-plugin') //allows ESLint to catch errors in unsupported syntax
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = [
  {
    files: ['**/*.test.js'], //does this cause ESLint to only target test files?
    plugins: {
      jest: pluginJest,
      babel: babelPlugin,
    },
    languageOptions: {
      parser: babelParser,
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  eslintConfigPrettier //is this placed right?
];