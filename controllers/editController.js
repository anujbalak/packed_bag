import { getItem, updateItem } from "../db/queries.js";
import { validateItem } from "./createController.js";
import { validationResult } from "express-validator";

export let isEdit = false;

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
        res.render('pages/item', {item: itemValues, isEdit});
    }
]

export { getEditItem, postEditItem}