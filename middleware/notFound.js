const notFound = (req, res) => {
  return res.status(404).render("pages/notFound");
};

export default notFound;
