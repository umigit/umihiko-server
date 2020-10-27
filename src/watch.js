const { exec } = require('child_process');
const dotenv = require('dotenv');
const chokidar = require('chokidar');

dotenv.config();

const server = './server';
const dist = './dist';
const env = process.env.NODE_ENV;
console.log(env);
const watchDir = env === 'development' ? server : dist;
// Initialize watcher.
const watcher = chokidar.watch(watchDir, {
  ignored: /^\./, // ignore dotfiles
  persistent: true,
});

// Something to use when events are received.
const log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', (path) => {
    log(`File ${path} has been added`);
    if (env === 'development') exec('yarn esbuild');
  })
  .on('change', (path) => {
    log(`File ${path} has been changed`);
    if (env === 'development') exec('yarn esbuild');
  })
  .on('unlink', (path) => {
    log(`File ${path} has been removed`);
    if (env === 'development') exec('yarn esbuild');
  });

// More possible events.
watcher
  .on('addDir', (path) => log(`Directory ${path} has been added`))
  .on('unlinkDir', (path) => log(`Directory ${path} has been removed`))
  .on('error', (error) => log(`Watcher error: ${error}`))
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

// Watch new files.
// watcher.add('new-file');
// watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// Get list of actual paths being watched on the filesystem
// var watchedPaths = watcher.getWatched();

// Un-watch some files.
// await watcher.unwatch('new-file*');

// Stop watching.
// The method is async!
// watcher.close().then(() => console.log('closed'));

// Full list of options. See below for descriptions.
// Do not use this example!
// chokidar.watch('file', {
//   persistent: true,

//   ignored: '*.txt',
//   ignoreInitial: false,
//   followSymlinks: true,
//   cwd: '.',
//   disableGlobbing: false,

//   usePolling: false,
//   interval: 100,
//   binaryInterval: 300,
//   alwaysStat: false,
//   depth: 99,
//   awaitWriteFinish: {
//     stabilityThreshold: 2000,
//     pollInterval: 100,
//   },

//   ignorePermissionErrors: false,
//   atomic: true, // or a custom 'atomicity delay', in milliseconds (default 100)
// });
