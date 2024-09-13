import { Router } from "express";
import {
  getMessagesView,
  getMessagesFormView,
  createMessage,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/", getMessagesView);
messagesRouter.get("/:messageId");

messagesRouter.get("/new", getMessagesFormView);
messagesRouter.post("/new", createMessage);

messagesRouter.get("/:messageId/update");
messagesRouter.post("/:messageId/update");

messagesRouter.post("/:messageId/delete");

export default messagesRouter;
