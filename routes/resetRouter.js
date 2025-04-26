import { Router } from "express";
import { resetDefaults } from "../controllers/resetController.js";

const resetRouter = Router();

resetRouter.get('/', resetDefaults);

export default resetRouter;