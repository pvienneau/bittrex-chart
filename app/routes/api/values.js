import { Router } from 'express';

import { Tick } from 'models';

const router = Router();

router.get('/latest', (req, res) => {
    Tick.findOne({}, {}, { sort: { created_at: -1 } }).then(tick => {
        res.send(tick.toJSON());
    });
});

export default router;
