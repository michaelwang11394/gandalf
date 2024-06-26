import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "gandalf-react-component",
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
    terser(),
    postcss({
      extensions: [".css"],
      inject: true, // Inject CSS to the document head (set to false if you handle it on your own)
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),
  ],
};
