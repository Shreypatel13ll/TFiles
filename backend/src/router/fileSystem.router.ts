import express from 'express';
import fileController from '../controller/fileSystem/fileSystem.controller';

const router = express.Router();

router.get('/get', fileController.get);
router.post('/create', fileController.create);
router.post('/rename', fileController.rename);
router.delete('/delete', fileController.delete_);

export default router;