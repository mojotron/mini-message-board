const messagesData = require("../data/messages");

const getAllMessages = (req, res) => {
  res.status(200).json({ status: "success", messages: messagesData });
};

module.exports = { getAllMessages };
