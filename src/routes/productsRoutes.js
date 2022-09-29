const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const multerCfg = require("../middlewares/multer")
const upload = multerCfg("Productos");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const productValidations = require("../middlewares/productValidations");

router.get("/carrito", authMiddleware, controller.carrito);
router.get("/detalles/:id", controller.detalles);
router.get("/crear", adminMiddleware, controller.crear);
router.get("/detalles/editar/:id", adminMiddleware, controller.editar);
router.get("/lista/:pagina", controller.productos);

router.post("/crear", adminMiddleware, upload.single("image"),  productValidations, controller.guardar);
router.put("/detalles/editar/:id", adminMiddleware, upload.single("image"), productValidations, controller.actualizar);
router.delete("/detalles/borrar/:id", adminMiddleware, controller.borrar);
router.post("/carrito/agregar/:id", authMiddleware, controller.agregarAlCarrito);
router.delete("/carrito/sacar/:id", authMiddleware, controller.sacarDelCarrito);

module.exports = router;