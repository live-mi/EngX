process.env.TZ = 'UTC'

module.exports = {
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(ts|js)?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).(ts|js)?(x)',
  ],
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js?(x)', 'src/**/*.tsx', 'src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html', 'text', 'lcov', 'text-summary'],
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@microsoft|@react-native-community|@react-native-firebase|@react-navigation|@react-native-picker|victory-*)',
  ],
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
  },
}
