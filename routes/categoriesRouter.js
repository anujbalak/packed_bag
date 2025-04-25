import { Router } from "express";
import { catPage, getCatPage } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get('/', getCatPage);
categoriesRouter.get('/:catId', catPage)

export default categoriesRouter;