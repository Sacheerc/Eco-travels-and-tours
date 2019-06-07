var Email = require('../models/email');

function EmailSendController(){}

EmailSendController.prototype.sendEmail= function(emailData,callback){
    Email.create(emailData)
    .then(email => callback(null,email))
    .catch(err => callback(err));
    
};

module.exports = EmailSendController;