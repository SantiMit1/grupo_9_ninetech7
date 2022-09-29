function authMiddleware(req, res, next) {
    if(!res.locals.isLogged) {
        return res.redirect("/users/login");
    }

    next();
}

module.exports = authMiddleware;