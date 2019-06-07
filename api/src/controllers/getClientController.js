var client = require("../models/user-model");

function GetClientController(){}

GetClientController.prototype.clientdata=(callback)=> {

    client.find({}, function(err,docs){
        if(err || !docs){
            var err = new Error("not found. ");
            err.status=401;
            callback(err);
        }else{
            callback(null, docs);
        }
    }
    )

    client.findById
    

}



module.exports= GetClientController;