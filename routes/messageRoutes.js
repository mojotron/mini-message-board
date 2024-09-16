import { Router } from "express";
import {
  getAllMessages,
  getSingleMessage,
  getCreateMessage,
  postCreateMessage,
  getDeleteMessage,
  postDeleteMessage,
  getUpdateMessage,
  postUpdateMessage,
} from "../controllers/messagesController.js";
import { body } from "express-validator";

const validator = [
  body("title")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("title field must not be empty")
    .isLength({ min: 3, max: 25 })
    .withMessage("title field must be between 3 and 25 characters")
    .isString()
    .withMessage("title field must be string of characters"),

  body("text")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("text field must not be empty")
    .isLength({ min: 5, max: 300 })
    .withMessage("text field must be between 5 and 300 characters")
    .isString()
    .withMessage("text field must be string of characters"),
];

const messagesRouter = Router();

messagesRouter.get("/", getAllMessages);

messagesRouter.get("/:messageId/delete", getDeleteMessage);
messagesRouter.post("/:messageId/delete", postDeleteMessage);

messagesRouter.get("/:messageId/update", getUpdateMessage);
messagesRouter.post("/:messageId/update", validator, postUpdateMessage);

messagesRouter.get("/new", getCreateMessage);
messagesRouter.post("/new", validator, postCreateMessage);
messagesRouter.get("/:messageId", getSingleMessage);

export default messagesRouter;
