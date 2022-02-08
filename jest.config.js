module.exports = {
  moduleFileExtensions: ["ts", "js"],
  rootDir: ".",
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  setupFiles: ["./src/core/container/inversify-container.ts"],
};
