import pluginJest from 'eslint-plugin-jest' //allows ESLint to recognise Jest's variables and logic rules so it can highlight its errors
import babelParser from '@babel/eslint-parser' //allows ESLint to recognise unsupported syntax
import babelPlugin from '@babel/eslint-parser' //allows ESLint to catch errors in unsupported syntax
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
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