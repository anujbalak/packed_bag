import { getAllCategries, getAllItems } from "../db/queries.js";

const getIndex = async (req, res) => {
    const items = await getAllItems();
    const categories = await getAllCategries();
    res.render('pages/index', {items, categories});
}

export { getIndex }