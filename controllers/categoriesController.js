import { getAllCategries, getCategoryById, getItemsByCatId } from "../db/queries.js"

let isEdit = false;
const getCatPage = async (req, res) => {
    const categories = await getAllCategries();
    res.render('pages/categories', {categories});
}

const catPage = async (req, res) => {
    const { catId } = req.params;
    const category = await getCategoryById(Number(catId)); 
    const items = await getItemsByCatId(Number(catId));

    if (!category) {
        return res.status(400).render('pages/error', {
            error: 'Following category does not exists.',
        })
    }
    res.render('pages/category', {
        category, items, isEdit
    })

}

export {
    getCatPage,
    catPage
}