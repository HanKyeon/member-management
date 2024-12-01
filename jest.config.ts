import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/stores/(.*)$': '<rootDir>/stores/$1',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.tsx',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);
