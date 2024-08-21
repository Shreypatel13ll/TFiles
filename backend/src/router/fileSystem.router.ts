import express from 'express';
import fileController from '../controller/fileSystem/fileSystem.controller';

const router = express.Router();

router.get('/:id', fileController.get);
router.post('/create', fileController.create);
router.put('/rename/:id', fileController.rename);
router.delete('/:id', fileController.delete_);

export default router;