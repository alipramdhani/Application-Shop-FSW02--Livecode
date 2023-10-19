const imagekit = require("../lib/imagekit");
const { Product } = require("../models");
// library-imagekit

const createPage = async (req, res) => {
  res.render("create.ejs");
};

// const deletePage = async (req, res) => {
//   res.render("index.ejs");
// };

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
    res.render("index.ejs", {
      products,
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
    res.redirect("/dashboard/admin");
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
  createPage,
  // deletePage,
  deleteProduct,
};
