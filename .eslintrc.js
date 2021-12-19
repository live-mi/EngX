module.exports = {
  root: true,
  extends: '@react-native-community',
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
