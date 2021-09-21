const express =require('express')
const router=express.Router()
const {userSaveHandler,details,detail,Update,Delete}=require('../controllers/controller')

router.post('/save-user',userSaveHandler)

router.get('/',details)

router.get('/:email',detail)


router.put("/update",Update)

router.put('/dupdate/:name/:message',Delete)


module.exports = router