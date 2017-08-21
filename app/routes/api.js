export default function(app, db) {
    app.get('/api', (req, res) => {
        res.send('api');
    });
}
