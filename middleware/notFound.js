const notFound = (req, res) => {
  return res.status(404).send(`Route ${req.url} does not exist`);
};

module.exports = notFound;
