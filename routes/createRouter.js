import { Router } from "express";
import { getCreateCategory, getCreateItem, getCreatePage, postCategory, postItem } from "../controllers/createController.js";

const createRouter = Router();

createRouter.get('/category', getCreateCategory)
createRouter.get('/item', getCreateItem)
createRouter.post('/item', postItem)
createRouter.post('/category', postCategory)
export default createRouter;