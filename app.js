require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const ApiError = require("./utils/apiError");
const errorHandler = require("./controllers/errorController");

// Router
const router = require("./routes");
// PORT
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setting view engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(router);

// set errorhandler to all Routes
app.all("*", (req, res, next) => {
  next(new ApiError(`Routes does not exist`, 404));
});
// use errorHandler to all Routes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Berjalan di port : ${PORT}`);
});
