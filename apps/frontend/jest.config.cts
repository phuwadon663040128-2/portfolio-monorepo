/* eslint-disable */
import nextJest from 'next/jest'; // เปลี่ยน require เป็น import

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  displayName: 'frontend',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/frontend',
  testEnvironment: 'jsdom',
};

// เปลี่ยน module.exports เป็น export default
export default createJestConfig(config);