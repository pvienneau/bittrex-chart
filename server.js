import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import boolParser from 'express-query-boolean';

import './global.js';
import routes from 'routes';
import { mongoose } from 'database';
import { startProcesses } from 'process';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(boolParser());

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.success(`Currently listening on port ${process.env.PORT}`);
});

mongoose.init().then(() => startProcesses());
