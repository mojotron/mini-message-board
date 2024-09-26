const errorMiddleware = (err, req, res, next) => {
  res
    .status(500)
    .render("pages/error", { err: err.message || "Internal server error!" });
};

export default errorMiddleware;
