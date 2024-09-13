import messagesData from "../data/messages.js";

const getMessagesView = (req, res) => {
  const modifiedData = messagesData.map((item) => ({
    ...item,
    createdAt: formatDistance(item.createdAt, new Date()),
  }));
  res.status(200).render("pages/messages", {
    messages: modifiedData,
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

export { getMessagesView, getMessagesFormView, createMessage };
