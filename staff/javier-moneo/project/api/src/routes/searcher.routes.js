import { Router } from 'express';
import * as searcherCtrl from '../controllers/searcher.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.get('/', searcherCtrl.getSearchers);

router.get('/:name', searcherCtrl.getSearcherByName);

router.get('/searcherId/:searcherId', searcherCtrl.getSearcherById);

export default router;
