var mongoose= require('mongoose');

var questionSchema = new mongoose.Schema({
    title:String,
    description:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
    answers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Answer"
        }
    ],
    date: {
        type:Date,
        default: Date.now
    }
});

module.exports=mongoose.model("Question",questionSchema);