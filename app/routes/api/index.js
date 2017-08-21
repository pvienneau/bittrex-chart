import { Router } from 'express';

import values from './values';

const router = Router();

router.use('/values', values);

export default router;
