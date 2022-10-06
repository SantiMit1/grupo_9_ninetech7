const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");
const multerCfg = require("../middlewares/multer");
const upload = multerCfg("Users")
const registerValidations = require("../middlewares/registerValidations");
const editProfileValidations = require("../middlewares/editProfileValidations");
const loginValidations = require("../middlewares/loginValidations");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

router.get("/login", guestMiddleware, controller.login);
router.get("/register", guestMiddleware, controller.register);
router.get("/profile", authMiddleware, controller.profile);
router.get("/logout", controller.logout);

router.post("/register", upload.single("profilePic"), registerValidations, controller.processRegistration);
router.post("/login", loginValidations, controller.processLogin);
router.put("/profile", upload.single("profilePic"), editProfileValidations, controller.editProfile);

module.exports = router;