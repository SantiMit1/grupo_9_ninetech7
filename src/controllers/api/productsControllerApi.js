const db = require("../../database/models");

let controller = {

    lista: async (req, res) => {
        try {
            const productos = await db.product.findAll({
                attributes: ["id", "name", "description", "image", "price"],
                include: ["type", "brand"],
                limit: req.query.pagina ? 3 : 100000000,
                offset: req.query.pagina ? (req.query.pagina - 1) * 3 : 0
            })

            let data = []
            productos.forEach(producto => {
                producto.image = `${req.headers.host}/img/Productos/${producto.image}`
                data.push({
                    producto,
                    detalle: `${req.headers.host}/productos/detalles/${producto.id}`,
                    detalleApi: `${req.headers.host}/api/productos/detalles/${producto.id}`,
                })
            })

            const count = await db.product.count()

            const countByCategory = {
                "Hardware": await db.product.count({ where: { category_id: 1 } }),
                "Audio y video": await db.product.count({ where: { category_id: 2 } }),
                "Mouse y teclados": await db.product.count({ where: { category_id: 3 } })
            }

            const respuesta = {
                count,
                countByCategory,
                data
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    detalles: async (req, res) => {
        try {
            const { id } = req.params
            const producto = await db.product.findByPk(id, {
                include: ["brand", "type"]
            })
            producto.image = `${req.headers.host}/img/Productos/${producto.image}`

            let respuesta = {
                producto
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },
    
    ultimoProducto: async (req, res) => {
        try {
            let producto = await db.product.findOne({
                order: [["id", "DESC"]],
            })

            producto.image = `${req.headers.host}/img/Productos/${producto.image}`
            

            let respuesta = {
                producto,
                detalle: `${req.headers.host}/productos/detalles/${producto.id}`
            }
            
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    guardar: async (req, res) => {
        try {
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
                producto
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    actualizar: async (req, res) => {
        try {
            let id = Number(req.params.id);
            const oldImage = await db.product.findByPk(id).image;
            const productoActulizado = await db.product.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                enOferta: req.body.enOferta ? req.body.enOferta : null,
                discount: req.body.enOferta ? req.body.discount : null,
                image: req.file ? req.file.filename : oldImage,
                category_id: req.body.category,
                type_id: req.body.type,
                brand_id: req.body.brand
            }, {
                where: {
                    id: id
                }
            })

            let respuesta = {
                productoActulizado
            }

            res.json(productoActulizado);
        } catch (e) {
            res.json(e)
        }
    },

    borrar: async (req, res) => {
        try {
            const id = req.params.id;
            const productoEliminado = await db.product.destroy({
                where: {
                    id: id
                }
            }, {
                force: true
            })
            
            let respuesta = {
                productoEliminado
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    }

}

module.exports = controller;