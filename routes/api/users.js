const express=require('express');
const router=express.Router();
router.post('/',(req,res)=>{
    console.log(req.body);
})
router.get('/',(req,res)=>{
    res.send("user route");
})
module.exports=router;