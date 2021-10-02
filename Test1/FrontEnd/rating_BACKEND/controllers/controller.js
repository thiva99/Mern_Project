const Rating = require('../models/User')
const router = require('../routes/apiRoutes')

// data insert part
const ratingSaveHandler = (req,res)=>{
    const email=req.body.email;
    const rating=req.body.rating;
    const feed=req.body.details
    const user= new Rating ({email:email,rating:rating,feedback:feed})
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

// AVG data part
const details=(async(req,res)=>{
    Rating.find( )
    .exec(function(err,details){
        var a=0
        var tot=0
        var arra = new Array();
        var avgg=0
        var average=0
        var avv=0
        if(err){
            console.log(err);
        }
        else{
            while(a<details.length){
                while(tot< details[a].rating.length){
                    avgg=avgg + (details[a].rating[tot])
                    tot++
                }
                average= avgg/details[a].rating.length
                avv=average.toFixed(1)
                let name=details[a].email
                arra[a]={email:name,avg:avv}
                a++  
                avgg=0
                average=0
                avv=0
                tot=0
            }
            res.json(arra)
            }
        }
        )
       })
                       
//find by id or name
//not use
   const detail=(async(req,res)=>{
       let user = req.params.email;
       Rating.find({email:user})

      .then(result=>res.send(result))
      .catch((err)=>{
          console.log(err);
      })

   })

//get specific student feedbacks
    const search=(async(req,res)=>{
    let user = req.params.email;
    Rating.find({feedback:{$elemMatch:{sender:user}}})
    .then(result=>res.send(result))
    .catch((err)=>{
       console.log(err);
   })
})


// rating as a pecentage
    const pecentage=(async(req,res)=>{
    let user = req.params.email;
    Rating.findOne({email:user})
    .exec(function(err,details){
        var tot=0
        var one=0
        var two=0
        var three=0
        var four=0
        var five=0
        var pone=0
        var ptwo=0
        var pthree=0
        var pfour=0
        var pfive=0  
        var pecen = new Array();
        
        if(err){
            console.log(err);
        }
        else{
            if(details.rating.length===null){
                console.log(err);
            }
            else{
            while( tot< details.rating.length){
                    if(details.rating[tot]===1){
                        one++
                    }
                    else if(details.rating[tot]===2){
                        two++
                    }
                    else if(details.rating[tot]===3){
                        three++
                    }
                    else if(details.rating[tot]===4){
                        four++
                    }
                    else{
                        five++
                    }
                   
                    tot++
            }
        }
            pone=(one/details.rating.length)*100;
            ptwo=(two/details.rating.length)*100;
            pthree=(three/details.rating.length)*100;
            pfour=(four/details.rating.length)*100;
            pfive=(five/details.rating.length)*100;
            var poneA=pone.toFixed(0)
            var ptwoA= ptwo.toFixed(0)
            var pthreeA=pthree.toFixed(0)
            var pfourA=pfour.toFixed(0)
            var pfiveA=pfive.toFixed(0)
            
            pecen[0]={one:poneA,two:ptwoA,three:pthreeA,four:pfourA,five:pfiveA}
            res.json(pecen)
        }
    }
    )
})
        

//$push $pull $addToset   insert recorrd to exesting data
    const Update=(async (req,res)=>{
    //let user = req.params.email;
    //const rate = req.body.rate
    const email=req.body.email;
    const rating=req.body.rating;
    const feed=req.body.details
    Rating.findOneAndUpdate({email:email},{$push:{rating:rating,feedback:feed}})
    .then(result=>res.send(result))
    .catch((err)=>{
        console.log(err);
    })
  })
    

//update specific data
const Fupdate = (async (req,res)=>{
    const id=req.params.id
    const iid=req.params.iid
    const feed=req.params.feedback

    Rating.findOneAndUpdate({_id:iid},{$set:{'feedback.$[o].feedback':feed}},{arrayFilters:[{'o._id':id}]})

    //Rating.findOneAndUpdate({_id:"6145b4e279d2a6a597ace676"},{$set:{'feedback.$[o].feedback':feed}},{arrayFilters:[{'o._id':id}]})


    .then(result=>res.send(result))
    .catch((err)=>{
     console.log(err);
})
})

      
module.exports={
    ratingSaveHandler,
    details,
    detail,
    Update,
    Fupdate,
    search,
    pecentage
    
    
}