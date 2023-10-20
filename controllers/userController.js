const { User } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");
// library-imagekit

const findUser = async (req, res, next) => {
  try {
    // process find data user
    const users = await User.findAll();
    // ststus success proccess (200)
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const findUserById = async (req, res, next) => {
  try {
    // process find user by ID
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const updateUser = async (req, res, next) => {
  const { name, age, address, role, shopId } = req.body;
  try {
    await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    // process update user
    await User.update({
      name,
      age,
      address,
      role,
      shopId,
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      message: "success update user",
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    // proccess delete user
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    // validasi jika id tidak ada
    if (!user) {
      next(new ApiError("User ID does not exist!"));
    }
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    //status success process (200)
    res.status(200).json({
      status: "success",
      message: "success delete user",
    });
  } catch (err) {
    // use errorhandler
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findUser,
  findUserById,
  updateUser,
  deleteUser,
};
