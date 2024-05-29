import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "MyComponent",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  },
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
};
