// src/database/database.js
const mysql  = require('promise-mysql');
const config = require('../config');

const pool = mysql.createPool({
  host:     config.host,
  database: config.database,
  port:     config.port,
  user:     config.user,
  password: config.password,
  connectionLimit: 10
});

const getConnection = () => pool;

module.exports = { getConnection };
