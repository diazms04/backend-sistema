const pool = require("../db");

class User {
  // Método para crear un nuevo usuario
  static async create(name, email) {

    // Verificacíon para el email
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (existingUser.rows.length > 0) {
      throw new Error("El email ya está en uso.");
    }

    const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";


    const values = [name, email];
    const result = await pool.query(query, values);


    return result.rows[0];
  }

  //Metodo  para obtener todos los usuarios
  static async getAll() {
    const query = "SELECT * FROM users";
    const result = await pool.query(query);
    
    return result.rows;
  }
}

module.exports = User;
