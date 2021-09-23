module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
