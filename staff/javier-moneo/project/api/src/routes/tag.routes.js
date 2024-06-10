import { Router } from 'express';
import * as tagCtrl from '../controllers/tag.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post('/', tagCtrl.getTagByNameAndEditionId);

router.get('/:tagId', tagCtrl.getTagByTagId);

export default router;
