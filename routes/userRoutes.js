//export
const router = require("express").Router();
//error handler
// ...

//import controllers
const User = require("../controllers/userController");

//import multer-uploader
const upload = require("../middlewares/uploader");
//import middleware-auth
const autentikasi = require("../middlewares/authenticate");
//import middleware-checkRole
const checkRole = require("../middlewares/checkRole");

//multer-uploader
// ...

//API-Product-controller

router.get("/", User.findUser);
router.get("/:id", User.findUserById);
router.patch("/:id", User.updateUser);
router.delete("/:id", User.deleteUser);

//export
module.exports = router;
