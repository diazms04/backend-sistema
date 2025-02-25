const pool = require("../db");

// Metodo para obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Metodo para  crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error creando usuario:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { getUsers, createUser };
