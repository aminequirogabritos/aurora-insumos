"use strict";

var express = require("express");

var cors = require("cors");

var app = express();
var corsOptions = {
  origin: "http://localhost:8081"
}; // this is a test

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // simple route

app.get("/", function (req, res) {
  res.json({
    message: "aaaaa"
  });
});

require("./app/routes/producto.routes.js")(app);

require("./app/routes/categoria.routes.js")(app);

require("./app/routes/cliente.routes.js")(app);

require("./app/routes/venta.routes.js")(app);

require("./app/routes/detalle.routes.js")(app); // set port, listen for requests


var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
}); /////////////////////

/* 
app.get("/", (req,res) => {
    console.log(__dirname);
}) */