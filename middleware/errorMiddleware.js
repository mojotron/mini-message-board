const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err.code === "ECONNREFUSED") {
    return res.status(500).render("pages/error", {
      header: "database error",
      message: "Can not connect to database, please try again later!",
    });
  }

  return res.status(500).render("pages/error", {
    header: "server error",
    message: "Internal server error, please try again later!",
  });
};

export default errorMiddleware;
