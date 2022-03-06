module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['detox', '@typescript-eslint', 'prettier'],
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
    'import/extensions': 0,
    'import/no-unresolved': [
      0,
      {
        ignore: ['@env'],
      },
    ],
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/jsx-filename-extension': 0,
    'no-return-await': 0,
    'no-shadow': 0,
    'import/order': 0,
    'global-require': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        'space-before-blocks': [
          'error',
          {functions: 'always', keywords: 'never', classes: 'never'},
        ],
        'object-curly-spacing': ['error', 'always', {objectsInObjects: false}],
      },
    ],
  },
}
