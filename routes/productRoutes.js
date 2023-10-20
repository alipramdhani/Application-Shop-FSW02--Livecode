//export
const router = require("express").Router();
//error handler
// ...

//import controllers
const Product = require("../controllers/productController");
//import multer-uploader
const upload = require("../middlewares/uploader");
//import middleware-auth
const autentikasi = require("../middlewares/authenticate");
//import middleware-checkRole
const checkRole = require("../middlewares/checkRole");

//multer-uploader
// ...

//API-Product-controller
router.post("/", upload.single("image"), Product.createProduct);
router.get("/", autentikasi, checkRole("Staff"), Product.findAll);
router.get("/:id", Product.findById);
router.patch("/:id", Product.updateProduct);
router.delete("/:id", Product.deleteProduct);

//export
module.exports = router;
