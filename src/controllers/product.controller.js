const pool = require('../database/database');

// Helper para parsear JSON de forma segura
function safeParse(value) {
  if (typeof value !== 'string') return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const formatResults = rows =>
  rows.map(row => ({
    id_prod:       row.id_prod,
    nombre_prod:   row.nombre_prod,
    precio:        row.precio,
    cod_coleccion: row.cod_coleccion,
    thema_imagen:  safeParse(row.thema_imagen),
    collecion:     row.collecion,
    arte:          safeParse(row.arte),
    tipo_prod:     row.tipo_prod,
    color:         safeParse(row.color),
    talla:         safeParse(row.talla),
    descripcion:   safeParse(row.descripcion),
  }));

const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT nombre_prod, precio, thema_imagen, collecion, tipo_prod FROM productos'
    );
    res.json(formatResults(rows));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los productos');
  }
};
const getProductLenguage = async (req, res) => {
  try {
    const { lenguage } = req.params;
    const [rows] = await pool.query(
      `SELECT a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion,
              b.arte, a.tipo_prod, b.color, b.talla, b.descripcion
       FROM productos a
       INNER JOIN producto_detalle b ON a.id_prod = b.id_prod
       WHERE a.collecion = ?`,
      [lenguage]
    );
    res.json(formatResults(rows));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los productos por lenguaje');
  }
};

const getProduct = async (req, res) => {
  try {
    const { coleccion, tipo_prod } = req.params;
    const [rows] = await pool.query(
      `SELECT a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion,
              b.arte, a.tipo_prod, b.color, b.talla, b.descripcion
       FROM productos a
       INNER JOIN producto_detalle b ON a.id_prod = b.id_prod
       WHERE a.collecion = ? AND a.tipo_prod = ? LIMIT 1`,
      [coleccion, tipo_prod]
    );
    res.json(formatResults(rows));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el producto');
  }
};

const getcollection = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM coleccion_producto');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener las colecciones');
  }
};

const getcollectionProd = async (req, res) => {
  try {
    const { prod } = req.params;
    const [rows] = await pool.query(
      'SELECT precio, thema_imagen, collecion, nombre_prod FROM productos WHERE collecion = ?',
      [prod]
    );
    res.json(formatResults(rows));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener productos de la colección');
  }
};

const getcollectionProdInfo = async (req, res) => {
  try {
    const { prod, info } = req.params;
    const [rows] = await pool.query(
      `SELECT a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion,
              b.arte, a.tipo_prod, b.color, b.talla, b.descripcion
       FROM productos a
       INNER JOIN producto_detalle b ON a.id_prod = b.id_prod
       WHERE a.collecion = ? AND a.nombre_prod = ?`,
      [prod, info]
    );
    res.json(formatResults(rows));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener info de producto');
  }
};

module.exports = {
  getProducts,
  getProductLenguage,
  getProduct,
  getcollection,
  getcollectionProd,
  getcollectionProdInfo
};
