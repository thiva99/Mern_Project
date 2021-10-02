const express=require('express')
const router=express.Router()
const {ratingSaveHandler,details,detail,Update,Fupdate,pecentage,search}=require('../controllers/controller')

router.post('/rating-save',ratingSaveHandler) //ok

router.put("/update",Update)

 router.get('/',details)//ok

 router.get('/search/:email',search)//ok

 router.get('/:email',detail)//ok

 router.get('/pecentage/:email',pecentage)//ok

router.put('/fupdate/:id/:iid/:feedback',Fupdate)


module.exports = router