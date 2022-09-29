const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("nombre").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isLength({min: 2}).withMessage("El nombre es demasiado corto"),

    body("apellido").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isLength({min: 2}).withMessage("El apellido es demasiado corto"),

    body("email").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isEmail().withMessage("Debes escribir un formato de correo válido"),

    body("localidad").notEmpty().withMessage("Este campo no puede estar vacio"),

    body("direccion").notEmpty().withMessage("Este campo no puede estar vacio"),

    body("numero").notEmpty().withMessage("Este campo no puede estar vacio"),

    body("password").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .isLength({ min: 8 }).withMessage("Tu contraseña debe tener al menos 8 caracteres"),

    body("password2").notEmpty().withMessage("Este campo no puede estar vacio").bail()
    .custom((value, {req}) => {
        if (req.body.password !== value) {
            throw new Error("Las contraseñas no coinciden")
        }

        return true
    }),

    body("profilePic").custom((value, {req}) => {
        if(!req.file) {
            return true;
        }

        const extentions = [".png", ".jpeg", ".jpg"];
        const imageExtention = path.extname(req.file.originalname);

        if(extentions.indexOf(imageExtention) == -1) {
            throw new Error("Archivo invalido, solo se permiten los siguientes tipos de archivos: " + extentions.join(", "));
        }

        return true;
    })
]