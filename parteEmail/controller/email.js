
var nodemailer = require("nodemailer");
var express = require("express");
var app = express();


app.post("/sent-email", (req, res) => {

    // send mail with defined transport object
    /* let info = await transporter.sendMail({
        from: '"Factura de su compra 👻" <aurora.insumos.sl@gmail.com>', // sender address
        to: "dielauts@gmail.com", // list of receivers
        subject: "Factura de su compra", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    }); */

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "aurora.insumos.sl@gmail.com", // generated ethereal user
            pass: "dutz ehnb tonp fhcz", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var emailoptions = {
        from: '"Factura de su compra 👻" <aurora.insumos.sl@gmail.com>', // sender address
        to: "dielauts@gmail.com", // list of receivers
        subject: "Factura de su compra", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    };

    transporter.sendMail(emailoptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        }
        else {
            console.log("🚀 ~ file: email.js ~ line 9 ~ app.post ~ EMAIL ENVIADO");
            res.status(200).jsonp(req.body);
        }
    });
});

app.listen(4200, () => {
    console.log("🚀 ~ file: email.js ~ line 12 ~ app.listen ~ Servidor en -> http://localhost:3000");
});

