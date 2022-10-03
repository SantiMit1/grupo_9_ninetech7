//requires
const express = require('express');
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const cookie = require("cookie-parser");
const session = require("express-session");
const userLogged = require("./src/middlewares/userLogged");
const cors = require("cors")

//middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cookie());
app.use(session({ 
    secret: "ninetech",
    resave: false,
    saveUninitialized: false
}));
app.use(userLogged);
app.use(cors())
//template engines
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

//rutas
const mainRoutes = require("./src/routes/mainRoutes");
const usersRoutes = require("./src/routes/usersRoutes.js");
const productsRoutes = require("./src/routes/productsRoutes.js");
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/productos", productsRoutes);

//api
const productsApi = require("./src/routes/api/productsRoutesApi")
const usersApi = require("./src/routes/api/usersRoutesApi")

app.use("/api/users", usersApi);
app.use("/api/productos", productsApi);

//404
app.use((req, res, next) => res.status(404).render("404"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
