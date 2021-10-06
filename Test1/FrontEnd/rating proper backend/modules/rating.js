const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const details=new Schema({
    sender:String,
    feedback:String
});

const ratingSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    rating:[Number],

    feedback:[details]

})
const Data = mongoose.model("Rating",ratingSchema);
module.exports = Data;