const express = require("express");
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// app.use("/api/users", userRoutes);

app.listen(8800, () => {
  return console.log("connected");
});
