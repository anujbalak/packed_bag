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
    const { rows } = await local_pool.query("SELECT * FROM categories WHERE id = ($1)", [id]);
    const category = rows[0];
    return category;
}

async function getCategoryByName(name) {
    const { rows } = await local_pool.query("SELECT name FROM categories WHERE name LIKE ($1)", [`%${name}%`]);
    return rows;
}

async function getItemsByCatId(id) {
    const { rows } = await local_pool.query('SELECT * FROM items WHERE cat_id = ($1)', [id]);
    return rows
}

async function  getCatIdByCatName(name) {
    const { rows } = await local_pool.query("SELECT id from categories WHERE name = ($1)", [name])
    return rows[0].id;
}

async function addItem({item, category}) {
    const cat = await getCategoryByName(category);
    if (cat.length <= 0) {
        await createCategory(category);
    }
    const cat_id = await getCatIdByCatName(category);
    await local_pool.query("INSERT INTO items (name, cat_id) VALUES ($1, $2)", [item, cat_id]);
}

async function createCategory(category) {
    const cat = await getCategoryByName(category)
    if (cat.length > 0) {
        return;
    }
    await local_pool.query('INSERT INTO categories (name) VALUES ($1)', [category])
}

async function updateItem(id, name) {
    await local_pool.query('UPDATE items SET name = ($2) WHERE id = ($1)', [id, name])
}

async function updateCategory(id, name) {
    await local_pool.query('UPDATE categories SET name = ($2) WHERE id = ($1)', [id, name])
}

async function deleteItem(id) {
    await local_pool.query("DELETE FROM items WHERE id = ($1)", [id]);
}

async function deleteCategory(id) {
    await local_pool.query('DELETE FROM categories WHERE id = ($1)', [id]);
    await local_pool.query('DELETE FROM items WHERE cat_id = ($1)', [id]);
}

export { 
    getAllItems, 
    getAllCategries, 
    getItem, 
    getItemsByCatId, 
    addItem, 
    createCategory, 
    getCatIdByCatName, 
    getCategoryById, 
    updateItem, 
    deleteItem,
    updateCategory,
    deleteCategory,
}