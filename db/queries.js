import { local_pool } from "./pool.js";

async function getAllItems() {
    const { rows } = await local_pool.query("SELECT * FROM items")
    return rows
}

async function getAllCategries() {
    const { rows } = await local_pool.query("SELECT * FROM categories")
    return rows
}

async function getItem(id) {
    const { rows } = await local_pool.query('SELECT * FROM items WHERE id = ($1)', [id]);
    return rows[0];
}

async function getCategoryById(id) {
    const { rows } = await local_pool.query("SELECT name FROM categories WHERE id = ($1)", [id]);
    const category = rows[0];
    return category;
}

async function getCategoryByName(name) {
    const { rows } = await local_pool.query("SELECT name FROM categories WHERE name LIKE ($1)", [name]);
    const category = rows[0];
    return category;
}

async function getItemsByCatId(id) {
    const { rows } = await local_pool.query('SELECT name FROM categories WHERE cat_id = ($1)', [id]);
    return rows[0]
}

async function  getCatIdByCatName(name) {
    const { rows } = await local_pool.query("SELECT cat_id from categories WHERE name = ($1)", [name])
    return rows[0];
}

async function addItem({item, category}) {
    const category = getCategoryByName(category);
    if (Object.values(category).length < 0) {
        await createCategory(category);
    }
    const cat_id = await getCatIdByCatName(category);
    await local_pool.query("INSERT INTO items (name, cate_id) VALUES ($1, $2)", [item, cat_id]);
}

async function createCategory(category) {
    await local_pool.query('INSERT INTO categories (name) VALUES ($1)', [category])
}

export { getAllItems, getAllCategries, getItem, getItemsByCatId, addItem, createCategory}