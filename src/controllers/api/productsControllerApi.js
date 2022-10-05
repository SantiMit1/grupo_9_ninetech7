const db = require("../../database/models");

let controller = {

    lista: async (req, res) => {
        try {
            const productos = await db.product.findAll({
                attributes: ["id", "name", "description", "image"],
                include: ["type", "brand"],
                limit: req.query.pagina ? 3 : 100000000,
                offset: req.query.pagina ? (req.query.pagina - 1) * 3 : 0
            })

            productos.forEach(producto => {
                producto.detalle = `${req.headers.host}/productos/detalle/${producto.id}`
                producto.image = `${req.headers.host}/img/Productos/${producto.image}`
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
                productos
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
    }

}

module.exports = controller;