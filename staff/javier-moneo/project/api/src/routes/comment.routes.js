import { Router } from 'express';
import * as commentsCtrl from '../controllers/comment.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  commentsCtrl.createComment
);
router.post(
  '/createRandomComments',
  [authJwt.verifyToken, authJwt.isUserBanned],
  commentsCtrl.createRandomComments
);

router.get('/:searchId', commentsCtrl.getCommentsBySearchId);

export default router;
