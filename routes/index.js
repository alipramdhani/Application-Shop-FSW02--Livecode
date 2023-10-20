//export
const router = require("express").Router();

//import routes
const Product = require("./productRoutes");
const Admin = require("./adminRoutes");
const Auth = require("./authRoutes");

//api
router.use("/api/v1/products", Product);
router.use("/api/v1/auths", Auth);
router.use("/", Admin);

//export
module.exports = router;
