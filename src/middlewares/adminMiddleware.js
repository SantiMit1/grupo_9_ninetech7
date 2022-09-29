function adminMiddleware(req, res, next) {
    if(res.locals.userLogged && res.locals.userLogged.role_id == 2) {
        next();
    } else {
        res.redirect("/");
    }

}

module.exports = adminMiddleware;