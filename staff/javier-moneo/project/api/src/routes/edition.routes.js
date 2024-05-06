import { Router } from 'express';
import * as editionsCtrl from '../controllers/edition.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.get('/', editionsCtrl.getEditions);

router.get('/:code', editionsCtrl.getEditionByCode);

export default router;
