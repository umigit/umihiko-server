import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

export default {
  input: 'app.js',
  output: {
    file: 'app_bundle.js',
    format: 'cjs',
    exports: 'default',
  },
  plugins: [
    resolve({ preferBuiltins: false }),
    commonjs(),
    json(),
    babel({ babelHelpers: 'bundled' }),
  ],
};
