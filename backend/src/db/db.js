
//Conexion a MySQL usando mysql2 (modo promise)
import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "JaimeyErik100",
  database: "portfolio_db",
});
