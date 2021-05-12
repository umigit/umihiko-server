import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

const getFilePaths = (dir: string): string[] => {
  const res = [];
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

const inputDirs = [
  './bin',
  './controllers',
  './models',
  './routes',
  './config',
];
const outputDir = '../dist';

const inputs = inputDirs
  .map((inputDir) => getFilePaths(inputDir))
  .flat()
  .concat('./app.ts');

build({
  entryPoints: inputs,
  outdir: outputDir,
  external: ['pg-hstore'],
  platform: 'node',
  format: 'cjs',
  minify: process.env.NODE_ENV === 'production',
  bundle: process.env.NODE_ENV === 'production',
  tsconfig: './tsconfig.json',
}).catch(() => process.exit(1));
