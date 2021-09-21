const User = require('../models/User')
const router = require('../routes/apiRoutes')

// data insert part
const userSaveHandler = (req,res)=>{
    const{email,data}=req.body
    const user= new User({email:email,rating:data})
    user.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            data:data
        })
    })    
}

// all data retrive part
const details=(async(req,res)=>{
    User.find()
    .then(result=>res.send(result))
    .catch((err)=>{
        console.log(err);

    })
})
//find by id or name
const detail=(async(req,res)=>{
    let user = req.params.email;
     
    User.find({email:user})
    .then(first=>res.send(first))
    .catch((err)=>{
        console.log(err);
    })
})




//$push $pull $addToset   insert recorrd to exesting data

const Update=(async (req,res)=>{
    //let user = req.params.email;
    //const rate = req.body.rate
    const{email,data}=req.body
    User.findOneAndUpdate({email:email},{$push:{chat:data}})
    .then(result=>res.send(result))
    .catch((err)=>{
        console.log(err);
    })
  })
    


 
    


//delete specific data

const Delete = (async (req,res)=>{
    //const{message,name}=req.body
    //const name="user@gmail.com"
    
    const message=req.params.message
    const name=req.params.name

    User.findOneAndUpdate({email:name},{$pull:{chat:{message:message}}})
    .then(result=>res.send(result))

    .catch((err)=>{
     console.log(err);

})
})
    
        

     
    
module.exports={
    userSaveHandler,
    details,
    detail,
    Update,
    Delete
    
    
}