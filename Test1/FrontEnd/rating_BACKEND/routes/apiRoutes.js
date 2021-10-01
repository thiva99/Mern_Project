const express=require('express')
const router=express.Router()
const {ratingSaveHandler,details,detail,Update,Fupdate,pecentage,search}=require('../controllers/controller')

router.post('/rating-save',ratingSaveHandler)

router.put("/update",Update)

 router.get('/',details)

 router.get('/search/:email',search)

 router.get('/:email',detail)

 router.get('/pecentage/:email',pecentage)

router.put('/fupdate/:id/:iid/:feedback',Fupdate)


module.exports = router