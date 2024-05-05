import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller.js';
import { authJwt, verifySignup } from '../middlewares/index.js';

const router = Router();

// creacion de un usuario con roles
router.post(
  '/',
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  userCtrl.createUser
);

export default router;
