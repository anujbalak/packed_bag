import { Client } from "pg"
import { con } from "./pool.js"

const create_items_table = `
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    cat_id INTEGER
);
`
const pushItems = `
INSERT INTO items (name, cat_id)
VALUES
    ('Diamond Sword', 2),
    ('Cobblestone', 1),
    ('Netherrack', 1),
    ('Forest', 3),
    ('Taiga', 3),
    ('Blaze', 4),
    ('Ghast', 4);
`

const create_cat_table = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 )
);
`

const pushCategories = `
INSERT INTO categories (name)
VALUES
    ('Blocks'),
    ('Items'),
    ('Biome'),
    ('Mobs');
`
async function main() {
    console.log('...seeding');
    const client = new Client(con);
    await client.connect()
    await client.query(pushCategories);
    await client.end();
    console.log('done');
}

export async function reset() {
    console.log('...resetting')
    const client = new Client(con);
    await client.connect();
    await client.query('DROP TABLE IF EXISTS items;')
    await client.query('DROP TABLE IF EXISTS categories;')
    await client.query(create_items_table)
    await client.query(pushItems);
    await client.query(create_cat_table);
    await client.query(pushCategories);
    await client.end();
    console.log('done!');
}
