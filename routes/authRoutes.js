const router = require("express").Router();

const Auth = require("../controllers/authController");
const Autentikasi = require("../middlewares/authenticate");

router.post("/register", Autentikasi, Auth.register);
router.post("/login", Auth.login);
router.get("/verify", Autentikasi, Auth.authentication);

module.exports = router;
