var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var emailController = require("../controllers/emailController")

var EmailController = new emailController();


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
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });
 
  // send mail with defined transport object

  let info = transporter.sendMail({
    from: '"echoTravels" <ecotravels451@gmail.com>',
    to: req.body.receivermail,
    subject: req.body.subject,
    text: "Hello world?",
    html: output
  });

  EmailController.sendEmail(req.body, (err, email) => {
    if(err){
      return next(err)
    }else {
      res.send(email)
    }
  });


}
)


router.post("/assignguide", function (req, res, next) {
  console.log('called assign')
  var output = `
  
    <h3>You have Assigned For a Tour</h3>
    <br>
    <p><strong>You have assigned to a tour ${req.body.packagename}</strong></p>
        <p>Tour is reserved by client ${req.body.clientName}</p>
        <p>Tour dates are ${req.body.tourdates}</p>
    
    ` ;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });
 
  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"echoTravels" <ecotravels451@gmail.com>',
    to: req.body.receivermail,
    subject: 'Assignes for a tour',
    text: "",
    html: output
  });
const dbData = {
  receivermail:req.body.receivermail,
  subject:'Aissigned guide',
  message:'You have assign to a tour'+ req.body.packagename + ' Tour is reserved by client ' + req.body.clientname + 'Tour dates are ' + req.body.tourdate,
  date:Date.now()
}
  EmailController.sendEmail(dbData, (err, email) => {
    if(err){
      return next(err)
    }else {
      res.send(email)
    }
  });


}
)


router.post("/removeguide", function (req, res, next) {
  console.log('called remove')
  var output = `
  
    <h3>You have removed From a tour</h3>
    <br>
    <p><strong>You have removed from the tour ${req.body.packagename}</strong></p>
        <p>The tour is reserved by client ${req.body.clientName}</p>
        <p>Tour dates are ${req.body.tourdates}</p>
    
    ` ;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });
 
  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"echoTravels" <ecotravels451@gmail.com>',
    to: req.body.receivermail,
    subject: 'Removed from a tour',
    text: "",
    html: output
  });
const dbData = {
  receivermail:req.body.receivermail,
  subject:'Aissigned guide',
  message:'You have removed from the tour name '+ req.body.packagename + ' the tour is reserved by client ' + req.body.clientname + 'tour dates are ' + req.body.tourdate,
  date:Date.now()
}
  EmailController.sendEmail(dbData, (err, email) => {
    if(err){
      return next(err)
    }else {
      res.send(email)
    }
  });


}
)

 
//sending emails when reverse tour 
router.post("/reverse", function (req, res, next) {
  console.log('called reverse')
  var outputclient = `
    <h2>you have a email from ecotravels</h2>
    <h3>Dear ${req.body.clientname} , </h3><br>
    <h4>You Reversed a tour </h4>
    <h4>Tour Details: </h4>
    <h5>Package Name : ${req.body.packagename}</h5>
    <p>Tour Date : ${req.body.tourdate}</p>
    <p>Tour Price : ${req.body.price}</p>
    <p>Guest Count :${req.body.guestcount}</p>
    <p>Guide Name (if Assigned) : ${req.body.guidename}</p>
    <br>
    <p> You will have a reply email for your refund request soon. </p>
    ` ;

    var outputadmin = `
    <h3>Requesting for reverse a tour</h3>
    <p><strong>Requested Tour Details</strong></p>
    <h5>Package Name : ${req.body.packagename}</h5>
    <p>Client Name : ${req.body.clientname}</p>
    <p>Tour Date : ${req.body.tourdate}</p>
    <p>Tour Price : ${req.body.price}</p>
    <p>Guest Count :${req.body.guestcount}</p>
    <p>Guide Name (if Assigned) : ${req.body.guidename}</p>
    <br>

    `
var emails = ['rmmdsilva95@gmail.com',req.body.recievermail]

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });

for(var i=0;i<2;i++){
  if(i==0){
    let info2 = transporter.sendMail({
        from: '"echoTravels" <ecotravels451@gmail.com>',
        to: emails[i],
        subject: 'Tour reservation',
        text: "Hello world?",
        html: outputadmin
      });
  }else{
  let infotoclient = transporter.sendMail({
    from: '"echoTravels" <ecotravels451@gmail.com>',
    to: emails[i],//req.body.recievermail,
    subject: 'Tour reservation',
    text: "Hello world?",
    html: outputclient
  
  });
}
}




  //send mail to admin
  // let info2 = transporter.sendMail({
  //   from: '"echoTravels" <ecotravels451@gmail.com>',
  //   to: 'rmmdsilva95@gmail.com',
  //   subject: 'Tour reservation',
  //   text: "Hello world?",
  //   html: outputadmin
  // });
 
  // // send mail to client
  // let infotoclient = transporter.sendMail({
  //   from: '"echoTravels" <ecotravels451@gmail.com>',
  //   to: req.body.recievermail,//req.body.recievermail,
  //   subject: 'Tour reservation',
  //   text: "Hello world?",
  //   html: outputclient
  // });



  // EmailController.sendEmail(req.body, (err, email) => {
  //   if(err){
  //     return next(err)
  //   }else {
  //     res.send(email)
  //   }
  // });


}
)
 

//refund request email to admin from client
router.post("/refundreq", function (req, res, next) {
  console.log('called remove')
  var output = `
  
    <h3>Refund request</h3>
    <br>
        <p>Client ${req.body.clientname} has requested to refund the reservation.</p>
        <p>Package name is: ${req.body.packagename}</p>
        <p>Tour dates are: ${req.body.tourdate}</p>
        <p>Tour price is:  ${req.body.price}</p>
    
    ` ;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });
 
  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"echoTravels" <ecotravels451@gmail.com>',
    to: 'rmmdsilva95@gmail.com',//admin email
    subject: 'Request refund ',
    text: "",
    html: output
  });
const dbData = {
  receivermail:req.body.receivermail,
  subject:'Request refund',
  message:'Has a request to refund the tour '+ req.body.packagename + ' the tour is reserved by client ' + req.body.clientname + 'tour dates are ' + req.body.tourdate+ 'and price is '+ req.body.price,
  date:Date.now()
}
  EmailController.sendEmail(dbData, (err, email) => {
    if(err){
      return next(err)
    }else {
      res.send(email)
    }
  });


}
)



router.post("/reverse/confirmrefund", function (req, res, next) {
  console.log('called refund')
  var output = `
  
    <h3>Refund Successed</h3>
    <br>
    <p>Dear ${req.body.clientName}</P><br>
        <p>Your requested to cansel the tour ${req.body.packagename} you reserved at ${req.body.reserveddate}</p>
        <p>Tour price is:  ${req.body.price}</p>
        <p> Tour Duration is : ${req.body.duration}</p>
        <p>Guest count is:  ${req.body.guestcount}</p>
        <p>Tour dates are: ${req.body.tourdates}</p>
        <p>we have refunded your prices.</p>
        
    
    ` ;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });
 
  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"echoTravels" <ecotravels451@gmail.com>',
    to: req.body.receivermail,
    subject: 'Refunded ',
    text: "",
    html: output
  });
const dbData = {
  receivermail:req.body.receivermail,
  subject:'Request refund',
  message:'Has a request to refund the tour '+ req.body.packagename + ' the tour is reserved by client ' + req.body.clientname + 'tour dates are ' + req.body.tourdate+ 'and price is '+ req.body.price,
  date:Date.now()
}
  EmailController.sendEmail(dbData, (err, email) => {
    if(err){
      return next(err)
    }else {
      res.send(email)
    }
  });


}
)










router.post("/broadcast", function (req, res, next) {
  console.log('called')
  var output = `
  <h2>you have a email</h2>
  <h3>${req.body.subject}</h3>
  <br>
      
      <p>${req.body.message}</p>
  
  ` ;


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ecotravels451@gmail.com',
      pass: '#admin123'
    },
    tls: {
      rejectUnauthorized: false
    }

  });

  // send mail with defined transport object
  const emails = req.body.receivermails

  for (var i = 0; i < emails.length; i++) {
    let info = transporter.sendMail({
      from: '"echoTravels" <ecotravels451@gmail.com>',
      to: emails[i],
      subject: req.body.subject,
      text: "Hello world?",
      html: output
    });

  }




}
)

module.exports = router;