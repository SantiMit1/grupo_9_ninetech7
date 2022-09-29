function guestMiddleware (req, res, next) {
    if (res.locals.isLogged) {
        return res.redirect("/users/profile");
    }

    next()
}

module.exports = guestMiddleware;