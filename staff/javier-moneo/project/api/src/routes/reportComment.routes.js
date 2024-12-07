import { Router } from 'express';
import * as reportCommentsCtrl from '../controllers/reportComment.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportCommentsCtrl.createReport
);

router.get(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportCommentsCtrl.getReports
);

router.patch(
  '/removeReport',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportCommentsCtrl.removeReport
);

router.patch(
  '/discardReport',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportCommentsCtrl.discardReport
);

export default router;
