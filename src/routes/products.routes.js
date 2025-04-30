import { Router } from "express";
import { methods as productController } from "./../controllers/product.controller";
const router = Router();
router.get("/",productController.getProducts);
router.get("/coleccion/lenguage/:lenguage",productController.getProductLenguage);
router.get("/coleccion",productController.getcollection);
router.get("/:coleccion/:tipo_prod",productController.getProduct);
router.get("/coleccion/producto/:prod",productController.getcollectionProd);
router.get("/coleccion/producto/:prod/:info",productController.getcollectionProdInfo);

///coleccion/python/python_dark_hoodie_embroidered_colored
export default router;