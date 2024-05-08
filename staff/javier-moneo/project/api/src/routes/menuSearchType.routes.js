import { Router } from 'express';
import * as menuSearchTypeCtrl from '../controllers/menuSearchType.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.get(
  '/:editionId/:searcherId',
  menuSearchTypeCtrl.getMenuSearchTypesByEditionAndSearcher
);

export default router;
