import { deleteItem, getAllItems } from "../db/queries.js";

const postRemoveItem = async (req, res) => {
    const { id } = req.params
    await deleteItem(Number(id)); 
    const items = await getAllItems();
    res.render('pages/items', {items});
}

const postRemoveCategory = async (req, res) => {
    const { id } = req.params
    await deleteItem(Number(id)); 
    const items = await getAllItems();
    res.render('pages/items', {items});
}

export {
    postRemoveItem
}