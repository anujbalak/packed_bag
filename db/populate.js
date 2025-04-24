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
    ('Netherrack', 1);
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
    ('Items');
`
async function main() {
    console.log('...seeding');
    const client = new Client(con);
    await client.connect()
    await client.query(pushCategories);
    await client.end();
    console.log('done');
}
main()
