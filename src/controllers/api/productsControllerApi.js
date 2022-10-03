const db = require("../../database/models");
const { validationResult } = require("express-validator");

let controller = {

    detalles: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const producto = await db.product.findByPk(id, {
                include: ["category", "brand", "type"]
            })
            let respuesta = {
                request: `${req.headers.host}/api/productos/detalles/${req.params.id}`,
                data: {
                    producto
                }
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    productos: async (req, res) => {
        try {
            const todosLosProductos = await db.product.findAll({
                order: [["id", "DESC"]],
                include: ["category", "type", "brand"]
            })

            let respuesta = {
                request: `${req.headers.host}/api/productos/lista`,
                data: {
                    todosLosProductos
                }
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    guardar: async (req, res) => {
        try {
            const errores = validationResult(req);

            if (!errores.isEmpty()) {
                return res.json(errores)
            }

            let producto = await db.product.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                enOferta: req.body.enOferta,
                discount: req.body.discount,
                image: req.file ? req.file.filename : "default.png",
                category_id: req.body.category,
                type_id: req.body.type,
                brand_id: req.body.brand
            })
            let respuesta = {
                request: `${req.headers.host}/api/productos/crear`,
                data: {
                    producto
                }
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    actualizar: async (req, res) => {
        try {
            const errores = validationResult(req);

            if (!errores.isEmpty()) {
                return res.json(errores)
            }

            let id = Number(req.params.id);
            const oldData = await db.product.findByPk(id);
            let producto = await db.product.update({
                name: req.body.name ? req.body.name : oldData.name,
                description: req.body.description ? req.body.description : oldData.description,
                price: req.body.price ? req.body.price : oldData.price,
                enOferta: req.body.enOferta ? req.body.enOferta : oldData.enOferta,
                discount: req.body.enOferta && req.body.discount ? req.body.discount : oldData.discount,
                image: req.file ? req.file.filename : oldData.image,
                category_id: req.body.category ? req.body.category : oldData.category,
                type_id: req.body.type ? req.body.type : oldData.type,
                brand_id: req.body.brand ? req.body.brand : oldData.brand
            }, {
                where: {
                    id: id
                }
            })
            let productoEditado = await db.product.findByPk(id)
            let respuesta = {
                request: `${req.headers.host}/api/productos/detalles/editar/${req.params.id}`,
                data: {
                    productoEditado
                }
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    borrar: async (req, res) => {
        try {
            const id = Number(req.params.id);
            let productoBorrado = await db.product.findByPk(id)
            await db.product.destroy({
                where: {
                    id: id
                }
            }, {
                force: true
            })
            let respuesta = {
                request: `${req.headers.host}/api/productos/detalles/borrar/${req.params.id}`,
                data: {
                    productoBorrado
                }
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    }
}

module.exports = controller;