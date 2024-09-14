import { matchedData, validationResult } from "express-validator";
import messagesStorage from "../storage/messagesStorage.js";

const getAllMessages = (req, res) => {
  res.status(200).render("pages/messages", {
    messages: messagesStorage.getMessages(),
  });
};

const getSingleMessage = (req, res) => {
  const { messageId } = req.params;

  res.status(200).render("pages/messageDetails", {
    message: messagesStorage.getMessage(messageId),
  });
};

const getCreateMessage = (req, res) => {
  res.status(200).render("pages/messageForm", {
    title: "Create New Message",
    values: {
      title: "",
      text: "",
    },
  });
};

const postCreateMessage = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).render("pages/messageForm", {
      title: "Create New Message",
      errors: errors.array(),
      values: {
        title: req.body.title || "",
        text: req.body.text || "",
      },
    });
  }

  const { title, text } = matchedData(req);
  messagesStorage.createMessage(title, text);

  return res.status(201).redirect("/messages");
};

const getDeleteMessage = (req, res) => {
  res.status(200).render("pages/confirmDelete");
};

const postDeleteMessage = (req, res) => {};

export {
  getAllMessages,
  getSingleMessage,
  getCreateMessage,
  postCreateMessage,
  getDeleteMessage,
  postDeleteMessage,
};
