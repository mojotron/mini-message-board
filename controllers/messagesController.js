import { matchedData, validationResult } from "express-validator";
import {
  getMessages,
  getMessage,
  insertMessage,
  deleteMessage,
  updateMessage,
} from "../db/queries.js";

const getAllMessages = async (req, res, next) => {
  try {
    const messages = await getMessages();
    return res.status(200).render("pages/messages", { messages });
  } catch (error) {
    return next(error);
  }
};

const getSingleMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const message = await getMessage(messageId);
    return res.status(200).render("pages/messageDetails", { message });
  } catch (error) {
    return next(error);
  }
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

const postCreateMessage = async (req, res, next) => {
  try {
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
    await insertMessage(title, text);

    return res.status(201).redirect("/messages");
  } catch (error) {
    return next(error);
  }
};

const getDeleteMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const message = await getMessage(messageId);

    return res.status(200).render("pages/confirmDelete", { message });
  } catch (error) {
    return next(error);
  }
};

const postDeleteMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    console.log(messageId);
    await deleteMessage(parseInt(messageId));
    return res.status(200).redirect("/messages");
  } catch (error) {
    return next(error);
  }
};

const getUpdateMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;
    const msg = await getMessage(messageId);

    return res.status(200).render("pages/messageForm", {
      headerText: `Update ${msg.title} Message`,
      buttonText: "Update Message",
      action: `/messages/${messageId}/update`,
      values: {
        title: msg.title,
        text: msg.text,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const postUpdateMessage = async (req, res, next) => {
  try {
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
    await updateMessage(messageId, title, text);

    res.status(200).redirect(`/messages/${messageId}`);
  } catch (error) {
    return next(error);
  }
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
