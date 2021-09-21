const Rating = require('../models/User')
const router = require('../routes/apiRoutes')

// data insert part
const ratingSaveHandler = (req,res)=>{
    const email=req.body.email;
    const rating=req.body.rating;
   
    const user= new Rating ({email:email,rate:rating})
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
//{rate:{$size}}
// db.collection('breakfast-tacos').aggregate([{$group: { "_id": "$ObjectId"}, $avg: {"rating":"$rating" }}])
const details=(async(req,res)=>{
    Rating.find({rate:{$elemMatch:{$lte:5}}})
    .then(result=>res.send(result))
    .catch((err)=>{
        console.log(err);

    })
})

//find by id or name
// ({rate:{$elemMatch:{$lte:5}}})



const detail=(async(req,res)=>{
    let user = req.params.email;
     
    Rating.find({email:user}, )
    .then(first=>res.send(first))
    .catch((err)=>{
        console.log(err);
    })
})




//$push $pull $addToset   insert recorrd to exesting data

const Update=(async (req,res)=>{
    //let user = req.params.email;
    //const rate = req.body.rate
    const email=req.body.email;
    const rating=req.body.rating;
    Rating.findOneAndUpdate({email:email},{$push:{rate:rating}})
    .then(result=>res.send(result))
    .catch((err)=>{
        console.log(err);
    })
  })
    
  const avg=(async (req, res) => {
    // db.collection(ratings).aggregate([{$group: { _id: "$ObjectId"}, $avg: {rating:"$rating" }}])
    db.collection.test([
        {
          $group: {
            avgrating: {$avg: "$rate"}
          }
        }
      ])
      .then(results => {res.send(results )})
      .catch(error => console.error(error))
  });
    
    

 
    


//delete specific data

// const Delete = (async (req,res)=>{
//     //const{message,name}=req.body
//     //const name="user@gmail.com"
    
//     const message=req.params.message
//     const name=req.params.name

//     Rating.findOneAndUpdate({email:name},{$pull:{chat:{message:message}}})
//     .then(result=>res.send(result))

//     .catch((err)=>{
//      console.log(err);

// })
// })
    
        

     
    
module.exports={
    ratingSaveHandler,
    details,
    detail,
    Update,
    avg
    
    
}