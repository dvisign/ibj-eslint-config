const { resolve } = require("path")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["./src/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: resolve(__dirname, "tsconfig.json"),
  },
  env: {
    node: true, // Node.js 환경 활성화
    es2021: true, // ES2021 문법 지원 활성화
  },
  settings: {
    react: {
      version: "^18.2.0",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, "tsconfig.json"),
      },
    },
  },
}
