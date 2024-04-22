const express=require('express')
const router=express.Router()
const path=require('path')
const rootDir=require('../util/path')
const contact=require('../controllers/contactUs')
const postSucc=require('../controllers/success')
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})
router.get('/contactus',contact.getContact);

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
router.post('/success',postSucc.getSuccess)

module.exports=router