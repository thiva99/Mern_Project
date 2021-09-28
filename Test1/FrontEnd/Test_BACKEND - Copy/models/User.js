const mongoose = require('mongoose')
const Schema = mongoose.Schema



const ratingSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    rate:{
        type:Number,
        require:true
    }
        
})


const Rating = mongoose.model('check',ratingSchema)

module.exports=Rating