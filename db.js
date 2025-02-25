
// Configuración de la base de datos
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "system",
  password: "144276",
  port: 5432,
});

module.exports = pool;

