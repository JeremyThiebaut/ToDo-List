import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
const pool = mysql.createPool({
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT),
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_DATABASE),
});

export default pool;