module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['detox'],
  overrides: [
    {
      files: ['*.e2e.ts', '*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: ['warn', 'never'],
        'space-before-blocks': [
          'error',
          {functions: 'always', keywords: 'never', classes: 'never'},
        ],
        'object-curly-spacing': ['error', 'always', {objectsInObjects: false}],
      },
    ],
  },
}
