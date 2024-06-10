import { Router } from 'express';
import * as voteSeachsCtrl from '../controllers/voteSearch.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  voteSeachsCtrl.createVoteSearch
);

export default router;
