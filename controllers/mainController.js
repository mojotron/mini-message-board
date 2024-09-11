const getIndexPage = (req, res) => {
  res.status(200).render("pages/index");
};

export { getIndexPage };
