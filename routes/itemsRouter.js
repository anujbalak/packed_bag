import { Router } from "express";
import { getItemsPage, getItemPage } from "../controllers/itemsController.js";

const itemsRouter = Router();

itemsRouter.get('/', getItemsPage);
itemsRouter.get('/:itemId', getItemPage)

export default itemsRouter;