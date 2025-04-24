import path from 'path'
import url from 'url'
import 'dotenv/config'

import express from 'express';
const app = express();

import indexRouter from './routes/indexRouter.js';
import createRouter from './routes/createRouter.js';


app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/create', createRouter);

app.listen(process.env.PORT, () => {
    console.log('Started server at port', process.env.PORT);
})