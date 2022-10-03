const db = require("../../database/models")

let controller = {

    lista: async (req, res) => {
        try {
            const users = await db.user.findAll({
                attributes: ["id", "nombre", "apellido", "email"]
            })

            users.forEach(user => {
                user.detalle =  `${req.headers.host}/users/detalle/${user.id}`
            })

            const respuesta = {
                count: users.length,
                users
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
                attributes: {exclude: ["password", "token"]}
            })
            user.profilePic = `${req.headers.host}/img/Users/${user.profilePic}`

            res.json(user)
        } catch (e) {
            res.json(e)
        }
    }

}

module.exports = controller;