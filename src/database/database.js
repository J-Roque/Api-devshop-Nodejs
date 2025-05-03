// src/database/database.js
const mysql  = require('mysql2/promise');
const config = require('../config');

// Al arrancar, creamos el pool y lo exportamos
const pool = mysql.createPool({
  host:            config.host,
  port:            config.port,
  user:            config.user,
  password:        config.password,
  database:        config.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit:      0
});

// Test rápido de conexión
(async () => {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    console.log('✅ Conexión con la base de datos establecida con éxito');
  } catch (err) {
    console.error('❌ Error al conectar con la base de datos:', err);
    process.exit(1);
  }
})();

module.exports = pool;
