import express from 'express';
import { GetFolderController } from '../controller/folder/folder.controller';

const router = express.Router()

router.get('/:id', GetFolderController);


export default router;