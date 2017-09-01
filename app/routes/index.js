import { Router } from 'express';

const router = Router();

import api from './api';
import assets from './assets';

router.use('/api', api);
// router.use('/assets', assets);

router.get('/', (req, res) => {
    res.render('chart');
});

export default router;
