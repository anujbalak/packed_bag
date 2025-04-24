import { addItem } from "../db/queries.js";

const getCreatePage = (req, res) => {
    res.render('pages/create');
}

const getCreateItem = (req, res) => {
    res.render('pages/create/item');
}

const getCreateCategory = (req, res) => {
    res.render('pages/createCategory');
}

const postItem = async (req, res) => {
    const { item, category } = req.body;
    await addItem({item, category})
    res.redirect('/');
}

export { getCreatePage, getCreateItem, getCreateCategory, postItem}