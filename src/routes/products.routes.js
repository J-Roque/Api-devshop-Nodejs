// src/routes/products.routes.js
const { Router } = require('express');
const productController = require('../controllers/product.controller');

const router = Router();
router.get('/',                       productController.getProducts);
router.get('/coleccion/lenguage/:lenguage', productController.getProductLenguage);
router.get('/coleccion',             productController.getcollection);
router.get('/:coleccion/:tipo_prod', productController.getProduct);
router.get('/coleccion/producto/:prod',          productController.getcollectionProd);
router.get('/coleccion/producto/:prod/:info',   productController.getcollectionProdInfo);

module.exports = router;
