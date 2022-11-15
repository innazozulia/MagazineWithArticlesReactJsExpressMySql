const express = require("express");
// const addPost = require("../controllers/posts.js");

const router = express.Router();

router.get("/test", addPost);

module.exports = router;
