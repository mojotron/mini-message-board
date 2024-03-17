const messagesData = require("../data/messages");
const { formatTime } = require("../utils/formatTime");

const getMessagesView = (req, res) => {
  const modifiedData = messagesData.map((item) => ({
    ...item,
    createdAt: formatTime(item.createdAt),
  }));
  res.status(200).render("pages/index", {
    title: "Mini-Message-Board",
    messages: modifiedData,
  });
};

const getMessagesFormView = (req, res) => {
  res.status(200).render("pages/form", {
    title: "Mini-Message-Board",
    messages: messagesData,
  });
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
