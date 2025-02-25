const express = require("express");
const { createTransaction, getTransactionsByUser } = require("../controllers/transactions");

const router = express.Router();

// Define las rutas de los metodos para transactions
router.post("/transactions", createTransaction);
router.get("/transactions/:user_id", getTransactionsByUser);

module.exports = router;
