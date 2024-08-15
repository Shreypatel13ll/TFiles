import express from 'express';
import fileSystemRouter from './router/fileSystem.router';

const server = express();
server.use(express.json());

server.use('/api/v1/file-system', fileSystemRouter);

export default server;