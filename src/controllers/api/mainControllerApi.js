const db = require("../../database/models");
const { Op } = require("sequelize");

let controller = {

    busqueda: async (req, res) => {
        try {
            const busqueda = req.query.q.toUpperCase();
            const resultados = await db.product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${busqueda}%`
                    }
                },
                include: ["category", "brand", "type"]
            })
            let respuesta = {
                request: `${req.headers.host}/api/busqueda?q=${req.query.q}`,
                data: {
                    resultados
                }
            }
            res.json(respuesta)
        }
        catch (e) {
            res.json(e)
        }
    },

    categoria: async (req, res) => {
        try {
            const categoria = req.query.q;
            const nombreCategoria = await db.category.findByPk(categoria);
            const productos = await db.product.findAll({
                include: ["category", "brand", "type"],
                where: {
                    category_id: categoria
                }
            })
            let respuesta = {
                request: `${req.headers.host}/api/categoria?q=${req.query.q}`,
                data: {
                    categoria: nombreCategoria.name,
                    productos
                }
            }
            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    }
}

module.exports = controller;