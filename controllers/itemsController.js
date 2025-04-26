import { getAllItems, getCategoryById, getItem } from "../db/queries.js";

let isEdit = false

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
    const category = await getCategoryById(item.cat_id)
    res.render('pages/item', {category, item, isEdit});
}

export { getItemsPage, getItemPage }