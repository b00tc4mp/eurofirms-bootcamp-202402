import { Router } from 'express';
import * as voteCommentsCtrl from '../controllers/voteComment.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  voteCommentsCtrl.createVoteComment
);

export default router;
