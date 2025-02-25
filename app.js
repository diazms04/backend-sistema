const express = require("express");
const cors = require("cors"); // Importa CORS
const app = express();

const usersRoutes = require("./routes/users");
const transactionRoutes = require("./routes/transactions");

// Habilitar CORS para permitir solicitudes desde Angular
app.use(cors({
  origin: "http://localhost:4200", // Permitir solo peticiones desde Angular
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));

// Middleware para procesar JSON
app.use(express.json());

// Definir rutas
app.use("/api", usersRoutes);
app.use("/api", transactionRoutes);

module.exports = app;
