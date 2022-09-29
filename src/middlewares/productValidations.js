const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("name").notEmpty().withMessage("El producto debe tener un nombre"),
    body("description").notEmpty().withMessage("La descripción del producto no puede estar vacia").bail()
    .isLength({ min: 20 }).withMessage("La descripción debe tener al menos 20 caracteres"),

    body("image").custom((value, {req}) => {
        if(!req.file) {
            return true;
        }

        const extentions = [".png", ".jpeg", ".jpg"];
        const imageExtention = path.extname(req.file.originalname);

        if(extentions.indexOf(imageExtention) == -1) {
            throw new Error("Archivo invalido, solo se permiten los siguientes tipos de archivos: " + extentions.join(", "));
        }

        return true;
    }),

    body("discount").custom((value, {req}) => {
        if (!req.body.enOferta) {
            return true;
        }

        if(value == '') {
            throw new Error("Si el producto está en oferta, debe tener un descuento")
        }

        if(value > 100 || value < 1) {
            throw new Error("El descuento debe ser un numero entre 1 y 100")
        }

        return true;
    }),

    body("price").notEmpty().withMessage("El precio no puede estar vacio").bail()
    .isDecimal().withMessage("El precio debe ser un numero decimal"),

    body("category").notEmpty().withMessage("El producto debe tener una categoria"),

    body("brand").notEmpty().withMessage("El producto debe tener una marca"),

    body("type").notEmpty().withMessage("Especificar el tipo de producto")
]