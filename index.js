const express = require("express");
const indexRouter = require("./routes/index.js");
const app = express();
const notFoundMiddleware = require("./middleware/notFound.js");
const ejs = require("ejs");

// app.use(express.static("./public"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
// not found
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 5000;
const HOSTNAME = "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
  console.log(`server listening at ${HOSTNAME}:${PORT}`);
});
