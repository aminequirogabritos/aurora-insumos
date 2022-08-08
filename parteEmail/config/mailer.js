let nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
export let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "aurora.insumos.sl@gmail.com", // generated ethereal user
        pass: "dutz ehnb tonp fhcz", // generated ethereal password
    },
});

transporter.verify().then(() => {
    console.log("Listo para enviar emails");
});