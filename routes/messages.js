const express = require("express");
const router = express.Router();
const { getAllMessages } = require("../controllers/messages.js");

router.get("/", getAllMessages);

module.exports = router;
