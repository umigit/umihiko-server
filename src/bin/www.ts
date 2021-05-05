import { app } from '../app';
import debugLib from 'debug';
import http from 'http';

const debug = debugLib('umihiko-server:server');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall && error.syscall !== 'listen') {
    throw error;
  }

  const bind =
    typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port.toString();

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();

  if (typeof addr === 'string') {
    debug('Listening on pipe ' + addr);
  } else if (addr?.port) {
    debug('Listening on port ' + addr?.port.toString());
  }
}
