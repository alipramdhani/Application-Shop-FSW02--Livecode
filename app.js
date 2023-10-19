require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

// Router
const router = require("./routes");
// PORT
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setting view engine

app.use(morgan("dev"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server Berjalan di port : ${PORT}`);
});
