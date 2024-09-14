import { Router } from "express";
import {
  getAllMessagesView,
  getSingleMessageView,
  getMessagesFormView,
  createMessage,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/", getAllMessagesView);
messagesRouter.get("/:messageId", getSingleMessageView);

// messagesRouter.get("/new", getMessagesFormView);
// messagesRouter.post("/new", createMessage);

// messagesRouter.get("/:messageId/update");
// messagesRouter.post("/:messageId/update");

// messagesRouter.post("/:messageId/delete");

export default messagesRouter;
