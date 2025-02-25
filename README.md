# Backend del Sistema

El proyecto tiene la siguiente estructura
## 📂 Estructura del Proyecto

/backend │── /models # Definición de modelos de base de datos │── /controllers # Lógica de negocio y controladores │── /routes # Definición de rutas para la API │── /config # Configuración de base de datos │── app.js # Configuración de Express y middlewares │── index.js # Punto de entrada del servidor │── package.json # Dependencias del proyecto │── README.md # Documentación

## ⚙️ Configuración de la Base de Datos

El backend usa **PostgreSQL** y se esta ejecutando en modo **producción**.

### 📌 **Configuración Local**
Primeramente se debe correr posqresSQL en consola, iniciar sesion con sus credenciales y crear una base de datos con el siguiente comando
```
CREATE DATABASE system;
```

Para correrlo en una base de datos local puede descomentar el codigo que se encuentra en `db.js`:
Y configura las variables con sus datos, 

```
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",    //Su usuario de postgres
  host: "localhost",   
  database: "system", //nombre de la base de datos
  password: "144276", // contraseña
  port: 5432,
});

module.exports = pool;

```
Y tiene que comentar el siguiente codigo:
```
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: 'postgresql://postgresql:NdQqifnP7RmVoFVi1pI5S5BojoGW2I9B@dpg-cuuoosnnoe9s73als1u0-a.oregon-postgres.render.com/system_7y16',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
```


Para correr el proyecto se deben colocar los siguientes comandos:

```
npm install
npm run dev
```

Una vez se inicie por primera vez, automaticamente creara las tablas en la base de datos.
