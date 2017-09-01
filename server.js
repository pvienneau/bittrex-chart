require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import boolParser from 'express-query-boolean';

import './global.js';
import routes from 'routes';
import { mongoose } from 'database';
import { startProcesses } from 'process';
import * as exports from 'views/exports';

const app = express();

app.set('views', 'app/views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(boolParser());

app.use((req, res, next) => {
    Object.keys(exports).forEach(key => {
        res.locals[key] = exports[key];
    });

    next();
});

app.use(express.static('./app/public'));
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.success(`Currently listening on port ${process.env.PORT}`);
});

mongoose.init().then(() => {
    if (process.env.ENABLE_PROCESSES) startProcesses();
});
