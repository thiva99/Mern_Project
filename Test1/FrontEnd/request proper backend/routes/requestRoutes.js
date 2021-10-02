const router = require("express").Router();
 const Request = require("../modules/Request");

 //data insert part

router.route("/save-user").post((req,res)=>{
    const{email,data}=req.body
    
    const user= new Request({email:email,chat:data})
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
})


//Database data view all

router.route("/").get((req,res)=>{
    Request.find().then((curds)=>{
        res.json(curds)
    }).catch((err)=>{
        console.log(err);
    })
})


//find by id or name

router.route("/:email").get((async(req,res)=>{
    let user = req.params.email;
     
    Request.find({email:user})
    .then(first=>res.send(first))
    .catch((err)=>{
        console.log(err);
    })
}))


router.route("/update").put((async (req,res)=>{
    //let user = req.params.email;
    //const rate = req.body.rate
    
  const{email,data}=req.body

  Request.findOneAndUpdate({email:email},{$push:{chat:data}})
    
    .then(result=>res.send(result))

     .catch((err)=>{
         console.log(err);
 
    })
}))



router.route("/:name/:message").put((async (req,res)=>{
    //const{message,name}=req.body
    //const name="user@gmail.com"
    
    const mess=req.params.message
    const name=req.params.name

    Request.findOneAndUpdate({email:name},{$pull:{chat:{message:mess}}})
    .then(result=>res.send(result))
    .catch((err)=>{
     console.log(err);

})
}))



module.exports = router;