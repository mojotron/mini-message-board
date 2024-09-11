import { Router } from "express";
import {
  getMessagesView,
  getMessagesFormView,
  createMessage,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/", getMessagesView);
messagesRouter.get("/new", getMessagesFormView);
messagesRouter.post("/new", createMessage);

export default messagesRouter;
