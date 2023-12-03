process.env.TZ = 'CET'

module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./jest/jest.setup.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['.history'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/google-services',
    '/src/shared/infra/i18n/translations',
    '/assets',
    '/constants',
    '/docs',
    '/jest',
    '/patches',
    '/.git',
  ],
  collectCoverage: false,
  coverageReporters: ['clover', 'json', 'lcov', 'text'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|victory|victory|toggle-switch-react-native|@sentry/react-native|aws-amplify|@shopify/react-native-skia)',
  ],
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      statements: 50,
    },
  },
  // eslint-disable-next-line no-undef
  resolver: `${__dirname}/jest/resolver.js`,
}
