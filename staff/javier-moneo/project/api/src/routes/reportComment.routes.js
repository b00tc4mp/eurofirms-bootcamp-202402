import { Router } from 'express';
import * as reportCommentsCtrl from '../controllers/reportComment.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportCommentsCtrl.createReport
);

export default router;
