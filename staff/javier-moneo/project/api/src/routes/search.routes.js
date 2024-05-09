import { Router } from 'express';
import * as searchesCtrl from '../controllers/search.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  searchesCtrl.createSearch
);

export default router;
