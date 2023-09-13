import express, { Application } from 'express';
const homeRouter = require('./routes/Home.routes');

const app: Application = express();
app.use(homeRouter);
module.exports = app;
