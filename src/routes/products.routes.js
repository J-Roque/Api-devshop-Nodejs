const { Router } = require("express");
const productController = require("../controllers/product.controller"); // Importa directamente el controlador

const router = Router();

// Definir las rutas
router.get("/", productController.getProducts);
router.get("/coleccion/lenguage/:lenguage", productController.getProductLenguage);
router.get("/coleccion", productController.getcollection);
router.get("/:coleccion/:tipo_prod", productController.getProduct);
router.get("/coleccion/producto/:prod", productController.getcollectionProd);
router.get("/coleccion/producto/:prod/:info", productController.getcollectionProdInfo);

// Exportar las rutas
module.exports = router;
