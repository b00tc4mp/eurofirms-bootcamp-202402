import { Router } from 'express';
import * as searchesCtrl from '../controllers/search.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  searchesCtrl.createSearch
);

router.post(
  '/getByAllParamsId',
  searchesCtrl.getSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId
);

router.get('/:searchId', searchesCtrl.getSearchById);

export default router;
