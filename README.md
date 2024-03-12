```javascript
//.eslintrc.js
const { resolve } = require("path")
const { nextLintConfig } = require("@dvisign/ibj-eslint-config")
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ...nextLintConfig,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ...nextLintConfig.parserOptions,
  },
  // 추가 세팅
}
```
