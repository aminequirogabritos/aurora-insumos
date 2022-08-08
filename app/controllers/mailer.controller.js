//import { transporter } from "../config/mailer.js";
//const mailer = require("../models/mailer.js");
const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
    
        const mailContent = `
            <p> Estiamdo/a ${req.body.firstName}:</p><br>
            <p>Se ha recibido su pedido</p>
        `;
    
        let transporter = nodemailer.createTransport({
/*             host: "smtp.ethereal.email",
            port: 587, //465
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'zack.ankunding@ethereal.email', // generated ethereal user
                pass: 'tTFjsujgR4Ahp2abWc', // generated ethereal password
            }, */
            host: "smtp.gmail.com",
            port: 465, //465
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'aurora.insumos.sl@gmail.com', // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        let mailOptions = {
            from: '"Aurora Insumos" <zack.ankunding@ethereal.email>', //
            to: req.body.email,
            subject: "Aurora Insumos - Pedido Recibido",
            //text: "If you received this email, congratulations!",
            html: mailContent // modify later
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.status(200).josnp(req.body);
                res.render('contact', { msg: 'Email has been sent' });
            }
        });
    
    

};
