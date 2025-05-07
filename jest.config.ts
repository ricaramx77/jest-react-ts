export default {
    testEnvironment: "jsdom",    
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };