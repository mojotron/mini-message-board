import { Router } from "express";
import { getIndexPage } from "../controllers/mainController.js";
//import messageRoutes from "./messageRoutes.js";

const mainRouter = Router();

mainRouter.get("/", getIndexPage);

//mainRouter.use("/messages", messageRoutes);

export default mainRouter;
