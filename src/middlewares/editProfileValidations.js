const { body } = require("express-validator");
const path = require("path");
const fs = require("fs");

module.exports = [
    body("localidad").notEmpty().withMessage("Este campo no puede estar vacio"),

    body("direccion").notEmpty().withMessage("Este campo no puede estar vacio"),

    body("numero").notEmpty().withMessage("Este campo no puede estar vacio"),

    body("profilePic").custom((value, {req}) => {
        if(!req.file) {
            return true;
        }

        const extentions = [".png", ".jpeg", ".jpg", ".gif"];
        const imageExtention = path.extname(req.file.originalname);

        if(extentions.indexOf(imageExtention) == -1) {
            fs.unlinkSync(path.resolve(__dirname, "../../public/img/Users/", req.file.filename));
            throw new Error("Archivo invalido, solo se permiten los siguientes tipos de archivos: " + extentions.join(", "));
        }

        return true;
    })
]