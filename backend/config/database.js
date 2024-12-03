import { Sequelize } from "sequelize";
import { 
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
 } from "../config/config.js";


const db = new Sequelize ('auth_db', 'root', '', {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    dialect: "mysql"
});

export default db; 