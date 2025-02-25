const Transaction = require("../models/transactions");

const createTransaction = async (req, res) => {
  try {
    const { user_id, amount, type } = req.body;

    if (!user_id || !amount || !type) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    const transaction = await Transaction.create(user_id, amount, type);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTransactionsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const transactions = await Transaction.getByUser(user_id);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo las transacciones" });
  }
};

module.exports = { createTransaction, getTransactionsByUser };
