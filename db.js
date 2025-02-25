
// // Configuración de la base de datos
// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "system",
//   password: "144276",
//   port: 5432,
// });

// module.exports = pool;


//Conexion Base de datos en render
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: 'postgresql://postgresql:NdQqifnP7RmVoFVi1pI5S5BojoGW2I9B@dpg-cuuoosnnoe9s73als1u0-a.oregon-postgres.render.com/system_7y16',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
