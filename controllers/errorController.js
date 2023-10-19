module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status;
  err.message = err.message;

  //makes validasi for error
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
