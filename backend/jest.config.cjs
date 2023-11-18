module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  moduleFileExtensions: ['js'],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
