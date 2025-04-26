import path, { dirname } from 'path'
import url from 'url'
import 'dotenv/config'

import express from 'express';
const app = express();

import indexRouter from './routes/indexRouter.js';
import createRouter from './routes/createRouter.js';
import itemsRouter from './routes/itemsRouter.js';
import categoriesRouter from './routes/categoriesRouter.js';
import editRouter from './routes/editRouter.js';
import deleteRouter from './routes/deleteRouter.js';


const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', indexRouter)
app.use('/create', createRouter);
app.use('/items', itemsRouter)
app.use('/categories', categoriesRouter)
app.use('/edit', editRouter)
app.use('/delete', deleteRouter)
app.use((req, res) => {
    res.status(404).render('pages/error')
})

app.listen(process.env.PORT, () => {
    console.log('Started server at port', process.env.PORT);
})