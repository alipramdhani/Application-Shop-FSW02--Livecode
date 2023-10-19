//export
const router = require("express").Router();
//error handler
// ...

//import controllers
const Admin = require("../controllers/adminController");
//import multer-uploader
const upload = require("../middlewares/uploader");

//API-Admin-controller
router.post("/products/create", upload.single("image"), Admin.createProduct); //proses add and upload product
router.get("/dashboard/admin", Admin.findAll);
router.get("/dashboard/admin/create", Admin.createPage); //menampilkan halaman untuk membuat produk baru
router.delete("/products/delete", Admin.deleteProduct);

//export
module.exports = router;
