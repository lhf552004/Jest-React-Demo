// jest.config.js
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  setupFiles: ["<rootDir>/src/setupTests.js"],
};
