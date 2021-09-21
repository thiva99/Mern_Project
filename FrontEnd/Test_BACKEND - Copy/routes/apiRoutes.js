const express =require('express')
const router=express.Router()
const {ratingSaveHandler,details,detail,Update,avg}=require('../controllers/controller')

router.post('/rating-save',ratingSaveHandler)

router.put("/update",Update)

 router.get('/',details)

 router.get('/:email',detail)

 //router.get('/breakfast-rating', avg)



// router.put('/dupdate/:name/:message',Delete)


module.exports = router