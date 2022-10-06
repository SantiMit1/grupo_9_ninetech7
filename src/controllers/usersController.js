const db = require("../database/models")
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let controller = {
    login: (req, res) => {
        res.render("login");
    },

    register: (req, res) => {
        res.render("register");
    },

    profile: (req, res) => {
        res.render("perfil");
    },

    editProfile: async (req, res) => {
        try {
            const profileId = req.session.userLogged.id;
            let profileToEdit = await db.user.findByPk(profileId);

            const errores = validationResult(req)
            if (!errores.isEmpty()) {
                return res.render("perfil", {
                    user: profileToEdit,
                    errors: errores.mapped(),
                    oldData: req.body
                })
            }

            await db.domicilio.update({
                localidad: req.body.localidad,
                direccion: req.body.direccion,
                numero: req.body.numero
            },
                {
                    where: {
                        user_id: profileId
                    }
                })

            await db.user.update({
                profilePic: req.file ? req.file.filename : profileToEdit.profilePic
            },
                {
                    where: {
                        id: profileId
                    }
                })

            profileToEdit = await db.user.findByPk(profileId);
            req.session.userLogged = profileToEdit

            res.redirect("/users/profile");
        } catch (e) {
            res.json(e)
        }
    },

    processRegistration: async (req, res) => {
        try {
            const errores = validationResult(req);
            if (!errores.isEmpty()) {
                return res.render("register", {
                    errors: errores.mapped(),
                    oldData: req.body
                })
            }

            delete req.body.password2;

            let userInDB = await db.user.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (userInDB) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }

            await db.user.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                profilePic: req.file ? req.file.filename : "default.jpg",
                token: bcrypt.hashSync(String(Date.now()), 10),
                role_id: 1
            })

            await db.domicilio.create({
                localidad: req.body.localidad,
                direccion: req.body.direccion,
                numero: req.body.numero,
                user_id: user.id
            })


            res.redirect("/users/login")
        } catch (e) {
            res.json(e)
        }
    },

    processLogin: async (req, res) => {
        try {
            const errores = validationResult(req);

            if(!errores.isEmpty()) {
                return res.render("login", {
                    errors: errores.mapped(),
                    oldData: req.body
                })
            }

            let userToLogIn = await db.user.findOne({
                where: {
                    email: req.body.email
                },
                include: ["domicilio"]
            })

            if (userToLogIn) {
                let passwordOk = bcrypt.compareSync(req.body.password, userToLogIn.password);
                if (passwordOk) {
                    delete userToLogIn.password;
                    req.session.userLogged = userToLogIn;

                    if (req.body.remember) {
                        res.cookie("token", userToLogIn.token, { maxAge: 1000 * 60 * 60 * 24 * 30});
                    }

                    res.redirect("/users/profile");
                }
            }

            return res.render("login", {
                errors: {
                    password: {
                        msg: "Las credenciales son invalidas"
                    }
                },
                oldData: req.body
            })
        } catch (e) {
            res.json(e)
        }
    },

    logout: (req, res) => {
        res.clearCookie("token");
        req.session.destroy();
        res.redirect("/")
    }
}

module.exports = controller;