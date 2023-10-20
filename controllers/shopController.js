const { Shop } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const findShop = async (req, res, next) => {
  try {
    // process find data shop
    const shops = await Shop.findAll();
    // ststus success proccess (200)
    res.status(200).json({
      status: "success",
      data: {
        shops,
      },
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const findShopById = async (req, res, next) => {
  try {
    // process find shop by ID
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      data: {
        shop,
      },
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const updateShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    // process update shop
    await Shop.update(
      {
        name,
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
      message: "success update shop",
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const deleteShop = async (req, res, next) => {
  try {
    // proccess delete shop
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });
    // validasi jika id tidak ada
    if (!shop) {
      next(new ApiError("Shop ID does not exist!"));
    }
    await Shop.destroy({
      where: {
        id: req.params.id,
      },
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      message: "success delete shop",
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const createShop = async (req, res, next) => {
  try {
    const { name } = req.body;
    const shop = await Shop.create({
      name,
    });

    res.status(201).json({
      status: "success",
      data: {
        shop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = {
  createShop,
  findShop,
  findShopById,
  updateShop,
  deleteShop,
};
