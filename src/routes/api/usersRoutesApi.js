const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/usersControllerApi");

router.get("/", controller.lista)
router.get("/lastUser", controller.ultimoUser)
router.get("/:id", controller.detalle)

module.exports = router;