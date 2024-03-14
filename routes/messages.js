const express = require("express");
const router = express.Router();
const {
  getMessagesView,
  getMessagesFormView,
  createMessage,
} = require("../controllers/messages.js");

router.get("/", getMessagesView);
router.get("/new", getMessagesFormView);
router.post("/new", createMessage);

module.exports = router;
