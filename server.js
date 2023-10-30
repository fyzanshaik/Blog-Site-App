const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views");

const serverStart = () => {
  console.log("Server has started on PORT: " + PORT);
};

// Import your routes
const homeRouter = require("./routes/home");
const blogController = require("./routes/blog");

// Use the routes
app.use(blogController.routes);
app.use(homeRouter);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(PORT, serverStart);
