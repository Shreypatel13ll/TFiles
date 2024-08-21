import environment from './src/config/environment';
import { Connect } from './src/config/db.config';
import server from './src/server';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
 
const port = environment['PORT'];

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


Connect().then(() => {
  server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});