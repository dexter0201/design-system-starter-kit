// following https://medium.com/@tomaszmularczyk89/guide-to-building-a-react-components-library-with-rollup-and-styled-jsx-694ec66bd2
const replace = require("rollup-plugin-replace");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

module.exports = {
  input: "./src/scripts/app-react.jsx",
  output: {
    file: "./dist/scripts/app-react.js",
    format: "cjs",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
};
