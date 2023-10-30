const express = require("express");
const router = express.Router();

const blogController = require("./blog");
const userBlogs = blogController.blogData;

router.get("/", (req, res, next) => {
  res.render("home", {
    hasBlogs: userBlogs.length > 0,
    pageTitle: "Home",
    blogs: userBlogs,
  });
});

module.exports = router;