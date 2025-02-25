const pool = require("../db");

class Transaction {
  static async create(user_id, amount, type) {
    if (amount <= 0) {
      throw new Error("El monto debe ser mayor a cero");
    }

    if (!["deposit", "withdrawal"].includes(type)) {
      throw new Error("El tipo de transacción debe ser 'deposit' o 'withdrawal'");
    }

    const query = `
      INSERT INTO transactions (user_id, amount, type, created_at) 
      VALUES ($1, $2, $3, NOW()) 
      RETURNING *;
    `;
    const values = [user_id, amount, type];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getByUser(user_id) {
    const query = "SELECT * FROM transactions WHERE user_id = $1 ORDER BY created_at DESC";
    const result = await pool.query(query, [user_id]);
    return result.rows;
  }
}

module.exports = Transaction;
