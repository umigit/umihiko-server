import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import fs from 'fs';
import path from 'path';

const getFilePaths = (dir) => {
  let res = [];
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const fp = path.join(dir, dirent.name);

    if (dirent.isDirectory()) {
      res.push(getFilePaths(fp));
    } else {
      res.push(fp);
    }
  }
  return res.flat();
};

const inputDir = './server';
const outputDir = './dist';

const inputs = getFilePaths(inputDir);
const outputs = inputs
  .map((item) => path.relative(inputDir, item))
  .map((item) => path.join(outputDir, item));

export default {
  input: inputs,
  output: {
    file: outputs,
    format: 'cjs',
    exports: 'default',
  },
  plugins: [
    resolve({ preferBuiltins: false }),
    commonjs(),
    json(),
    babel({ babelHelpers: 'bundled' }),
    nodePolyfills(),
  ],
};
