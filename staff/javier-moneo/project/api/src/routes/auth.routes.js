import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller.js';
import { verifySignup, authJwt } from '../middlewares/index.js';

const router = Router();

// registro
router.post(
  '/signup',
  [verifySignup.checkDuplicateUserNameOrEmail],
  authCtrl.signUp
);

// registro con roles
router.post(
  '/signuproles',
  [verifySignup.checkDuplicateUserNameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUpWithRoles
);

// login
router.post('/signin', authCtrl.signIn);

router.post(
  '/asignAllRolesToUser',
  [authJwt.verifyToken, authJwt.isUserBanned],
  authCtrl.asignAllRolesToUser
);

export default router;
