const express=require('express')
const router=express.Router()
const {ratingSaveHandler,details,detail,Update,Delete,pecentage,search}=require('../controllers/controller')

router.post('/rating-save',ratingSaveHandler)

router.put("/update",Update)

 router.get('/',details)

 router.get('/search/:email',search)

 router.get('/:email',detail)

 router.get('/pecentage/:email',pecentage)





// router.put('/dupdate/:name/:message',Delete)


module.exports = router