import { deleteItem, getAllItems, getItemsByCatId, getCategoryById, deleteCategory } from "../db/queries.js";

let showDialog = false;
let isEdit = false;

const postRemoveItem = async (req, res) => {
    const { id } = req.params
    await deleteItem(Number(id)); 
    const items = await getAllItems();
    res.render('pages/items', {items});
}


const getRemoveCategory = async (req, res) => {
    const { id } = req.params;
    const items = await getItemsByCatId(Number(id));

    const category = await getCategoryById(Number(id)); 

    showDialog = true;
    res.render('pages/category', {
        category, items, isEdit, showDialog
    })
}

const postRemoveCategory = async (req, res) => {
    const { id } = req.params;
    await deleteCategory(id);
    res.redirect('/');
}

export {
    postRemoveItem,
    getRemoveCategory,
    postRemoveCategory,
}