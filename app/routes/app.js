import { Request } from 'helpers';

export default function(app, db) {
    app.get('/', (req, res) => {
        res.send('halo');
    });
}
