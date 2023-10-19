const { Product } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const createPage = async (req, res, next) => {
  res.render("create.ejs");
};

const createProduct = async (req, res, next) => {
  const { name, price, stock } = req.body;
  const file = req.file;

  try {
    // process upload image to imagekit
    const split = file.originalname.split(".");
    const extension = split[split.length - 1];
    const img = await imagekit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${extension}`,
    });
    // process create data product
    await Product.create({
      name,
      price,
      stock,
      imageUrl: img.url,
    });
    // status success create (201)
    res.redirect("/dashboard/admin");
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const findAll = async (req, res, next) => {
  try {
    // process find data product
    const products = await Product.findAll();
    // ststus success proccess (200)
    res.render("index.ejs", {
      products,
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createProduct,
  findAll,
  createPage,
};
