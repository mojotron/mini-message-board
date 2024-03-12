const express = require("express");
const messagesRouter = require("./routes/messages.js");
const app = express();

app.use(express.json());

app.use("/", messagesRouter);

const PORT = process.env.PORT || 5000;
const HOSTNAME = "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
  console.log(`server listening at ${HOSTNAME}:${PORT}`);
});
