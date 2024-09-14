import messagesStorage from "../storage/messagesStorage.js";

const getAllMessagesView = (req, res) => {
  res.status(200).render("pages/messages", {
    messages: messagesStorage.getMessages(),
  });
};

const getSingleMessageView = (req, res) => {
  const { messageId } = req.params;

  res.status(200).render("pages/messageDetails", {
    message: messagesStorage.getMessage(messageId),
  });
};

const getMessagesFormView = (req, res) => {
  res.status(200).render("pages/form");
};

const createMessage = (req, res) => {
  const { username, message } = req.body;

  if (username && message) {
    messagesData.push({ username, message, createdAt: new Date() });
    return res.status(201).redirect("/messages");
  }

  res
    .status(301)
    .render("pages/form", { msg: `username and message must be provided` });
};

export {
  getAllMessagesView,
  getSingleMessageView,
  getMessagesFormView,
  createMessage,
};
