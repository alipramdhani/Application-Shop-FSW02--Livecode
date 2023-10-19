const imagekit = require("../lib/imagekit");
const { Product } = require("../models");
// library-imagekit

const createProduct = async (req, res) => {
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
    const newProduct = await Product.create({
      name,
      price,
      stock,
      imageUrl: img.url,
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
    // ...
    // without errorhandler
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findAll = async (req, res) => {
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
    // ...
    // without errorhandler
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const findById = async (req, res) => {
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
    // ...
    // without errorhandler
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    // process update product
    await Product.update(
      {
        name,
        price,
        stock,
        //imageUrl: img.url (belum bisa karena di file ejs belum membuat fitur update)
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    //status success process (200)
    res.status(200).json({
      status: "success",
      message: "success update product",
    });
  } catch (err) {
    // use errorhandler
    // ...
    // without errorhandler
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    // proccess delete product
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
    // ...
    // without errorhandler
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  createProduct,
  findAll,
  findById,
  updateProduct,
  deleteProduct,
};
