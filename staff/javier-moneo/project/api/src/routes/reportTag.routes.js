import { Router } from 'express';
import * as reportTagsCtrl from '../controllers/reportTag.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportTagsCtrl.createReport
);

export default router;
