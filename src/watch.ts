import { exec } from 'child_process';
import dotenv from 'dotenv';
import { watch } from 'chokidar';

dotenv.config();

const dirs = [
  './bin',
  './controllers',
  './models',
  './routes',
  './config',
  './app.ts',
];
const dist = './dist';
const env = process.env.NODE_ENV;
console.log(env);
const watchDir = env === 'development' ? dirs : dist;
// Initialize watcher.
const watcher = watch(watchDir, {
  ignored: /^\./, // ignore dotfiles
  persistent: true,
});

// Something to use when events are received.
const log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', (path) => {
    log(`File ${path} has been added`);
    if (env === 'development') exec('yarn build');
  })
  .on('change', (path) => {
    log(`File ${path} has been changed`);
    if (env === 'development') exec('yarn build');
  })
  .on('unlink', (path) => {
    log(`File ${path} has been removed`);
    if (env === 'development') exec('yarn build');
  });

// More possible events.
watcher
  .on('addDir', (path) => log(`Directory ${path} has been added`))
  .on('unlinkDir', (path) => log(`Directory ${path} has been removed`))
  .on('error', (error) => log(`Watcher error: ${error.message}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => {
    // internal
    log('Raw event info:', event, path, details);
  });

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: https://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path, stats) => {
  if (stats) console.log(`File ${path} changed size to ${stats.size}`);
});
