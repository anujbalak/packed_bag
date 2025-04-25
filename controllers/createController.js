import { addItem, createCategory } from "../db/queries.js";
import { validationResult, body } from 'express-validator'

export const alphaErr = 'must only contain letters.';
export const lengthErr = 'must be between 1 to 20 characters.'

export const validateItemAndCat = [
    body('item').trim()
        .isLength({min: 1, max: 20}).withMessage(`Item ${lengthErr}`),
    body('category').trim()
        .isAlpha().withMessage(`Category ${alphaErr}`)
        .isLength({min: 1, max: 20}).withMessage(`Category ${lengthErr}`)
]

export const validateItem = [
    body('item').trim()
        .isLength({min: 1, max: 20}).withMessage(`Item ${lengthErr}`),
]

export const validateCategory = [
    body('category').trim()
        .isAlpha().withMessage(`Category ${alphaErr}`)
        .isLength({min: 1, max: 20}).withMessage(`Category ${lengthErr}`)
]

const getCreatePage = (req, res) => {
    res.render('pages/create');
}

const getCreateItem = (req, res) => {
    res.render('pages/create/item');
}

const getCreateCategory = (req, res) => {
    res.render('pages/create/category');
}

const postItem = [ 
    validateItemAndCat,    
    async (req, res) => {
        const { item, category } = req.body;
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).render('pages/create/item', {
                errors: errors.array(),
                name: item,
                category: category
            })
        } 
        await addItem({item, category})
        res.redirect('/');
    }
]

const postCategory = [
    validateCategory,
    async (req, res) => {
        const { category } = req.body;
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).render('pages/create/category', {
                errors: errors.array(),
                name: category
            })
        }
        await createCategory(category);
        res.redirect('/')
    }
]

export { 
    getCreatePage, 
    getCreateItem, 
    getCreateCategory, 
    postItem, 
    postCategory,
}