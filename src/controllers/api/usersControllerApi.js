const db = require("../../database/models")

let controller = {

    lista: async (req, res) => {
        try {
            const users = await db.user.findAll({
                attributes: ["id", "nombre", "apellido", "email"]
            })

            let data = []

            users.forEach(user => {
                data.push({
                    user,
                    detalle: `${req.headers.host}/api/users/${user.id}`
                })
            })

            const respuesta = {
                count: users.length,
                data
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    },

    detalle: async (req, res) => {
        try {
            const { id } = req.params
            const user = await  db.user.findByPk(id, {
                include: ["domicilio"],
                attributes: {exclude: ["password", "token", "role_id"]}
            })
            user.profilePic = `${req.headers.host}/img/Users/${user.profilePic}`

            res.json(user)
        } catch (e) {
            res.json(e)
        }
    },

    ultimoUser: async (req, res) => {
        try {
            const user = await db.user.findOne({
                order: [["id", "DESC"]],
                include: ["domicilio"],
                attributes: {exclude: ["password", "token", "role_id"]}
            })

            user.profilePic = `${req.headers.host}/img/Users/${user.profilePic}`

            let respuesta = {
                user
            }

            res.json(respuesta)
        } catch (e) {
            res.json(e)
        }
    }
}

module.exports = controller;