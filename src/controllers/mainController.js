const db = require("../database/models");
const { Op } = require("sequelize");

let controller = {
    index: async (req, res) => {
        try {
            let productos = await db.product.findAll()
            res.render("home", {
                productos: productos
            });
        }
        catch (e) {
            res.json(e)
        }
    },

    busqueda: async (req, res) => {
        try {
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
        }
        catch (e) {
            res.json(e)
        }
    },

    categoria: async (req, res) => {
        try {
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
        } catch (e) {
            res.json(e)
        }
    }
}

module.exports = controller;