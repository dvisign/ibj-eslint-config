import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "dist/index.ts", // 가정된 시작점
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: process.env.NODE_ENV === "production",
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: "dist",
    }),
    process.env.NODE_ENV === "production" && terser(),
  ],
  external: ["path"],
};
