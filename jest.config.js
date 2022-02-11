module.exports = {
  moduleNameMapper: {
    '@users/(.*)': '<rootDir>/src/modules/users/$1',
    '@core/(.*)': '<rootDir>/src/core/$1',
    '@src/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  setupFiles: ['<rootDir>/src/core/container/inversify-container.ts'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
};
