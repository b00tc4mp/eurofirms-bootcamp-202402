import { Router } from 'express';
import * as searchTypeCtrl from '../controllers/searchType.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();



router.get('/:name', searchTypeCtrl.getSearchTypeByName);

export default router;
