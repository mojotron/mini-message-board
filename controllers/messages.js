const messagesData = require("../data/messages");

const getIndex = (req, res) => {
  res.status(200).render("index", { title: "Mini Message Board" });
};

module.exports = { getIndex };
