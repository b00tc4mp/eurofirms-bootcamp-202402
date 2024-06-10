import { Router } from 'express';
import * as reportTagsCtrl from '../controllers/reportTag.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportTagsCtrl.createReport
);

router.get(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportTagsCtrl.getReports
);

router.patch(
  '/removeReport',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportTagsCtrl.removeReport
);

router.patch(
  '/discardReport',
  [authJwt.verifyToken, authJwt.isUserBanned, authJwt.isModerator],
  reportTagsCtrl.discardReport
);

export default router;
