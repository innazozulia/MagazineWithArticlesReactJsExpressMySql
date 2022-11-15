const db = require("../db");
const jwt = require("jsonwebtoken");

const getPosts = (req, res) => {
  const queryPosts = req.body.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(queryPosts, [req.body.cat], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data);
  });
};

const getPost = (req, res) => {
  const queryPost =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(queryPost, [req.params.id], (err, data) => {
    if (err) return res.status(500).josn(err);

    return res.status(200).josn(data[0]);
  });
};

const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token is not valid");

    const queryAddPost =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(queryAddPost, [values], (err, data) => {
      if (err) return res.status(500).josn(err);

      return res.status(200).json(data);
    });
  });
};

const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, data) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;
    const queryDeletePost = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(queryDeletePost, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only ypur post");

      return res.status(200).json("Post has been deleted");
    });
  });
};

const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const queryUpdatePost =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(queryUpdatePost, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};

module.exports = {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
};
