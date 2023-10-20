//export
const router = require("express").Router();
//error handler
// ...

//import controllers
const Shop = require("../controllers/shopController");

//import multer-uploader
const upload = require("../middlewares/uploader");
//import middleware-auth
const autentikasi = require("../middlewares/authenticate");
//import middleware-checkRole
const checkRole = require("../middlewares/checkRole");

//multer-uploader
// ...

//API-Shop-controller
router.post("/", Shop.createShop);
router.get("/", Shop.findShop);
router.get("/:id", Shop.findShopById);
router.patch("/:id", Shop.updateShop);
router.delete("/:id", Shop.deleteShop);

//export
module.exports = router;
