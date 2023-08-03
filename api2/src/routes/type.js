import { Router } from 'express';
const router = Router();

import { getAllTypeAPI } from '../controllers/type';

router.get('/', getAllTypeAPI);
export default router;
