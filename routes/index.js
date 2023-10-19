//export
const router = require("express").Router();
//error handler
// ...

//import routes
const Product = require("./productRoutes");
const Admin = require("./adminRoutes");

//api
router.use("/api/v1/products", Product);
router.use("/", Admin);

//export
module.exports = router;
