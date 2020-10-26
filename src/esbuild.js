const { build } = require('esbuild');
const fs = require('fs');
const path = require('path');

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

build({
  entryPoints: inputs,
  outdir: outputDir,
  platform: 'node',
  format: 'cjs',
  minify: false,
  bundle: false,
}).catch(() => process.exit(1));
