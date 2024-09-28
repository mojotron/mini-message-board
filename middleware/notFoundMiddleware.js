const notFoundMiddleware = (req, res) => {
  return res.status(404).render("pages/error", {
    header: "Page not found (404)",
    message: "You are looking for resources that does not exist!",
  });
};

export default notFoundMiddleware;
