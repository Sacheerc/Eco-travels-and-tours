var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");


router.post("/", function (req, res, next) {
    console.log('called')
    var output = `
    <h2>you have a email</h2>
    <h3>${req.body.subject}</h3>
    <br>
        <p>${req.body.receivermail}</p>
        <p>${req.body.message}</p>
    
    ` ;


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: 'sakuwi95@gmail.com', 
          pass: 'Sakuwi9515' 
        },
        tls:{
            rejectUnauthorized:false
        }
    
      });
    
      // send mail with defined transport object
      
      let info = transporter.sendMail({
        from: '"echoTravels" <sakuwi95@gmail.com>', 
        to: req.body.receivermail, 
        subject: req.body.subject, 
        text: "Hello world?", 
        html:  output 
      });
      
    

   
}
)

module.exports = router;