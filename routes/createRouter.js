import { Router } from "express";
import { getCreateCategory, getCreateItem, getCreatePage, postItem } from "../controllers/createController.js";

const createRouter = Router();

createRouter.get('/category', getCreateCategory)
createRouter.get('/item', getCreateItem)
createRouter.post('/item', postItem)
export default createRouter;