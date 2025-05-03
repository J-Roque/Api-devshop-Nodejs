// src/controllers/product.controller.js
const { getConnection } = require('../database/database');

const formatResults = result =>
  result.map(row => ({
    id_prod:      row.id_prod,
    nombre_prod:  row.nombre_prod,
    precio:       row.precio,
    cod_coleccion:row.cod_coleccion,
    thema_imagen: JSON.parse(row.thema_imagen),
    collecion:    row.collecion,
    arte:         JSON.parse(row.arte),
    tipo_prod:    row.tipo_prod,
    color:        JSON.parse(row.color),
    talla:        JSON.parse(row.talla),
    descripcion:  JSON.parse(row.descripcion)
  }));

const getProducts = async (req, res) => {
  try {
    const connection = getConnection();
    const result     = await connection.query(
      'SELECT nombre_prod, precio, thema_imagen, collecion, tipo_prod FROM product'
    );
    res.json(formatResults(result));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los productos');
  }
};

const getProductLenguage = async (req, res) => {
  try {
    const { lenguage } = req.params;
    const connection   = getConnection();
    const result       = await connection.query(
      'SELECT a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion, ' +
      'b.arte, a.tipo_prod, b.color, b.talla, b.descripcion ' +
      'FROM product a INNER JOIN producto_detalle b ON a.id_prod = b.id_prod ' +
      'WHERE a.collecion = ?', [lenguage]
    );
    res.json(formatResults(result));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los productos por lenguaje');
  }
};

const getProduct = async (req, res) => {
  try {
    const { coleccion, tipo_prod } = req.params;
    const connection = getConnection();
    const result     = await connection.query(
      'SELECT a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion, ' +
      'b.arte, a.tipo_prod, b.color, b.talla, b.descripcion ' +
      'FROM product a INNER JOIN producto_detalle b ON a.id_prod = b.id_prod ' +
      'WHERE a.collecion = ? AND a.tipo_prod = ? LIMIT 1',
      [coleccion, tipo_prod]
    );
    res.json(formatResults(result));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el producto');
  }
};

const getcollection = async (req, res) => {
  try {
    const connection = getConnection();
    const result     = await connection.query('SELECT * FROM coleccion_producto');
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener las colecciones');
  }
};

const getcollectionProd = async (req, res) => {
  try {
    const { prod }     = req.params;
    const connection   = getConnection();
    const result       = await connection.query(
      'SELECT precio, thema_imagen, collecion, nombre_prod FROM product WHERE collecion = ?',
      [prod]
    );
    res.json(formatResults(result));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener productos de la colección');
  }
};

const getcollectionProdInfo = async (req, res) => {
  try {
    const { prod, info } = req.params;
    const connection     = getConnection();
    const result         = await connection.query(
      'SELECT a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion, ' +
      'b.arte, a.tipo_prod, b.color, b.talla, b.descripcion ' +
      'FROM product a INNER JOIN producto_detalle b ON a.id_prod = b.id_prod ' +
      'WHERE a.collecion = ? AND a.nombre_prod = ?',
      [prod, info]
    );
    res.json(formatResults(result));
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
