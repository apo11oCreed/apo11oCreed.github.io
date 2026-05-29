/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/test/**/*.jest.{test,spec}.{js,ts,tsx}'],

moduleNameMapper: {
  '^@builder\\.io/qwik$': '<rootDir>/src/test/__mocks__/qwik.ts',
  '^@builder\\.io/qwik/jsx-runtime$': '<rootDir>/src/test/__mocks__/qwik-jsx-runtime.ts',
  '^@builder\\.io/qwik/jsx-dev-runtime$': '<rootDir>/src/test/__mocks__/qwik-jsx-dev-runtime.ts',
  '^~/(.*)$': '<rootDir>/src/$1',
  '^@/(.*)$': '<rootDir>/src/$1',
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  '\\.(css|less|scss|sass)\\?inline$': 'identity-obj-proxy'
},

  setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  clearMocks: true,
  verbose: true
};