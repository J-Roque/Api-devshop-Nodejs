import { getConnection } from "./../database/database";

// Función para formatear los resultados
const formatResults = (result) => {
  return result.map(row => ({
    id_prod: row.id_prod,
    nombre_prod: row.nombre_prod,
    precio: row.precio,
    cod_coleccion: row.cod_coleccion,
    thema_imagen: JSON.parse(row.thema_imagen),
    collecion: row.collecion,
    arte: JSON.parse(row.arte),
    tipo_prod: row.tipo_prod,
    color: JSON.parse(row.color),
    talla: JSON.parse(row.talla),
    descripcion: JSON.parse(row.descripcion)
  }));
};

const getProductLenguage = async (req, res) => {
  try {
    const { lenguage } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT " +
          "a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion, " +
          "b.arte, a.tipo_prod, b.color, b.talla, b.descripcion " +
      "FROM product a " +
      "INNER JOIN producto_detalle b ON a.id_prod = b.id_prod " +
      "WHERE a.collecion = ?", [lenguage]
    );

    const formattedResults = formatResults(result);
    res.json(formattedResults);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).send("Error al obtener los productos");
  }
};

const getProducts = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT nombre_prod, precio, thema_imagen, collecion, tipo_prod FROM product");
    const formattedResults = result.map(row => ({
      nombre_prod: row.nombre_prod,
      precio: row.precio,
      thema_imagen: JSON.parse(row.thema_imagen),
      collecion: row.collecion,
      tipo_prod: row.tipo_prod,
    }));
    res.json(formattedResults);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).send("Error al obtener los productos");
  }
};

const getProduct = async (req, res) => {
  try {
    const { coleccion, tipo_prod } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT " +
      "a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion, " +
      "b.arte, a.tipo_prod, b.color, b.talla, b.descripcion " +
      "FROM product a " +
      "INNER JOIN producto_detalle b ON a.id_prod = b.id_prod " +
      "WHERE a.collecion = ? AND a.tipo_prod = ? LIMIT 1",
      [coleccion, tipo_prod]
    );

    const formattedResults = formatResults(result);
    res.json(formattedResults);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).send("Error al obtener los productos");
  }
};

const getcollection = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM coleccion_producto");
    res.json(result);
  } catch (error) {
    console.error("Error al obtener las colecciones:", error);
    res.status(500).send("Error al obtener las colecciones");
  }
};

const getcollectionProd = async (req, res) => {
  try {
    const { prod } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT precio, thema_imagen, collecion, nombre_prod FROM product WHERE collecion = ?", [prod]
    );

    const formattedResults = result.map(row => ({
      nombre_prod: row.nombre_prod,
      precio: row.precio,
      thema_imagen: JSON.parse(row.thema_imagen),
      collecion: row.collecion,
    }));
    res.json(formattedResults);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).send("Error al obtener los productos");
  }
};

const getcollectionProdInfo = async (req, res) => {
  try {
    const { prod, info } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT " +
          "a.id_prod, a.nombre_prod, a.precio, a.cod_coleccion, a.thema_imagen, a.collecion, " +
          "b.arte, a.tipo_prod, b.color, b.talla, b.descripcion " +
      "FROM product a " +
      "INNER JOIN producto_detalle b ON a.id_prod = b.id_prod " +
      "WHERE a.collecion = ? AND a.nombre_prod = ?", [prod, info]
    );

    const formattedResults = formatResults(result);
    res.json(formattedResults);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).send("Error al obtener los productos");
  }
};

export const methods = {
  getProductLenguage,
  getProducts,
  getcollection,
  getProduct,
  getcollectionProd,
  getcollectionProdInfo
};