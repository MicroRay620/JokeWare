import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js', // your entry file
  output: [
    {
      file: 'dist/jokeware.esm.js', // non-minified output
      format: 'esm', // or 'cjs', 'iife', etc.
      sourcemap: false, // optional sourcemap for easier debugging
    },
    {
      file: 'dist/jokeware.min.js', // minified output
      format: 'esm', // or 'cjs', 'iife', etc.
      sourcemap: false, // optional sourcemap for minified version
      plugins: [terser()], // apply the Terser plugin to minify
    }
  ],
  plugins: [
    resolve(), // resolves node modules
    commonjs(), // converts CommonJS to ES6
    babel({
      exclude: 'node_modules/**', // transpile code except for node_modules
      babelHelpers: 'bundled',
    }),
  ],
};
