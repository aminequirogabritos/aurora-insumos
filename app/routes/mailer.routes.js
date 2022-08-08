module.exports = app => {
    const mailer = require("../controllers/mailer.controller.js");
    var router = require("express").Router();

/*     router.get("/", (req,res)=>{
        res.sendFile('../../html/checkout/checkout.html');
    }) */

    router.post("/", mailer.sendEmail);

    app.use('/api/sendEmail', router);

  };