const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test12345!",
  database: "blog",
});

module.exports = db;
