const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

const blogDataFilePath = path.join(__dirname, "../data/blogData.json");

// Function to read the blog data from the file
const readBlogData = () => {
  try {
    const data = fs.readFileSync(blogDataFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Function to write the blog data to the file
const writeBlogData = (data) => {
  fs.writeFileSync(blogDataFilePath, JSON.stringify(data), "utf8");
};

// Load initial blog data from the file
let userBlogs = readBlogData();

router.get("/create-blog", (req, res, next) => {
  res.render("blog_creation", { pageTitle: "Create Blog" });
});

blogCreated = false;

const checkCreation = () => {
  return userBlogs.length > 0;
};

router.post("/create-blog", (req, res, next) => {
  userBlogs.push({
    title: req.body.title,
    dateCreated: req.body.date,
    topic: req.body.topic,
    content: req.body.blogContent,
  });

  writeBlogData(userBlogs);

  blogCreated = checkCreation();
  res.render("blog_creation", { pageTitle: "Create Blog", blogCreated });
});

exports.blogData = userBlogs;
exports.blogCreated = blogCreated;
exports.routes = router;
