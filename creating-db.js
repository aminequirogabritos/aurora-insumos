/* run once */
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "newuser",
  password: ""
});

con.connect(function (err) {
  if (err) throw err;
  console.log("🚀 ~ file: creating-db.js ~ line 14 ~ Connected!");
  con.query("CREATE DATABASE aurorainsumosDB", function (err, result) {
    if (err) throw err;
    console.log("🚀 ~ file: creating-db.js ~ line 18 ~ Database created");
  });
});