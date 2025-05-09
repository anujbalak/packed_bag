import { Pool } from "pg";
import 'dotenv/config'

const con = {
    host: process.env.L_HOST,
    user: process.env.L_USER,
    password: process.env.L_PASSWORD,
    database: process.env.L_DATABASE,
    port: process.env.L_PORT
}

const connectionString = process.env.DATABASE_PUBLIC_URL;

const r_con = {
    connectionString: connectionString,
}

const local_pool = new Pool(r_con);

export { local_pool, con, r_con }