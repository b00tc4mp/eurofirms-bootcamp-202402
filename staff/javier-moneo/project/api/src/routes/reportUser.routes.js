import { Router } from 'express';
import * as reportUsersCtrl from '../controllers/reportUser.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportUsersCtrl.createReport
);

router.get(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportUsersCtrl.getReports
);

router.patch(
  '/removeReport',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportUsersCtrl.removeReport
);

router.patch(
  '/discardReport',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportUsersCtrl.discardReport
);

export default router;
