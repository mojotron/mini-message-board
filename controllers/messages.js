const messagesData = require("../data/messages");

const getMessagesView = (req, res) => {
  res
    .status(200)
    .render("index", { title: "Mini-Message-Board", messages: messagesData });
};

const getMessagesFormView = (req, res) => {
  res
    .status(200)
    .render("form", { title: "Mini-Message-Board", messages: messagesData });
};

const createMessage = (req, res) => {
  const { username, message } = req.body;
  if (username && message) {
    messagesData.push({ username, message, createdAt: new Date() });
    return res.status(201).redirect("/messages");
  }
  res.render("form", { msg: `username and message must be provided` });
};

module.exports = { getMessagesView, getMessagesFormView, createMessage };
