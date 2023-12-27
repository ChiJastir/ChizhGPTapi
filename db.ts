import {Pool} from "pg";

const pool = new Pool({
    user: 'chijastir',
    password: 'admin',
    host: '77.222.43.35',
    port: 5432,
    database: 'chizhgpt'
})
export default pool