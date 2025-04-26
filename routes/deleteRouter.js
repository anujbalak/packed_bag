import  { Router } from 'express'
import { postRemoveCategory, postRemoveItem } from '../controllers/deleteController.js';

const deleteRouter = Router();

deleteRouter.post('/item/:id', postRemoveItem)
deleteRouter.post('/category/:id', postRemoveCategory);
export default deleteRouter;