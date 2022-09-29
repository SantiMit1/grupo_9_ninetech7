const db = require("../database/models");
const { Op } = require("sequelize");

let controller = {
    index: async (req, res) => {
        let productos = await db.product.findAll()
        res.render("home", {
            productos: productos
        });
    },

    busqueda: async (req, res) => {{
        const busqueda = req.query.q.toUpperCase();
        const resultados = await db.product.findAll({
            where: {
                name: {
                    [Op.like]: `%${busqueda}%`
                }
            }
        })
        res.render("resultados", {
            productos: resultados,
            busqueda: busqueda
        })
    }},

    categoria: async (req, res) => {
        const categoria = req.query.q;
        const productos = await db.product.findAll({
            include: ["category"],
            where: {
                category_id: categoria
            }
        })
        res.render("categoria", {
            productos: productos,
            categoria: categoria
        })
    }
}

module.exports = controller;