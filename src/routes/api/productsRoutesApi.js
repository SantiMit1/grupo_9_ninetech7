const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/productsControllerApi");

router.get("/", controller.lista);
router.get("/detalles/:id", controller.detalles);

module.exports = router;