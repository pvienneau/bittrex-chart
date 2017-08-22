import { Router } from 'express';

import { ltrim } from 'utils/string';

const router = Router();

router.get('*', (req, res) => {
    const path = ltrim('/', req.url);

    console.log(require.resolve(`assets/${path}`));
    res.sendFile(require.resolve(`assets/${path}`));
});

export default router;
