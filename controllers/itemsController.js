import { getAllItems, getItem } from "../db/queries.js";
import { isEdit } from "./editController.js";

const getItemsPage = async (req, res) => {
    const items = await getAllItems();
    res.render('pages/items', {items});
}

const getItemPage = async (req, res) => {
    const {itemId} = req.params
    const item = await getItem(Number(itemId));
    if (!item) {
        res.render('pages/error', {
            error: 'Item does not exists'
        })
    }
    res.render('pages/item', {item, isEdit});
}

export { getItemsPage, getItemPage }