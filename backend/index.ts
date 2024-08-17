import environment from './src/config/environment';
import './src/config/db.config';
import server from './src/server';

const port = environment['PORT'];

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});