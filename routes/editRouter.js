import { Router } from "express";
import { getEditCategory, getEditItem, postEditCategory, postEditItem } from "../controllers/editController.js";

const editRouter = Router();

editRouter.get('/item/:id', getEditItem)
editRouter.post('/item/:id', postEditItem)
editRouter.get('/category/:id', getEditCategory)
editRouter.post('/category/:id', postEditCategory)


export default editRouter;