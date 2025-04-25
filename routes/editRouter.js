import { Router } from "express";
import { getEditItem, postEditItem } from "../controllers/editController.js";

const editRouter = Router();

editRouter.get('/item/:id', getEditItem)
editRouter.post('/item/:id', postEditItem)


export default editRouter;