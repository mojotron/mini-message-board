import url from "node:url";
import path from "node:path";
import express from "express";
import routes from "./routes/index.js";
import notFoundMiddleware from "./middleware/notFound.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const app = express();
// load static files
app.use(express.static(path.join(__dirname, "public")));
// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use(routes);
// error handler
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
