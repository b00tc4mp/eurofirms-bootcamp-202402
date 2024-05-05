import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller.js';
import { verifySignup } from '../middlewares/index.js';

const router = Router();

// registro
router.post(
  '/signup',
  [verifySignup.checkDuplicateUserNameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp
);

// login
router.post('/signin', authCtrl.signIn);

export default router;
