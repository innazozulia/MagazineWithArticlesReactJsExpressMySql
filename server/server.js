const express = require("express");
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const app = express();

app.use(express.json());
app.use(cookieParser());

// upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/app/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

//for  upload files
const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

//serevr router
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
// app.use("/api/users", userRoutes);

app.listen(8800, () => {
  return console.log("connected");
});
