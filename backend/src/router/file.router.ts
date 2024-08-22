import express from 'express';
import fileController from '../controller/fileSystem/fileSystem.controller';

const router = express.Router();

router.get('/:id', fileController.get);

export default router;