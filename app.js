const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');

require('dotenv').config();


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('html'));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "aaaaa" });
});

require("./app/routes/producto.routes.js")(app);
require("./app/routes/categoria.routes.js")(app);
require("./app/routes/cliente.routes.js")(app);
require("./app/routes/venta.routes.js")(app);
require("./app/routes/detalle.routes.js")(app);

require("./app/routes/mailer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

