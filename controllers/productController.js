const { Product } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");
// library-imagekit

const createProduct = async (req, res, next) => {
  const { name, price, stock } = req.body;
  const file = req.file;
  let img;

  try {
    if (file) {
      // get extention file
      const split = file.originalname.split(".");
      const extension = split[split.length - 1];
      // processing upload file to imagekit
      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      });
      img = uploadedImage.url;
    }
    // process create data product
    const newProduct = await Product.create({
      name,
      price,
      stock,
      imageUrl: img,
    });
    // status success create (201)
    res.status(201).json({
      status: "success",
      data: {
        newProduct,
      },
    });
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
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const findById = async (req, res, next) => {
  try {
    // process find product by ID
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const updateProduct = async (req, res, next) => {
  const { name, price, stock } = req.body;
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    // validasi jika id tidak ada
    if (!product) {
      next(new ApiError("product ID does not exist!!"));
    }
    // process update product
    await Product.update({
      name,
      price,
      stock,
      //imageUrl: img.url (belum bisa karena di file ejs belum membuat fitur update)
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      message: "success update product",
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const deleteProduct = async (req, res, next) => {
  const { name, price, stock } = req.body;
  try {
    // proccess delete product
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    // validasi jika id tidak ada
    if (!product) {
      next(new ApiError("Product ID does not exist!"));
    }
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      message: "success delete product",
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createProduct,
  findAll,
  findById,
  updateProduct,
  deleteProduct,
};
