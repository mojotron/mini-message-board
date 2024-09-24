import { matchedData, validationResult } from "express-validator";
import messagesStorage from "../storage/messagesStorage.js";
import { getMessages } from "../db/queries.js";
import { formatDistance } from "date-fns";

const getAllMessages = async (req, res) => {
  try {
    const messages = await getMessages();
    res.status(200).render("pages/messages", {
      messages: messages.map((msg) => ({
        ...msg,
        createdAt: formatDistance(msg.created_at, new Date(), {
          addSuffix: true,
        }),
      })),
    });
  } catch (error) {
    // TODO better message
    res.json({ ...error });
  }
};

const getSingleMessage = (req, res) => {
  const { messageId } = req.params;

  res.status(200).render("pages/messageDetails", {
    message: messagesStorage.getMessage(messageId),
  });
};

const getCreateMessage = (req, res) => {
  res.status(200).render("pages/messageForm", {
    headerText: "Create New Message",
    buttonText: "Create Message",
    action: "/messages/new",
    values: {
      title: "",
      text: "",
    },
  });
};

const postCreateMessage = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("pages/messageForm", {
      headerText: "Create New Message",
      buttonText: "Create Message",
      action: "/messages/new",
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
  const { messageId } = req.params;
  res.status(200).render("pages/confirmDelete", {
    message: messagesStorage.getMessage(messageId),
  });
};

const postDeleteMessage = (req, res) => {
  const { messageId } = req.params;
  messagesStorage.deleteMessage(messageId);
  res.status(200).redirect("/messages");
};

const getUpdateMessage = (req, res) => {
  const { messageId } = req.params;
  const msg = messagesStorage.getMessage(messageId);
  res.status(200).render("pages/messageForm", {
    headerText: `Update ${msg.title} Message`,
    buttonText: "Update Message",
    action: `/messages/${messageId}/update`,
    values: {
      title: msg.title,
      text: msg.text,
    },
  });
};

const postUpdateMessage = (req, res) => {
  const { messageId } = req.params;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("pages/messageForm", {
      headerText: `Update ${req.body.title} Message`,
      buttonText: "Update Message",
      action: `/messages/${messageId}/update`,
      errors: errors.array(),
      values: {
        title: req.body.title || "",
        text: req.body.text || "",
      },
    });
  }

  const { text, title } = matchedData(req);

  messagesStorage.updateMessage(messageId, text, title);

  res.status(200).redirect(`/messages/${messageId}`);
};

export {
  getAllMessages,
  getSingleMessage,
  getCreateMessage,
  postCreateMessage,
  getDeleteMessage,
  postDeleteMessage,
  getUpdateMessage,
  postUpdateMessage,
};
