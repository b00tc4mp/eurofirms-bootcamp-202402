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

router.get('/:userId', userCtrl.getUser);

router.post(
  '/assignRoleModerator',
  [authJwt.verifyToken, authJwt.isAdmin],
  userCtrl.assignRoleModerator
);

router.post(
  '/removeRoleModerator',
  [authJwt.verifyToken, authJwt.isAdmin],
  userCtrl.removeRoleModerator
);

export default router;
