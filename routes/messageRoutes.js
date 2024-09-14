import { Router } from "express";
import {
  getAllMessages,
  getSingleMessage,
  getCreateMessage,
  postCreateMessage,
  getDeleteMessage,
  postDeleteMessage,
} from "../controllers/messagesController.js";
import { body } from "express-validator";

const messagesRouter = Router();

messagesRouter.get("/", getAllMessages);
messagesRouter.get("/new", getCreateMessage);
messagesRouter.post(
  "/new",
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
  postCreateMessage
);
messagesRouter.get("/:messageId", getSingleMessage);

// messagesRouter.get("/:messageId/update");
// messagesRouter.post("/:messageId/update");

messagesRouter.get("/:messageId/delete", getDeleteMessage);
messagesRouter.post("/:messageId/delete", postDeleteMessage);

export default messagesRouter;
