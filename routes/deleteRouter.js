import  { Router } from 'express'
import { postRemoveItem } from '../controllers/deleteController.js';

const deleteRouter = Router();

deleteRouter.post('/item/:id', postRemoveItem)

export default deleteRouter;