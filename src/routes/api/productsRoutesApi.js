const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/productsControllerApi");
const multerCfg = require("../../middlewares/multer")
const upload = multerCfg("Productos");
const productValidations = require("../../middlewares/productValidations");

router.get("/detalles/:id", controller.detalles);
router.get("/lista/", controller.productos);

router.post("/crear", upload.single("image"),  productValidations, controller.guardar);
router.put("/detalles/editar/:id", upload.single("image"), controller.actualizar);
router.delete("/detalles/borrar/:id", controller.borrar);

module.exports = router;