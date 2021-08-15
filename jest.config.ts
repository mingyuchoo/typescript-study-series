export default {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['text'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
