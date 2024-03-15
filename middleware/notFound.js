const notFound = (req, res) => {
  return res.status(404).render('pages/notFound');
};

module.exports = notFound;
