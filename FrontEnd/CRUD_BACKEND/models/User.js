const mongoose = require('mongoose')
const Schema = mongoose.Schema

const details=new Schema({
    sender:String,
    message:String
});


const userSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    chat:[details]

})


const User = mongoose.model('user',userSchema)

module.exports=User