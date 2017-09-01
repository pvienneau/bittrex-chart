import { Router } from 'express';

import { Tick } from 'models';

const router = Router();

router.get('/', (req, res) => {
    Tick.findAll().then(ticks => {
        res.send(ticks);
    });
});

router.get('/latest', (req, res) => {
    Tick.findLast().then(tick => {
        console.log(tick);
        console.log(tick.toObject());
        console.log(tick.toJSON());

        res.send(tick);
    });
});

export default router;
