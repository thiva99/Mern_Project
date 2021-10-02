const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const details=new Schema({
    sender:String,
    message:String
});


const requestSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    chat:[details]

})
const Data = mongoose.model("user",requestSchema);
module.exports = Data;