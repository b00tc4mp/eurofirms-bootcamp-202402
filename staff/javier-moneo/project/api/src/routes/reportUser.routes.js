import { Router } from 'express';
import * as reportUsersCtrl from '../controllers/reportUser.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportUsersCtrl.createReport
);

export default router;
