//export
const router = require("express").Router();

//import routes
const Product = require("./productRoutes");
const Admin = require("./adminRoutes");
const Auth = require("./authRoutes");
const User = require("./userRoutes");
const Shop = require("./shopRoutes");

//api
router.use("/api/v1/products", Product);
router.use("/api/v1/auths", Auth);
router.use("/api/v1/users", User);
router.use("/api/v1/shops", Shop);
router.use("/", Admin);

//export
module.exports = router;
