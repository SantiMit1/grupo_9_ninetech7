const express = require("express");
const router = express.Router();
const multerCfg = require("../../middlewares/multer")
const upload = multerCfg("Productos");
const controller = require("../../controllers/api/productsControllerApi");

router.get("/", controller.lista);
router.get("/detalles/:id", controller.detalles);
router.get("/busqueda", controller.busqueda);
router.get("/ultimo", controller.ultimoProducto);
router.get("/marcas", controller.marcas);
router.get("/tipos", controller.tipos);

router.post("/crear", upload.single("image"), controller.guardar);
router.put("/detalles/editar/:id", upload.single("image"), controller.actualizar);
router.delete("/detalles/borrar/:id", controller.borrar);

module.exports = router;