const db = require("../database/models");
const { validationResult } = require("express-validator");

let controller = {
    carrito: async (req, res) => {
        const orden = await db.shopping_cart.findAll({
            where: {
                user_id: req.session.userLogged.id
            },
            include: ["product"]
        });

        res.render("carrito", {
            orden: orden,
        });
    },

    agregarAlCarrito: async (req, res) => {
        await db.shopping_cart.create({
            user_id: req.session.userLogged.id,
            product_id: req.params.id
        })

        res.redirect("/productos/carrito");
    },

    sacarDelCarrito: async (req, res) => {
        await db.shopping_cart.destroy({
            where: {
                user_id: req.session.userLogged.id,
                product_id: req.params.id
            },
            limit: 1
        })

        res.redirect("/productos/carrito");
    },

    detalles: async (req, res) => {
        const id = Number(req.params.id);
        const producto = await db.product.findByPk(id)
        const productos = await db.product.findAll()
        res.render("detalles", {
            producto: producto,
            productos: productos
        });
    },

    productos: async (req, res) => {
        let offset = (req.params.pagina - 1) * 6;

        const productosPaginados = await db.product.findAll({
            limit: 6,
            offset: offset,
            order: [
                ["createdAt", "DESC"]
            ]
        });

        const todosLosProductos = await db.product.findAll()

        res.render("productos", {
            productos: productosPaginados,
            pagina: Number(req.params.pagina),
            todosLosProductos: todosLosProductos
        })
    },

    crear: async (req, res) => {
        let marcas = await db.brand.findAll()
        let type = await db.type.findAll()

        res.render("crear", {
            marcas: marcas,
            tipos: type
        });
    },

    guardar: async (req, res) => {
        const errores = validationResult(req);

        if(!errores.isEmpty()) {
            let marcas = await db.brand.findAll()
            let type = await db.type.findAll()
            return res.render("crear", {
                errors: errores.mapped(),
                oldData: req.body,
                marcas: marcas,
                tipos: type
            })
        }

        await db.product.create({
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
        res.redirect('/')
    },

    editar: async (req, res) => {
        const id = Number(req.params.id);
        const producto = await db.product.findByPk(id, {
            include: ["brand", "type"]
        })
        let marcas = await db.brand.findAll()
        let type = await db.type.findAll()
        res.render("editar", {
            producto: producto,
            marcas: marcas,
            tipos: type
        });
    },

    actualizar: async (req, res) => {
        const errores = validationResult(req);

        if(!errores.isEmpty()) {
            const id = Number(req.params.id);
            const producto = await db.product.findByPk(id);
            return res.render("editar", {
                producto: producto,
                errors: errores.mapped(),
            })
        }

        let id = Number(req.params.id);
        const oldImage = await db.product.findByPk(id).image;
        await db.product.update({
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
        res.redirect("/");
    },

    borrar: async (req, res) => {
        const id = req.params.id;
        await db.product.destroy({
            where: {
                id: id
            }
        }, {
            force: true
        })
        res.redirect("/");
    }
}

module.exports = controller;