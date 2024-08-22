import express from 'express';
import morgan from 'morgan';
import fileSystemRouter from './router/fileSystem.router';
import fileRouter from './router/file.router';
import folderRouter from './router/folder.router';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());

server.use('/api/v1/file-system', fileSystemRouter);
server.use('/api/v1/file', fileRouter);
server.use('/api/v1/folder', folderRouter);

export default server;