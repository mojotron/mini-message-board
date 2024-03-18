const express = require("express");
const messagesRouter = require("./routes/messages.js");
const app = express();
const notFoundMiddleware = require("./middleware/notFound.js");

app.use(express.static("./public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (rer, res) => {
  res.status(200).render("pages/index");
});

app.use("/messages", messagesRouter);

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 5000;
const HOSTNAME = "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
  console.log(`server listening at ${HOSTNAME}:${PORT}`);
});
