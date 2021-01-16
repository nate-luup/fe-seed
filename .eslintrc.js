/** @format */

module.exports = {
  root: true,
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',
      'prettier/react',
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      $: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
      'no-global-assign': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'require-jsdoc': 'off'
  },
}
