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
<<<<<<< HEAD
    // ssl: connectionString.includes('railway') ? { rejectUnauthorized: false } : false
=======
    ssl: connectionString.includes('railway') ? { rejectUnauthorized: false } : false
>>>>>>> 80a611ed1bf1f845d099b53ed067e51b63bb1acd
}

const local_pool = new Pool(r_con);

export { local_pool, con, r_con }