const mysql = require("promise-mysql");
const config = require("../config");

let pool;

mysql.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  connectionLimit: 10, // opcional
}).then(p => {
  pool = p;
}).catch(err => {
  console.error("Error al crear el pool de conexión:", err);
});

const getConnection = () => {
  if (!pool) {
    throw new Error("La conexión aún no está disponible.");
  }
  return pool;
};

module.exports = {
  getConnection
};
