const express = require("express");
const cors = require("cors"); // <-- Importa CORS
const pool = require("./db");
const app = require("./app");

const port = process.env.PORT || 5500;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Creación automática de la base de datos al arrancar la aplicación
const createTables = async () => {
  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const transactionsTableQuery = `
    CREATE TABLE IF NOT EXISTS transactions (
      id SERIAL PRIMARY KEY,
      user_id INT NOT NULL,
      amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
      type VARCHAR(10) CHECK (type IN ('deposit', 'withdrawal')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  await pool.query(usersTableQuery);
  await pool.query(transactionsTableQuery);
};

// Iniciar el servidor
const startServer = async () => {
  await createTables();
  app.listen(port, () => {
    console.log("");
    console.log("====================================================");
    console.log("|| El servidor está escuchando en localhost:", port, "||");
    console.log("====================================================");
    console.log("");
  });
};

startServer().catch(console.error);
