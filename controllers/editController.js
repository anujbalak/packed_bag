import { getCategoryById, getItem, getItemsByCatId, updateCategory, updateItem } from "../db/queries.js";
import { validateCategory, validateItem } from "./createController.js";
import { validationResult } from "express-validator";

let isEdit = false;

const getEditItem = async (req, res) => {
    const {id} = req.params;
    const item = await getItem(Number(id))
    if (!item) {
        res.render('pages/error', {
            error: 'Item does not exists'
        })
    }
    isEdit = true
    res.render('pages/item', {item, isEdit});
}

const postEditItem = [
    validateItem,
    async (req, res) => {
        const { item } = req.body;
        const { id } = req.params;
        const errors = validationResult(req)
        const itemValues = await getItem(Number(id))
        if (!errors.isEmpty()) {
            isEdit = true;
            return res.status(400).render('pages/item', {
                errors: errors.array(),
                item: itemValues,
                isEdit
            })
        } 
        await updateItem(id, item)
        isEdit = false;
        const updatedItem = await getItem(Number(id))
        const category = await getCategoryById(Number(updatedItem.cat_id));
        res.render('pages/item', {item: updatedItem, isEdit, category});
    }
]

const getEditCategory = async (req, res) => {
    const {id} = req.params;
    const category = await getCategoryById(Number(id))
    if (!category) {
        res.render('pages/error', {
            error: 'Item does not exists'
        })
    }
    isEdit = true
    res.render('pages/category', {category, isEdit});
}

const postEditCategory = [
    validateCategory,
    async (req, res) => {
        const { category } = req.body;
        const { id } = req.params;
        const errors = validationResult(req)
        const catValues = await getCategoryById(Number(id))
        if (!errors.isEmpty()) {
            isEdit = true;
            return res.status(400).render('pages/category', {
                errors: errors.array(),
                category: catValues,
                isEdit
            })
        } 
        await updateCategory(id, category)
        isEdit = false;
        const items = await getItemsByCatId(Number(id))
        const updatedCategory = await getCategoryById(Number(id));
        console.log(updatedCategory)
        res.render('pages/category', {items, isEdit, category: updatedCategory});
    }
]

export { 
    getEditItem, 
    postEditItem,
    getEditCategory,
    postEditCategory,
}